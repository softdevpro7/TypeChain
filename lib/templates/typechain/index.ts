import {
  RawAbiDefinition,
  Contract,
  AbiParameter,
  EventArgDeclaration,
  ConstantDeclaration,
  ConstantFunctionDeclaration,
  FunctionDeclaration,
  EventDeclaration,
} from "../../abiParser";
import { EvmType, ArrayType } from "../../typeParser";
import { IContext } from "../../generateSource";

export function codeGenForContract(
  abi: Array<RawAbiDefinition>,
  input: Contract,
  context: IContext,
) {
  const runtimeNamespace = "TC";
  const typeName = context.fileName;

  return `
    import { BigNumber } from "bignumber.js";
    import * as ${runtimeNamespace} from "${context.relativeRuntimePath}"

    export class ${typeName} extends ${runtimeNamespace}.TypeChainContract {
      public readonly rawWeb3Contract: any;

      public constructor(web3: any, address: string | BigNumber) {
        const abi = ${JSON.stringify(abi)};
        super(web3, address, abi);
      }

      static async createAndValidate(web3: any, address: string | BigNumber): Promise<${typeName}> {
        const contract = new ${typeName}(web3, address);
        const code = await ${runtimeNamespace}.promisify(web3.eth.getCode, [address]);

        // in case of missing smartcontract, code can be equal to "0x0" or "0x" depending on exact web3 implementation
        // to cover all these cases we just check against the source code length — there won't be any meaningful EVM program in less then 3 chars
        if (code.length < 4) {
          throw new Error(\`Contract at \${address} doesn't exist!\`);
        }
        return contract; 
      }
      
      ${codeGenForConstants(runtimeNamespace, input.constants)}
      
      ${codeGenForConstantsFunctions(runtimeNamespace, input.constantFunctions)}
      
      ${codeGenForFunctions(runtimeNamespace, input.functions)}
      
      ${codeGenForEvents(runtimeNamespace, input.events)}
    }
`;
}

function codeGenForConstants(runtimeNamespace: string, constants: Array<ConstantDeclaration>) {
  return constants
    .map(
      ({ name, output }) => `
        public get ${name}(): Promise<${output.generateCodeForOutput()}> { 
            return ${runtimeNamespace}.promisify(this.rawWeb3Contract.${name}, []); 
        }
    `,
    )
    .join("\n");
}

function codeGenForConstantsFunctions(
  runtimeNamespace: string,
  constantFunctions: Array<ConstantFunctionDeclaration>,
) {
  return constantFunctions
    .map(
      ({ inputs, name, outputs }) => `
        public ${name}(${inputs
        .map(codeGenForParams)
        .join(", ")}): Promise<${codeGenForOutputTypeList(outputs)}> { 
            return ${runtimeNamespace}.promisify(this.rawWeb3Contract.${name}, [${inputs
        .map(codeGenForArgs)
        .join(", ")}]); 
        }
   `,
    )
    .join("\n");
}

function codeGenForFunctions(runtimeNamespace: string, functions: Array<FunctionDeclaration>) {
  return functions
    .map(({ payable, name, inputs }) => {
      const txParamsType = payable
        ? `${runtimeNamespace}.IPayableTxParams`
        : `${runtimeNamespace}.ITxParams`;
      return `public ${name}Tx(${inputs
        .map(codeGenForParams)
        .join(
          ", ",
        )}): ${runtimeNamespace}.DeferredTransactionWrapper<${txParamsType}> { return new ${runtimeNamespace}.DeferredTransactionWrapper<${txParamsType}>(this, "${name}", [${inputs
        .map(codeGenForArgs)
        .join(", ")}]);
                }`;
    })
    .join("\n");
}

function codeGenForEvents(runtimeNamespace: string, events: Array<EventDeclaration>) {
  return events
    .map(event => {
      const filterableEventParams = codeGenForEventArgs(event.inputs, true);
      const eventParams = codeGenForEventArgs(event.inputs, false);

      return `public ${
        event.name
      }Event(eventFilter: ${filterableEventParams}): ${runtimeNamespace}.DeferredEventWrapper<${eventParams}, ${filterableEventParams}> {
                return new ${runtimeNamespace}.DeferredEventWrapper<${eventParams}, ${filterableEventParams}>(this, '${
        event.name
      }', eventFilter);
              }`;
    })
    .join("\n");
}

function codeGenForParams(param: AbiParameter, index: number): string {
  return `${param.name || `arg${index}`}: ${param.type.generateCodeForInput()}`;
}

function codeGenForArgs(param: AbiParameter, index: number): string {
  const isArray = param.type instanceof ArrayType;
  const paramName = param.name || `arg${index}`;
  return isArray ? `${paramName}.map(val => val.toString())` : `${paramName}.toString()`;
}

function codeGenForOutputTypeList(output: Array<EvmType>): string {
  if (output.length === 1) {
    return output[0].generateCodeForOutput();
  } else {
    return `[${output.map(x => x.generateCodeForOutput()).join(", ")}]`;
  }
}

function codeGenForEventArgs(args: EventArgDeclaration[], onlyIndexed: boolean) {
  return `{${args
    .filter(arg => arg.isIndexed || !onlyIndexed)
    .map(arg => {
      const inputCodegen = arg.type.generateCodeForInput();

      // if we're specifying a filter, you can take a single value or an array of values to check for
      const argType = `${inputCodegen}${onlyIndexed ? ` | Array<${inputCodegen}>` : ""}`;
      return `${arg.name}${onlyIndexed ? "?" : ""}: ${argType}`;
    })
    .join(`, `)}}`;
}
