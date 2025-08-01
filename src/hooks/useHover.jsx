import { useState, useRef, useEffect, useCallback } from "react";

function useHover() {
  const [value, setValue] = useState(false);
  const ref = useRef(null);

  const handleMouseOver = useCallback(() => setValue(true), []);
  const handleMouseOut = useCallback(() => setValue(false), []);

  useEffect(
    () => {
      const node = ref.current;
      if (!node) {
        return;
      }

      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    },
    [handleMouseOut, handleMouseOver]
  );

  return [ref, value];
}

export default useHover;
