import {
  Contract,
  AbiParameter,
  ConstantFunctionDeclaration,
  FunctionDeclaration,
  ConstantDeclaration,
} from "../../parser/abiParser";
import {
  EvmType,
  IntegerType,
  UnsignedIntegerType,
  AddressType,
  VoidType,
  BytesType,
  BooleanType,
  ArrayType,
  StringType,
  TupleType,
} from "../../parser/typeParser";

export function codegen(contracts: Contract[]) {
  const template = `
/// <reference types="truffle-typings" />
import { BigNumber } from "bignumber.js";

${contracts.map(generateContractInterface).join("\n")}

${contracts.map(generateContractInstanceInterface).join("\n")}
  `;

  return template;
}

export function generateArtifactHeaders(contracts: Contract[]): string {
  return `
  /// <reference types="truffle-typings" />

  import * as TruffleContracts from ".";
  
  declare global {
    namespace Truffle {
      interface Artifacts {
        ${contracts
          .map(f => `require(name: "${f.name}"): TruffleContracts.${f.name}Contract;`)
          .join("\n")}
      }
    }
  }  
  `;
}

function generateContractInterface(c: Contract): string {
  return `
export interface ${c.name}Contract extends Truffle.Contract<${c.name}Instance> {
  ${
    c.constructor
      ? `"new"(${generateInputTypes(
          c.constructor.inputs,
        )} meta?: Truffle.TransactionDetails): Promise<${c.name}Instance>;`
      : `"new"(meta?: Truffle.TransactionDetails): Promise<${c.name}Instance>;`
  }
}
`;
}

function generateContractInstanceInterface(c: Contract): string {
  return `
export interface ${c.name}Instance {
  ${c.constantFunctions.map(generateFunction).join("\n")}
  ${c.functions.map(generateFunction).join("\n")}
  ${c.constants.map(generateConstants).join("\n")}
}
  `;
}

function generateFunction(fn: ConstantFunctionDeclaration | FunctionDeclaration): string {
  return `
  ${fn.name}(${generateInputTypes(
    fn.inputs,
  )} txDetails?: Truffle.TransactionDetails): Promise<${generateOutputTypes(fn.outputs)}>;
`;
}

function generateConstants(fn: ConstantDeclaration): string {
  return `${fn.name}(txDetails?: Truffle.TransactionDetails): Promise<${generateOutputType(
    fn.output,
  )}>;`;
}

function generateInputTypes(input: Array<AbiParameter>): string {
  if (input.length === 0) {
    return "";
  }
  return (
    input
      .map((input, index) => `${input.name || `arg${index}`}: ${generateInputType(input.type)}`)
      .join(", ") + ", "
  );
}

function generateOutputTypes(outputs: Array<AbiParameter>): string {
  if (outputs.length === 1) {
    return generateOutputType(outputs[0].type);
  } else {
    return `[${outputs.map(param => generateOutputType(param.type)).join(", ")}]`;
  }
}

function generateInputType(evmType: EvmType): string {
  switch (evmType.constructor) {
    case IntegerType:
      return "number | BigNumber | string";
    case UnsignedIntegerType:
      return "number | BigNumber | string";
    case AddressType:
      return "string | BigNumber";
    case BytesType:
      return "string | BigNumber";
    case ArrayType:
      return `(${generateInputType((evmType as ArrayType).itemType)})[]`;
    case BooleanType:
      return "boolean";
    case StringType:
      return "string";
    case TupleType:
      return generateTupleType(evmType as TupleType, generateInputType);

    default:
      throw new Error(`Unrecognized type ${evmType}`);
  }
}

function generateOutputType(evmType: EvmType): string {
  switch (evmType.constructor) {
    case IntegerType:
      return "BigNumber";
    case UnsignedIntegerType:
      return "BigNumber";
    case AddressType:
      return "string";
    case VoidType:
      return "void";
    case BytesType:
      return "string";
    case ArrayType:
      return `(${generateOutputType((evmType as ArrayType).itemType)})[]`;
    case BooleanType:
      return "boolean";
    case StringType:
      return "string";
    case TupleType:
      return generateTupleType(evmType as TupleType, generateOutputType);

    default:
      throw new Error(`Unrecognized type ${evmType}`);
  }
}

function generateTupleType(tuple: TupleType, generator: (evmType: EvmType) => string) {
  return (
    "{" +
    tuple.components
      .map(component => `${component.name}: ${generator(component.type)}`)
      .join(", ") +
    "}"
  );
}
