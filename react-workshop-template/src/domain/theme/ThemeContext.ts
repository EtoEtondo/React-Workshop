import { Theme } from "./Theme";
import { createContext } from "react";

const noop = () => {};

const ThemeObject: Theme = {
  primaryColor: "steelblue",
  setPrimaryColor: noop,
};

export const ThemeContext = createContext<Theme>(ThemeObject);
