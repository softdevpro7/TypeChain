/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  StructsInConstructor,
  StructsInConstructorInterface,
  Vector2Struct,
} from "../StructsInConstructor";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct Vector2[2]",
        name: "segment",
        type: "tuple[2]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161029a38038061029a8339818101604052810190610032919061012f565b5061024d565b600061004b61004684610181565b61015c565b905080828560408602820111156100655761006461021b565b5b60005b85811015610095578161007b88826100ca565b845260208401935060408301925050600181019050610068565b5050509392505050565b600082601f8301126100b4576100b3610211565b5b60026100c1848285610038565b91505092915050565b6000604082840312156100e0576100df610216565b5b6100ea604061015c565b905060006100fa8482850161011a565b600083015250602061010e8482850161011a565b60208301525092915050565b60008151905061012981610236565b92915050565b60006080828403121561014557610144610220565b5b60006101538482850161009f565b91505092915050565b6000610166610177565b905061017282826101b1565b919050565b6000604051905090565b600067ffffffffffffffff82111561019c5761019b6101e2565b5b602082029050919050565b6000819050919050565b6101ba82610225565b810181811067ffffffffffffffff821117156101d9576101d86101e2565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b61023f816101a7565b811461024a57600080fd5b50565b603f8061025b6000396000f3fe6080604052600080fdfea2646970667358221220ca8f8790c645fad67294067b65ba5ff0346d294dc27258dbd8582740604a13a164736f6c63430008070033";

type StructsInConstructorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StructsInConstructorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StructsInConstructor__factory extends ContractFactory {
  constructor(...args: StructsInConstructorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    segment: [Vector2Struct, Vector2Struct],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StructsInConstructor> {
    return super.deploy(segment, overrides || {}) as Promise<
      StructsInConstructor
    >;
  }
  getDeployTransaction(
    segment: [Vector2Struct, Vector2Struct],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(segment, overrides || {});
  }
  attach(address: string): StructsInConstructor {
    return super.attach(address) as StructsInConstructor;
  }
  connect(signer: Signer): StructsInConstructor__factory {
    return super.connect(signer) as StructsInConstructor__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StructsInConstructorInterface {
    return new utils.Interface(_abi) as StructsInConstructorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StructsInConstructor {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as StructsInConstructor;
  }
}
