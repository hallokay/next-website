"use client";

import React from "react";
import styles from "./darkModeToggle.module.css";
// import {useThemeContext} from '@/context/ThemeContext'
// import { ThemeContext } from "@/context/ThemeContext";
import { useTheme } from "next-themes";
export default function DarkModeToggle() {
  // const { toggle, mode } = useThemeContext();
  // console.log(mode);

  const {theme, setTheme} = useTheme();

  return (
    <div className={styles.container}>
      <div className={styles.icon} onClick={() => setTheme("dark")}>
        🌙
      </div>
      <div className={styles.icon} onClick={() => setTheme("light")}>
        🔆
      </div>
      <div
        className={styles.ball}
        style={theme === "dark" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
}
