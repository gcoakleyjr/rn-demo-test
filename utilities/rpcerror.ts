import { ConnectError, Code } from "@connectrpc/connect";

const codeToErrorName: Record<Code, string> = {
  [Code.Canceled]: "Canceled",
  [Code.Unknown]: "Unknown",
  [Code.InvalidArgument]: "Invalid Argument",
  [Code.DeadlineExceeded]: "Deadline Exceeded",
  [Code.NotFound]: "Not Found",
  [Code.AlreadyExists]: "Already Exists",
  [Code.PermissionDenied]: "Permission Denied",
  [Code.ResourceExhausted]: "Resource Exhausted",
  [Code.FailedPrecondition]: "Failed Precondition",
  [Code.Aborted]: "Aborted",
  [Code.OutOfRange]: "Out Of Range",
  [Code.Unimplemented]: "Unimplemented",
  [Code.Internal]: "Internal",
  [Code.Unavailable]: "Unavailable",
  [Code.DataLoss]: "DataLoss",
  [Code.Unauthenticated]: "Unauthenticated",
};

const isConnectError = (err: any): boolean => {
  return err instanceof ConnectError;
};

export const errorToMessage = (err: any): string => {
  if (err === null) return "";

  if (isConnectError(err)) {
    const connectErr = err as ConnectError;
    return `${codeToErrorName[connectErr.code]}: ${connectErr.rawMessage}`;
  }

  return err.toString();
};

export const errorToMessageUser = (err: any): string => {
  if (err === null) return "";

  if (isConnectError(err)) {
    const connectErr = err as ConnectError;
    return connectErr.rawMessage;
  }

  return err.toString();
};
