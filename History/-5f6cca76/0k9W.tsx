// app/providers.tsx
'use client'

import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return <ChakraProvider value={undefined} children={undefined}>{children}</ChakraProvider>;
}
