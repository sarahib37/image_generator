'use client'

import { IconButton, Skeleton, Text } from "@chakra-ui/react";
import { ThemeProvider, useTheme } from "next-themes";
import dynamic from "next/dynamic";
import * as React from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import type { ThemeProviderProps } from "next-themes";
import type { IconButtonProps } from "@chakra-ui/react";

export function ColorModeProvider(props: ThemeProviderProps) {
  return <ThemeProvider attribute="class" disableTransitionOnChange {...props} />;
}

export type ColorMode = "light" | "dark";

export interface UseColorModeReturn {
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
  toggleColorMode: () => void;
}

export function useColorMode(): UseColorModeReturn {
  const { resolvedTheme, setTheme } = useTheme();
  const toggleColorMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  return {
    colorMode: resolvedTheme as ColorMode,
    setColorMode: setTheme,
    toggleColorMode,
  };
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? <LuMoon /> : <LuSun />;
}

const DynamicSkeleton = dynamic(() => Promise.resolve(Skeleton), { ssr: false });

export const ColorModeButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  function ColorModeButton(props, ref) {
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
  }
);

export const LightMode = React.forwardRef<HTMLSpanElement, IconButtonProps>(
  function LightMode(props, ref) {
    return <Text color="gray.800" ref={ref} {...props} />;
  }
);

export const DarkMode = React.forwardRef<HTMLSpanElement, IconButtonProps>(
  function DarkMode(props, ref) {
    return <Text color="gray.200" ref={ref} {...props} />;
  }
);
