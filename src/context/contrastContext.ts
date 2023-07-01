import { createContext, useContext } from "react";
import { getColorBrightness } from "../utils/getColorBrightness";

type IContrastContext = {
  color: string;
};

export const defaultColor = "#fff";

export const ContrastContext = createContext<IContrastContext>({
  color: defaultColor,
});

export const useContrastContext = () => useContext(ContrastContext) || {};

export const useContrastColor = () => {
  const { color = defaultColor } = useContrastContext();

  const colorBrightness = getColorBrightness(color);

  if (colorBrightness === "dark") {
    return "white";
  }

  return "secondary";
};
