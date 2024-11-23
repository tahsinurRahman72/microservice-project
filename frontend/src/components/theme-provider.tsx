"use client";

import { useState, useEffect } from "react";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensure the component has mounted before rendering
  }, []);

  if (!mounted) {
    // Render nothing on the server to avoid mismatches
    return null;
  }

  return (
    <NextThemesProvider
      defaultTheme="dark" // Dynamically set theme after mount
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
