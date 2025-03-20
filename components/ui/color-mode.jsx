"use client";

import { IconButton, Skeleton, Text } from "@chakra-ui/react";
import { ThemeProvider, useTheme } from "next-themes";
import dynamic from "next/dynamic";
import * as React from "react";
import { LuMoon, LuSun } from "react-icons/lu";

export function ColorModeProvider(props) {
  return <ThemeProvider attribute="class" disableTransitionOnChange {...props} />;
}

export function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme();
  const toggleColorMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  return {
    colorMode: resolvedTheme,
    setColorMode: setTheme,
    toggleColorMode,
  };
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? <LuMoon /> : <LuSun />;
}

const DynamicSkeleton = dynamic(() => Promise.resolve(Skeleton), { ssr: false });

export const ColorModeButton = React.forwardRef(function ColorModeButton(props, ref) {
  const { toggleColorMode } = useColorMode();
  return (
    <React.Suspense fallback={<DynamicSkeleton boxSize="8" />}>
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Toggle color mode"
        size="sm"
        ref={ref}
        {...props}
      >
        <ColorModeIcon />
      </IconButton>
    </React.Suspense>
  );
});

export const LightMode = React.memo(
  React.forwardRef(function LightMode(props, ref) {
    return <Text as="span" color="gray.800" ref={ref} {...props} />;
  })
);

export const DarkMode = React.memo(
  React.forwardRef(function DarkMode(props, ref) {
    return <Text as="span" color="gray.200" ref={ref} {...props} />;
  })
);
