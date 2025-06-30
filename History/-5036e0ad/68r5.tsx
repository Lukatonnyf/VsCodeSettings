// app/layout.tsx
import { ChakraProvider } from '@chakra-ui/react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ChakraProvider value={undefined} children={undefined}>
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}
