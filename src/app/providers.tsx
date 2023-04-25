'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode, FC } from 'react'
import {tema} from '../config/tema'
interface ProvidersPros {
  children: ReactNode
}
export const Providers: FC<ProvidersPros> = ({ children }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={tema}>{children}</ChakraProvider>
    </CacheProvider>
  )
}
