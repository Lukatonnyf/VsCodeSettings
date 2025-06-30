// app/layout.tsx
'use client';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/theme';
import { ReactNode } from 'react';

const theme = extendTheme({});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider value={theme}>
      {children}
    </ChakraProvider>

  );
}
