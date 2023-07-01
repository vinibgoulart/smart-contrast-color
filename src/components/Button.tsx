import type { ReactNode } from "react";
import { useContrastColor } from "../context/contrastContext";
import _Button from "@mui/material/Button";

type Props = {
  children: ReactNode;
};

export const Button = (props: Props) => {
  return (
    <_Button variant="contained" color={useContrastColor()}>
      {props.children}
    </_Button>
  );
};
