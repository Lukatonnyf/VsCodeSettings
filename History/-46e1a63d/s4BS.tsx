// app/layout.tsx
'use client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ReactNode } from 'react';



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider value={theme}>
      {children}
    </ChakraProvider>

  );
}
