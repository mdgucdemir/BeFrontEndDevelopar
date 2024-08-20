"use client";

import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";

function ThemeProvider({ children }) {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMouted] = useState(false);

  useEffect(() => {
    setMouted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
}

export default ThemeProvider;
