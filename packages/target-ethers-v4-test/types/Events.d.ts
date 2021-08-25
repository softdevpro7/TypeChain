/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { TypedEventDescription, TypedFunctionDescription } from ".";

interface EventsInterface extends Interface {
  functions: {
    emit_anon1: TypedFunctionDescription<{ encode([]: []): string }>;

    emit_event1: TypedFunctionDescription<{ encode([]: []): string }>;

    emit_event2: TypedFunctionDescription<{ encode([]: []): string }>;

    emit_event3: TypedFunctionDescription<{ encode([]: []): string }>;

    emit_event3_overloaded: TypedFunctionDescription<{
      encode([]: []): string;
    }>;

    emit_event4: TypedFunctionDescription<{ encode([]: []): string }>;
  };

  events: {
    AnonEvent1: TypedEventDescription<{
      encodeTopics([value1]: [BigNumberish | null]): string[];
    }>;

    Event1: TypedEventDescription<{
      encodeTopics([value1, value2]: [BigNumberish | null, null]): string[];
    }>;

    Event2: TypedEventDescription<{ encodeTopics([]: [null]): string[] }>;

    Event3: TypedEventDescription<{
      encodeTopics([value1, value2]: [boolean | null, null]): string[];
    }>;

    Event4: TypedEventDescription<{ encodeTopics([data]: [null]): string[] }>;

    NoArgsEvent: TypedEventDescription<{ encodeTopics([]: []): string[] }>;
  };
}

export class Events extends Contract {
  connect(signerOrProvider: Signer | Provider | string): Events;
  attach(addressOrName: string): Events;
  deployed(): Promise<Events>;

  on(event: EventFilter | string, listener: Listener): Events;
  once(event: EventFilter | string, listener: Listener): Events;
  addListener(eventName: EventFilter | string, listener: Listener): Events;
  removeAllListeners(eventName: EventFilter | string): Events;
  removeListener(eventName: any, listener: Listener): Events;

  interface: EventsInterface;

  functions: {
    emit_anon1(overrides?: UnsignedTransaction): Promise<ContractTransaction>;

    "emit_anon1()"(
      overrides?: UnsignedTransaction
    ): Promise<ContractTransaction>;

    emit_event1(overrides?: UnsignedTransaction): Promise<ContractTransaction>;

    "emit_event1()"(
      overrides?: UnsignedTransaction
    ): Promise<ContractTransaction>;

    emit_event2(overrides?: UnsignedTransaction): Promise<ContractTransaction>;

    "emit_event2()"(
      overrides?: UnsignedTransaction
    ): Promise<ContractTransaction>;

    emit_event3(overrides?: UnsignedTransaction): Promise<ContractTransaction>;

    "emit_event3()"(
      overrides?: UnsignedTransaction
    ): Promise<ContractTransaction>;

    emit_event3_overloaded(
      overrides?: UnsignedTransaction
    ): Promise<ContractTransaction>;

    "emit_event3_overloaded()"(
      overrides?: UnsignedTransaction
    ): Promise<ContractTransaction>;

    emit_event4(overrides?: UnsignedTransaction): Promise<ContractTransaction>;

    "emit_event4()"(
      overrides?: UnsignedTransaction
    ): Promise<ContractTransaction>;
  };

  emit_anon1(overrides?: UnsignedTransaction): Promise<ContractTransaction>;

  "emit_anon1()"(overrides?: UnsignedTransaction): Promise<ContractTransaction>;

  emit_event1(overrides?: UnsignedTransaction): Promise<ContractTransaction>;

  "emit_event1()"(
    overrides?: UnsignedTransaction
  ): Promise<ContractTransaction>;

  emit_event2(overrides?: UnsignedTransaction): Promise<ContractTransaction>;

  "emit_event2()"(
    overrides?: UnsignedTransaction
  ): Promise<ContractTransaction>;

  emit_event3(overrides?: UnsignedTransaction): Promise<ContractTransaction>;

  "emit_event3()"(
    overrides?: UnsignedTransaction
  ): Promise<ContractTransaction>;

  emit_event3_overloaded(
    overrides?: UnsignedTransaction
  ): Promise<ContractTransaction>;

  "emit_event3_overloaded()"(
    overrides?: UnsignedTransaction
  ): Promise<ContractTransaction>;

  emit_event4(overrides?: UnsignedTransaction): Promise<ContractTransaction>;

  "emit_event4()"(
    overrides?: UnsignedTransaction
  ): Promise<ContractTransaction>;

  filters: {
    AnonEvent1(value1: BigNumberish | null): EventFilter;

    Event1(value1: BigNumberish | null, value2: null): EventFilter;

    Event2(undefined: null): EventFilter;

    Event3(value1: boolean | null, value2: null): EventFilter;

    Event4(data: null): EventFilter;

    NoArgsEvent(): EventFilter;
  };

  estimate: {
    emit_anon1(overrides?: UnsignedTransaction): Promise<BigNumber>;

    "emit_anon1()"(overrides?: UnsignedTransaction): Promise<BigNumber>;

    emit_event1(overrides?: UnsignedTransaction): Promise<BigNumber>;

    "emit_event1()"(overrides?: UnsignedTransaction): Promise<BigNumber>;

    emit_event2(overrides?: UnsignedTransaction): Promise<BigNumber>;

    "emit_event2()"(overrides?: UnsignedTransaction): Promise<BigNumber>;

    emit_event3(overrides?: UnsignedTransaction): Promise<BigNumber>;

    "emit_event3()"(overrides?: UnsignedTransaction): Promise<BigNumber>;

    emit_event3_overloaded(overrides?: UnsignedTransaction): Promise<BigNumber>;

    "emit_event3_overloaded()"(
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    emit_event4(overrides?: UnsignedTransaction): Promise<BigNumber>;

    "emit_event4()"(overrides?: UnsignedTransaction): Promise<BigNumber>;
  };
}
