import { useState, useCallback } from "react";

type ReturnType = {
  count: number;
  increment: () => void;
};
export const useCounter = (initialValue: number = 0): ReturnType => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => setCount((pre) => pre + 1), []);

  return { count, increment };
};
