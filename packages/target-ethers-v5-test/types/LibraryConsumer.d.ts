/* Generated by ts-generator ver. 0.1.0 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface LibraryConsumerInterface extends ethers.utils.Interface {
  functions: {
    "someOther(uint8)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "someOther",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "someOther", data: BytesLike): Result;

  events: {};
}

export class LibraryConsumer extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: LibraryConsumerInterface;

  functions: {
    someOther(
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "someOther(uint8)"(
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;
  };

  someOther(b: BigNumberish, overrides?: CallOverrides): Promise<number>;

  "someOther(uint8)"(
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  callStatic: {
    someOther(b: BigNumberish, overrides?: CallOverrides): Promise<number>;

    "someOther(uint8)"(
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;
  };

  filters: {};

  estimateGas: {
    someOther(b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "someOther(uint8)"(
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    someOther(
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "someOther(uint8)"(
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
