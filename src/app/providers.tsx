'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode, FC } from 'react'
import {tema} from '../config/tema'
import { CartProvider } from '@/contexts/CartContext'
import { AuthProvider } from '@/contexts/AuthContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

interface ProvidersPros {
  children: ReactNode
}
export const Providers: FC<ProvidersPros> = ({ children }) => {
  return ( 
    <AuthProvider>
    <CartProvider>
    <CacheProvider>
      <ChakraProvider theme={tema}>{children}</ChakraProvider>
      <ToastContainer />
    </CacheProvider>
    </CartProvider>
    </AuthProvider>
  )
}
