"use client";
import React, { createContext, useContext, useState } from "react";

export type Theme = "dark" | "light"; // 테마의 가능한 값들

interface ThemeContextProps {
  mode: Theme;
  toggle: () => void;
}



export const ThemeContext = createContext<ThemeContextProps>({
  mode: 'dark',
  toggle: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<Theme>("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
 
    <div className={`theme ${mode}`}>{children}</div>

    </ThemeContext.Provider>
  );
};


export const useThemeContext = () => useContext(ThemeContext);