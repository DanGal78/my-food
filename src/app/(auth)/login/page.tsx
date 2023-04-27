'use client'

import { Input } from "@/components/Input"
import { Button, Flex,  Heading, Link, Text, } from "@chakra-ui/react"


export default function Login () {
    return(
                    
        <Flex 
            as="main" 
            minW="40vw" 
            bg="white" 
            padding={8} 
            borderRadius="10px"
            boxShadow="0 8px 32px rgba(0,0,0,0.2)"
            direction="column"
        >
        <Heading fontSize="2rem">Login</Heading>
        <Flex 
            as="form" 
            borderTop="1px solid rgba(0,0,0,0.2)" 
            mt={2}
            direction="column"
            gap={4}
            pt={2}
        >
        <Input 
            id="email" 
            type="email" 
            label="Email" 
            placeholder="email@email.com"
        />
        <Input 
            id="senha" 
            type="password" 
            label="Senha" 
        />
        <Button colorScheme="red">Entrar</Button>
        </Flex>
        <Flex as="footer" borderTop="1px solid rgba(0,0,0,0.2)" mt={4} pt={4}>
            <Text>
                Ainda não possui um conta?{''}
                <Link href="/cadastro" fontWeight={600} color="blue.200" >Cadastre-se</Link>
            </Text>
        </Flex>

        </Flex>
        
    )
}