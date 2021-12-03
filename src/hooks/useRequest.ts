import { useEffect } from "react";
import { useRef } from "react";
import { useStatus } from "./useStatus";

type Options<P extends (...args: any) => Promise<any>> = {
  onStart?: () => any;
  onSuccess?: (res: any, ...args: Parameters<P>) => any;
  onFail?: (err: any, ...args: Parameters<P>) => any;
  initialStatus?: any;
  waitFinish?: boolean;
};

export function useRequest<P extends (...args: any) => Promise<any>>(
  promiseCb: P,
  { onStart, onSuccess, onFail, initialStatus, waitFinish }: Options<P> = {}
): { exec: P; status: any } {
  const mountedRef = useRef(false);
  const status = useStatus(initialStatus);

  useEffect((): any => {
    mountedRef.current = true;
    return () => (mountedRef.current = false);
  }, []);

  const executeRequest = (...args: any) => {
    if (waitFinish && status.isPending) return Promise.reject();

    const promise: any = promiseCb?.(...args);

    if (promise instanceof Promise) {
      status?.pending?.();
      onStart?.();
      return new Promise((resolve, reject) =>
        promise?.then?.(
          (res) => {
            if (mountedRef.current === true) {
              status.success(res);
            }
            onSuccess?.(res, ...args);
            resolve?.(res);
          },
          (err) => {
            if (mountedRef.current === true) {
              status.fail(err);
            }
            onFail?.(err, ...args);
            reject(err);
          }
        )
      );
    }

    return Promise.reject(promise);
  };

  // @ts-ignore
  return { exec: executeRequest, status };
}
