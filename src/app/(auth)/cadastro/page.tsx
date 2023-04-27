'use client'
import { Input } from "@/components/Input";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
export default function Cadastro(){
    return(
        <Flex 
        as="main" 
        bg="white" 
        minW="40vw" 
        padding={8} 
        borderRadius="10px"
        direction="column"
        boxShadow="0 8px 32px rgba(0,0,0,0.2)"
        >
            <Heading fontSize="2rem">Cadastre-se</Heading>
            <Flex 
            as="form" 
            direction="column" 
            gap={5} 
            mt={2} 
            pt={2}
            borderTop="1px solid rgba(0,0,0,0.1)"
            >
                <Input label="Nome" id="nome" type="text" placeholder="Seu nome"/>
                <Input label="Email" id="email" type="email" placeholder="email@email.com"/>
                <Input  id="senha" type="password" label="Senha"/>
                 <Input label="Confirme sua Senha" id="confirme-senha" type="password"/>
                <Button colorScheme="red">Cadastrar</Button>
            </Flex>
            <Flex as="footer" borderTop="1px solid rgba(0,0,0,0.1)" mt={4} pt={4}>
                <Text>
                    Já possui um conta?{''}
                    <Link href="/login" fontWeight={600} color="blue.200">
                        Acesse sua conta
                    </Link>
                </Text>
            </Flex>

        </Flex>

    )
}