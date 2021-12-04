import { useMemo } from "react";
import { useState } from "react";

const PENDING = "PENDING";
const SUCCESS = "SUCCESS";
const FAIL = "FAIL";

export function useStatus(initialState = "") {
  const [payload, setPayload] = useState("");
  const [status, setStatus] = useState(initialState);

  const statusObj = useMemo(
    () => ({
      isPending: status === PENDING,
      isSuccess: status === SUCCESS,
      isFail: status === FAIL,
      pending: (data?: any) => {
        setStatus(PENDING);
        if (data) setPayload(data);
      },
      success: (data?: any) => {
        setStatus(SUCCESS);
        if (data) setPayload(data);
      },
      fail: (data?: any) => {
        setStatus(FAIL);
        if (data) setPayload(data);
      },
      payload
    }),
    [payload, status]
  );

  return statusObj;
}
