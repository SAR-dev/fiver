import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "768px",
  md: "960px",
  lg: "1200px",
  xl: "1920px",
})

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

export const light = extendTheme({
  config,
  breakpoints: breakpoints,
  fonts: {
    body: 'Rubik, sans-serif',
  },
//   colors: {
//     ash: {
//       50: '#F9FAFB',
//       100: '#F3F4F6',
//       200: '#E5E7EB',
//       300: '#D1D5DB',
//       400: '#9CA3AF',
//       500: '#6B7280',
//       600: '#4B5563',
//       700: '#374151',
//       800: '#1F2937',
//       900: '#111827',
//     },
//     bg: {
//       light: '#212735',
//       medium: '#181c28',
//       dark: '#131720',
//     },
//     border: {
//       light: '#4B5563',
//       medium: '#374151',
//       dark: '#1F2937',
//     },
//     text: {
//       light: '#FFFFFF',
//       medium: '#F3F4F6',
//       dark: '#D1D5DB',
//     },
//     brand: '#6B46C1',
//   },
});