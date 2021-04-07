/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import { Interface } from "@ethersproject/abi";
const _abi = [
  {
    inputs: [
      {
        internalType: "enum Lib.BOOL",
        name: "b",
        type: "uint8",
      },
    ],
    name: "someOther",
    outputs: [
      {
        internalType: "enum Lib.BOOL",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

import type {
  LibraryConsumer,
  LibraryConsumerInterface,
} from "../LibraryConsumer";
export class LibraryConsumer__factory {
  static abi = _abi;
  static get interface(): LibraryConsumerInterface {
    return new Interface(_abi) as LibraryConsumerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibraryConsumer {
    return new Contract(address, _abi, signerOrProvider) as LibraryConsumer;
  }
}
