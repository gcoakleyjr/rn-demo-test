import React, { createContext, useContext, useMemo } from "react";
import { PromiseClient } from "@bufbuild/connect";
import { LoyaltyService } from "../pb/ts/rc/loyalty/portal/v1/portal_connect";
import { createPromiseClient, Interceptor } from "@connectrpc/connect";
import { createXHRGrpcWebTransport } from "@/custom-transport";

export type GrpcContext = {
  loyaltyService: PromiseClient<typeof LoyaltyService> | undefined;
};

export const GrpcContext = createContext<GrpcContext | null>(null);

export function GrpcContextProvider({
  children,
  token,
}: {
  children: React.ReactNode;
  token?: string;
}) {
  const auth: Interceptor = (next) => async (req) => {
    if (token !== "") {
      req.header.set("Authorization", `Bearer ${token}`);
    }
    return await next(req);
  };

  const loyaltyTransport = createXHRGrpcWebTransport({
    baseUrl: "http://localhost:8100",
    useBinaryFormat: false,
    interceptors: [auth],
  });

  const loyaltyService = useMemo(
    () => createPromiseClient(LoyaltyService, loyaltyTransport),
    []
  );

  const values = {
    loyaltyService: loyaltyService,
  };

  return <GrpcContext.Provider value={values}>{children}</GrpcContext.Provider>;
}

export function useGrpcContext() {
  const context = useContext(GrpcContext);
  if (!context) {
    throw new Error("useGrpcContext must be used within a GrpcContextProvider");
  }
  return context;
}
