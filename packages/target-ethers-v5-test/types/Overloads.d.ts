/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

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

interface OverloadsInterface extends ethers.utils.Interface {
  functions: {
    "overload1(int256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "overload1",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "overload1", data: BytesLike): Result;

  events: {};
}

export class Overloads extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: OverloadsInterface;

  functions: {
    "overload1(int256)"(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "overload1(uint256,uint256)"(
      input1: BigNumberish,
      input2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;
  };

  "overload1(int256)"(
    input1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "overload1(uint256,uint256)"(
    input1: BigNumberish,
    input2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    "overload1(int256)"(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "overload1(uint256,uint256)"(
      input1: BigNumberish,
      input2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    "overload1(int256)"(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "overload1(uint256,uint256)"(
      input1: BigNumberish,
      input2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    "overload1(int256)"(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "overload1(uint256,uint256)"(
      input1: BigNumberish,
      input2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
