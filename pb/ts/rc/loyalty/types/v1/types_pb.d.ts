// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file rc/loyalty/types/v1/types.proto (package rc.loyalty.types.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum rc.loyalty.types.v1.TransactionType
 */
export declare enum TransactionType {
  /**
   * @generated from enum value: TRANSACTION_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: TRANSACTION_TYPE_EARNED = 1;
   */
  EARNED = 1,

  /**
   * @generated from enum value: TRANSACTiON_TYPE_REDEEMED = 2;
   */
  REDEEMED = 2,

  /**
   * @generated from enum value: TRANSACTiON_TYPE_RETURNED = 3;
   */
  RETURNED = 3,

  /**
   * @generated from enum value: TRANSACTiON_TYPE_EXPIRED = 4;
   */
  EXPIRED = 4,
}

/**
 * @generated from message rc.loyalty.types.v1.PaginatedTransactions
 */
export declare class PaginatedTransactions extends Message<PaginatedTransactions> {
  /**
   * @generated from field: repeated rc.loyalty.types.v1.Transaction transactions = 1;
   */
  transactions: Transaction[];

  /**
   * @generated from field: bool has_prev_page = 2;
   */
  hasPrevPage: boolean;

  /**
   * @generated from field: bool has_next_page = 3;
   */
  hasNextPage: boolean;

  constructor(data?: PartialMessage<PaginatedTransactions>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "rc.loyalty.types.v1.PaginatedTransactions";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaginatedTransactions;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaginatedTransactions;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaginatedTransactions;

  static equals(a: PaginatedTransactions | PlainMessage<PaginatedTransactions> | undefined, b: PaginatedTransactions | PlainMessage<PaginatedTransactions> | undefined): boolean;
}

/**
 * @generated from message rc.loyalty.types.v1.Transactions
 */
export declare class Transactions extends Message<Transactions> {
  /**
   * @generated from field: repeated rc.loyalty.types.v1.Transaction transactions = 1;
   */
  transactions: Transaction[];

  constructor(data?: PartialMessage<Transactions>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "rc.loyalty.types.v1.Transactions";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Transactions;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Transactions;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Transactions;

  static equals(a: Transactions | PlainMessage<Transactions> | undefined, b: Transactions | PlainMessage<Transactions> | undefined): boolean;
}

/**
 * @generated from message rc.loyalty.types.v1.Transaction
 */
export declare class Transaction extends Message<Transaction> {
  /**
   * @generated from field: string identity_id = 1;
   */
  identityId: string;

  /**
   * @generated from field: rc.loyalty.types.v1.TransactionType transaction_type = 2;
   */
  transactionType: TransactionType;

  /**
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * @generated from field: uint32 amount = 4;
   */
  amount: number;

  /**
   * @generated from field: string created_at = 5;
   */
  createdAt: string;

  constructor(data?: PartialMessage<Transaction>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "rc.loyalty.types.v1.Transaction";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Transaction;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Transaction;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Transaction;

  static equals(a: Transaction | PlainMessage<Transaction> | undefined, b: Transaction | PlainMessage<Transaction> | undefined): boolean;
}

