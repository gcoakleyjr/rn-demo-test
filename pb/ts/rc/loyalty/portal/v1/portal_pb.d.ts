// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file rc/loyalty/portal/v1/portal.proto (package rc.loyalty.portal.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { TransactionType } from "../../types/v1/types_pb.js";

/**
 * @generated from message rc.loyalty.portal.v1.GetBalanceRequest
 */
export declare class GetBalanceRequest extends Message<GetBalanceRequest> {
  constructor(data?: PartialMessage<GetBalanceRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "rc.loyalty.portal.v1.GetBalanceRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetBalanceRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetBalanceRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetBalanceRequest;

  static equals(a: GetBalanceRequest | PlainMessage<GetBalanceRequest> | undefined, b: GetBalanceRequest | PlainMessage<GetBalanceRequest> | undefined): boolean;
}

/**
 * @generated from message rc.loyalty.portal.v1.GetActivityRequest
 */
export declare class GetActivityRequest extends Message<GetActivityRequest> {
  /**
   * @generated from field: optional rc.loyalty.types.v1.TransactionType transaction_type = 1;
   */
  transactionType?: TransactionType;

  /**
   * @generated from field: uint64 page_number = 2;
   */
  pageNumber: bigint;

  /**
   * server will default to 20
   *
   * @generated from field: optional uint64 page_size = 3;
   */
  pageSize?: bigint;

  constructor(data?: PartialMessage<GetActivityRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "rc.loyalty.portal.v1.GetActivityRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetActivityRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetActivityRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetActivityRequest;

  static equals(a: GetActivityRequest | PlainMessage<GetActivityRequest> | undefined, b: GetActivityRequest | PlainMessage<GetActivityRequest> | undefined): boolean;
}

/**
 * @generated from message rc.loyalty.portal.v1.Balance
 */
export declare class Balance extends Message<Balance> {
  /**
   * @generated from field: int32 amount = 1;
   */
  amount: number;

  constructor(data?: PartialMessage<Balance>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "rc.loyalty.portal.v1.Balance";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Balance;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Balance;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Balance;

  static equals(a: Balance | PlainMessage<Balance> | undefined, b: Balance | PlainMessage<Balance> | undefined): boolean;
}

