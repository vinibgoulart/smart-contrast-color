import Box from "@mui/material/Box";
import type { BoxProps } from "@mui/material/Box";
import type { ReactNode } from "react";
import { useTheme } from "@mui/material/styles";
import type { Palette, PaletteColor } from "@mui/material/styles";
import { ContrastContext } from "../context/contrastContext";

type Props = {
  children: ReactNode;
  _backgroundColor?: keyof Palette | string;
} & BoxProps;

export const Hero = ({ _backgroundColor = "primary", ...props }: Props) => {
  const theme = useTheme();
  const backgroundColor =
    (theme.palette[_backgroundColor as keyof Palette] as PaletteColor)?.main ??
    _backgroundColor;

  return (
    <ContrastContext.Provider value={{ color: backgroundColor }}>
      <Box width="100%" height="400px" sx={{ backgroundColor }} padding={10} {...props}>
        {props.children}
      </Box>
    </ContrastContext.Provider>
  );
};
