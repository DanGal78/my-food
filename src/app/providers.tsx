"use client"

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";



interface ProvidersPros{
  children:React.ReactNode;
}
export const Providers: React.FC<ProvidersPros> = ({children}) => {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
};