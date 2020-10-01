/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface LibContract extends Truffle.Contract<LibInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<LibInstance>;
}

type AllEvents = never;

export interface LibInstance extends Truffle.ContractInstance {
  other(
    b: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  methods: {
    other(
      b: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
