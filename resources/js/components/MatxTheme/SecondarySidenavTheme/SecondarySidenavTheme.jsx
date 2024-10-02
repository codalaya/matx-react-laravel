import { ThemeProvider } from "@mui/material";
import React from "react";

export default function SecondarySidenavTheme({ theme, children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
