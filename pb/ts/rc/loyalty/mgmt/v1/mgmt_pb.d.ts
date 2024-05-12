// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file rc/loyalty/mgmt/v1/mgmt.proto (package rc.loyalty.mgmt.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { TransactionType } from "../../types/v1/types_pb.js";

/**
 * @generated from enum rc.loyalty.mgmt.v1.LoyaltyType
 */
export declare enum LoyaltyType {
  /**
   * @generated from enum value: LOYALTY_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: LOYALTY_TYPE_POINTS_PER_MONETARY_UNIT = 1;
   */
  POINTS_PER_MONETARY_UNIT = 1,

  /**
   * @generated from enum value: LOYALTY_TYPE_CASH_BACK = 2;
   */
  CASH_BACK = 2,
}

/**
 * @generated from enum rc.loyalty.mgmt.v1.LoyaltyParticipants
 */
export declare enum LoyaltyParticipants {
  /**
   * @generated from enum value: LOYALTY_PARTICIPANTS_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: LOYALTY_PARTICIPANTS_ALL_CUSTOMERS = 1;
   */
  ALL_CUSTOMERS = 1,

  /**
   * @generated from enum value: LOYALTY_PARTICIPANTS_ONLY_STORE_ACCOUNTS = 2;
   */
  ONLY_STORE_ACCOUNTS = 2,
}

/**
 * @generated from message rc.loyalty.mgmt.v1.ConfigureLoyaltyRequest
 */
export declare class ConfigureLoyaltyRequest extends Message<ConfigureLoyaltyRequest> {
  /**
   * @generated from field: string community_id = 1;
   */
  communityId: string;

  /**
   * @generated from field: rc.loyalty.mgmt.v1.LoyaltyType loyalty_type = 2;
   */
  loyaltyType: LoyaltyType;

  /**
   * NOTE: "ALL_CUSTOMERS" or "ONLY_STORE_ACCOUNTS"
   *
   * @generated from field: rc.loyalty.mgmt.v1.LoyaltyParticipants participants = 3;
   */
  participants: LoyaltyParticipants;

  /**
   * @generated from field: string points_name = 4;
   */
  pointsName: string;

  /**
   * @generated from field: optional uint32 cashback_percentage = 5;
   */
  cashbackPercentage?: number;

  /**
   * @generated from field: optional uint32 points_earned = 6;
   */
  pointsEarned?: number;

  /**
   * @generated from field: optional uint32 monetary_unit_spent = 7;
   */
  monetaryUnitSpent?: number;

  /**
   * @generated from field: string currency = 8;
   */
  currency: string;

  /**
   * @generated from field: optional uint32 cashback_redemption_points = 9;
   */
  cashbackRedemptionPoints?: number;

  /**
   * @generated from field: optional uint32 discount_per_points_redeemed = 10;
   */
  discountPerPointsRedeemed?: number;

  /**
   * @generated from field: optional uint32 points_expiry = 11;
   */
  pointsExpiry?: number;

  /**
   * @generated from field: bool reward_online = 12;
   */
  rewardOnline: boolean;

  /**
   * @generated from field: bool reward_pos = 13;
   */
  rewardPos: boolean;

  /**
   * @generated from field: bool exclude_coupon_discounts = 14;
   */
  excludeCouponDiscounts: boolean;

  /**
   * @generated from field: bool include_shipping = 15;
   */
  includeShipping: boolean;

  constructor(data?: PartialMessage<ConfigureLoyaltyRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "rc.loyalty.mgmt.v1.ConfigureLoyaltyRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConfigureLoyaltyRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConfigureLoyaltyRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConfigureLoyaltyRequest;

  static equals(a: ConfigureLoyaltyRequest | PlainMessage<ConfigureLoyaltyRequest> | undefined, b: ConfigureLoyaltyRequest | PlainMessage<ConfigureLoyaltyRequest> | undefined): boolean;
}

/**
 * @generated from message rc.loyalty.mgmt.v1.GetLoyaltyRequest
 */
export declare class GetLoyaltyRequest extends Message<GetLoyaltyRequest> {
  /**
   * @generated from oneof rc.loyalty.mgmt.v1.GetLoyaltyRequest.identifier
   */
  identifier: {
    /**
     * @generated from field: string id = 1;
     */
    value: string;
    case: "id";
  } | {
    /**
     * @generated from field: string community_id = 2;
     */
    value: string;
    case: "communityId";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<GetLoyaltyRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "rc.loyalty.mgmt.v1.GetLoyaltyRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLoyaltyRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLoyaltyRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLoyaltyRequest;

  static equals(a: GetLoyaltyRequest | PlainMessage<GetLoyaltyRequest> | undefined, b: GetLoyaltyRequest | PlainMessage<GetLoyaltyRequest> | undefined): boolean;
}

/**
 * @generated from message rc.loyalty.mgmt.v1.ActivateMembershipRequest
 */
export declare class ActivateMembershipRequest extends Message<ActivateMembershipRequest> {
  /**
   * @generated from oneof rc.loyalty.mgmt.v1.ActivateMembershipRequest.identifier
   */
  identifier: {
    /**
     * @generated from field: string loyalty_id = 1;
     */
    value: string;
    case: "loyaltyId";
  } | {
    /**
     * @generated from field: string community_id = 2;
     */
    value: string;
    case: "communityId";
  } | { case: undefined; value?: undefined };

  /**
   * @generated from field: string community_membership_id = 3;
   */
  communityMembershipId: string;

  /**
   * @generated from field: bool is_active = 4;
   */
  isActive: boolean;

  constructor(data?: PartialMessage<ActivateMembershipRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "rc.loyalty.mgmt.v1.ActivateMembershipRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivateMembershipRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivateMembershipRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivateMembershipRequest;

  static equals(a: ActivateMembershipRequest | PlainMessage<ActivateMembershipRequest> | undefined, b: ActivateMembershipRequest | PlainMessage<ActivateMembershipRequest> | undefined): boolean;
}

/**
 * @generated from message rc.loyalty.mgmt.v1.Loyalty
 */
export declare class Loyalty extends Message<Loyalty> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string community_id = 2;
   */
  communityId: string;

  /**
   * NOTE: "POINTS_PER_MONETARY_UNIT" or "CASH_BACK"
   *
   * @generated from field: rc.loyalty.mgmt.v1.LoyaltyType loyalty_type = 3;
   */
  loyaltyType: LoyaltyType;

  /**
   * NOTE: "ALL_CUSTOMERS" or "ONLY_STORE_ACCOUNTS"
   *
   * @generated from field: rc.loyalty.mgmt.v1.LoyaltyParticipants participants = 4;
   */
  participants: LoyaltyParticipants;

  /**
   * @generated from field: string points_name = 5;
   */
  pointsName: string;

  /**
   * @generated from field: optional uint32 cashback_percentage = 6;
   */
  cashbackPercentage?: number;

  /**
   * @generated from field: optional uint32 points_earned = 7;
   */
  pointsEarned?: number;

  /**
   * @generated from field: optional uint32 monetary_unit_spent = 8;
   */
  monetaryUnitSpent?: number;

  /**
   * @generated from field: string currency = 9;
   */
  currency: string;

  /**
   * @generated from field: optional uint32 cashback_redemption_points = 10;
   */
  cashbackRedemptionPoints?: number;

  /**
   * @generated from field: optional uint32 discount_per_points_redeemed = 11;
   */
  discountPerPointsRedeemed?: number;

  /**
   * @generated from field: optional uint32 points_expiry = 12;
   */
  pointsExpiry?: number;

  /**
   * @generated from field: bool reward_online = 13;
   */
  rewardOnline: boolean;

  /**
   * @generated from field: bool reward_pos = 14;
   */
  rewardPos: boolean;

  /**
   * @generated from field: bool exclude_coupon_discounts = 15;
   */
  excludeCouponDiscounts: boolean;

  /**
   * @generated from field: bool include_shipping = 16;
   */
  includeShipping: boolean;

  constructor(data?: PartialMessage<Loyalty>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "rc.loyalty.mgmt.v1.Loyalty";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Loyalty;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Loyalty;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Loyalty;

  static equals(a: Loyalty | PlainMessage<Loyalty> | undefined, b: Loyalty | PlainMessage<Loyalty> | undefined): boolean;
}

/**
 * @generated from message rc.loyalty.mgmt.v1.Membership
 */
export declare class Membership extends Message<Membership> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string loyalty_id = 2;
   */
  loyaltyId: string;

  /**
   * @generated from field: string community_membership_id = 3;
   */
  communityMembershipId: string;

  /**
   * @generated from field: bool is_active = 4;
   */
  isActive: boolean;

  constructor(data?: PartialMessage<Membership>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "rc.loyalty.mgmt.v1.Membership";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Membership;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Membership;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Membership;

  static equals(a: Membership | PlainMessage<Membership> | undefined, b: Membership | PlainMessage<Membership> | undefined): boolean;
}

/**
 * @generated from message rc.loyalty.mgmt.v1.GetActivityRequest
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
   * @generated from field: string community_id = 3;
   */
  communityId: string;

  /**
   * server will default to 20
   *
   * @generated from field: optional uint64 page_size = 4;
   */
  pageSize?: bigint;

  constructor(data?: PartialMessage<GetActivityRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "rc.loyalty.mgmt.v1.GetActivityRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetActivityRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetActivityRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetActivityRequest;

  static equals(a: GetActivityRequest | PlainMessage<GetActivityRequest> | undefined, b: GetActivityRequest | PlainMessage<GetActivityRequest> | undefined): boolean;
}

/**
 * @generated from message rc.loyalty.mgmt.v1.GetStatsRequest
 */
export declare class GetStatsRequest extends Message<GetStatsRequest> {
  constructor(data?: PartialMessage<GetStatsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "rc.loyalty.mgmt.v1.GetStatsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetStatsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetStatsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetStatsRequest;

  static equals(a: GetStatsRequest | PlainMessage<GetStatsRequest> | undefined, b: GetStatsRequest | PlainMessage<GetStatsRequest> | undefined): boolean;
}

/**
 * @generated from message rc.loyalty.mgmt.v1.Stats
 */
export declare class Stats extends Message<Stats> {
  /**
   * NOTE: Points or Cashback earned.
   *
   * @generated from field: uint32 points_cashback_earned = 1;
   */
  pointsCashbackEarned: number;

  /**
   * NOTE: Points or Cashback redeemed.
   *
   * @generated from field: uint32 points_cashback_redeemed = 2;
   */
  pointsCashbackRedeemed: number;

  /**
   * @generated from field: uint32 redemption_rate = 3;
   */
  redemptionRate: number;

  /**
   * @generated from field: uint32 revenue = 4;
   */
  revenue: number;

  /**
   * @generated from field: string revenue_currency = 5;
   */
  revenueCurrency: string;

  constructor(data?: PartialMessage<Stats>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "rc.loyalty.mgmt.v1.Stats";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Stats;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Stats;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Stats;

  static equals(a: Stats | PlainMessage<Stats> | undefined, b: Stats | PlainMessage<Stats> | undefined): boolean;
}

