/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription,
} from ".";

interface NameManglingInterface extends Interface {
  functions: {
    works: TypedFunctionDescription<{ encode([]: []): string }>;
  };

  events: {};
}

export class NameMangling extends Contract {
  connect(signerOrProvider: Signer | Provider | string): NameMangling;
  attach(addressOrName: string): NameMangling;
  deployed(): Promise<NameMangling>;

  on(event: EventFilter | string, listener: Listener): NameMangling;
  once(event: EventFilter | string, listener: Listener): NameMangling;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): NameMangling;
  removeAllListeners(eventName: EventFilter | string): NameMangling;
  removeListener(eventName: any, listener: Listener): NameMangling;

  interface: NameManglingInterface;

  functions: {
    works(overrides?: TransactionOverrides): Promise<boolean>;

    "works()"(overrides?: TransactionOverrides): Promise<boolean>;
  };

  works(overrides?: TransactionOverrides): Promise<boolean>;

  "works()"(overrides?: TransactionOverrides): Promise<boolean>;

  filters: {};

  estimate: {
    works(overrides?: TransactionOverrides): Promise<BigNumber>;

    "works()"(overrides?: TransactionOverrides): Promise<BigNumber>;
  };
}
