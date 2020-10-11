/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { BigNumber } from "bignumber.js";

export interface DataTypesPureContract
  extends Truffle.Contract<DataTypesPureInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<DataTypesPureInstance>;
}

type AllEvents = never;

export interface DataTypesPureInstance extends Truffle.ContractInstance {
  pure_uint8(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  pure_uint256(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  pure_int8(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  pure_int256(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  pure_bool(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

  pure_address(txDetails?: Truffle.TransactionDetails): Promise<string>;

  pure_bytes1(txDetails?: Truffle.TransactionDetails): Promise<string>;

  pure_bytes(txDetails?: Truffle.TransactionDetails): Promise<string>;

  pure_string(txDetails?: Truffle.TransactionDetails): Promise<string>;

  pure_stat_array(txDetails?: Truffle.TransactionDetails): Promise<BigNumber[]>;

  pure_tuple(
    txDetails?: Truffle.TransactionDetails
  ): Promise<[BigNumber, BigNumber]>;

  pure_named(
    txDetails?: Truffle.TransactionDetails
  ): Promise<[BigNumber, BigNumber]>;

  pure_struct(
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ uint256_0: BigNumber; uint256_1: BigNumber }>;

  pure_enum(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;
}
