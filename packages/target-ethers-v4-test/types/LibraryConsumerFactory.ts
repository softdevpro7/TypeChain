/* Generated by ts-generator ver. 0.1.0 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "ethers/providers";

import { LibraryConsumer } from "./LibraryConsumer";

export class LibraryConsumerFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibraryConsumer {
    return new Contract(address, _abi, signerOrProvider) as LibraryConsumer;
  }
}

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
