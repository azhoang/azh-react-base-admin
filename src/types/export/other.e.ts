import React from "react";
export interface Position {
  top: number;
  left: number;
}

export type PositionElementValue = Position & {
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  getCurrentPosition: () => Position;
};
