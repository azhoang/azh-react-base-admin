import { Position, PositionElementValue } from "@/types";
import React from "react";

export const usePositionElement = (
  elementRef: React.RefObject<HTMLElement>,
): PositionElementValue => {
  const [position, setPosition] = React.useState<Position>({ top: 0, left: 0 });

  const getCurrentPosition = (): Position => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      return {
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
      };
    }
    return position;
  };

  const updatePosition = () => {
    setPosition(getCurrentPosition());
  };
  
  React.useEffect(() => {
    updatePosition();
    elementRef.current?.addEventListener("resize", updatePosition);
    elementRef.current?.addEventListener("scroll", updatePosition);

    return () => {
      elementRef.current?.removeEventListener("resize", updatePosition);
      elementRef.current?.removeEventListener("scroll", updatePosition);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef.current]);

  return {
    ...position,
    setPosition,
    getCurrentPosition,
  };
};
