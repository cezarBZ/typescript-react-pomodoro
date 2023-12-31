import { useEffect, useRef } from "react";

const useInterval = <c extends CallableFunction>(
  callback: c,
  delay: number | null
): void => {
  const savedCallback = useRef<c>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) savedCallback.current();
    };
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
