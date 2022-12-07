import { useCallback, useEffect, useState } from "react";

export const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const windowResizedListener = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", windowResizedListener);
    return () => {
      window.removeEventListener("resize", windowResizedListener);
    };
  }, []);

  return width;
};
