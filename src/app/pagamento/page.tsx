'use client'

import { Input } from "@/components/Input";
import { useCart } from "@/contexts/CartContext";
import { formataMoeda } from "@/helpers/formataMoeda";
import { obterUsuario } from "@/services/ususarioService";
import { Button, Divider, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function PagamentoPage() {
    const { produtos, valor } = useCart()
    const usuario = obterUsuario('1')
    const [freteTaxa, setFreteTaxa] = useState(0)

    useEffect(() => {
        setFreteTaxa(
            produtos.reduce((valorAnterior, produto) => {
                if (!produto.loja) {
                    return valorAnterior
                }
                return produto.loja.taxaEntrega + valorAnterior

            }, 0),
        )
    }, [produtos])

    if (!usuario) {
        redirect('/login')
        return
    }

    return (
        <Flex minH="100vh" w="100vw" direction="column">
            <Flex
                w="100%"
                h="75px"
                p={5}
                justify="center"
                align="center"
                borderBottom="1px solid rgba(0,0,0,.3"
            >
                <Heading color="red.500">MyFood</Heading>
            </Flex>
            <Flex as="main" grow={1} mx={16} mt={5}>
                <Flex as="section" direction="column" grow={1}>
                    <Heading fontSize="20px" color="red.200">
                        Entrega
                    </Heading>
                    <Divider />
                    <Flex justify="space-between">
                        <Flex direction="column">
                            <Text>{usuario.endereco?.logradouro}</Text>
                            <Text fontWeight={300} color="gray.400">
                                {usuario.endereco?.cidade}/{usuario.endereco?.estado}
                            </Text>
                        </Flex>
                        <Button variant="ghost" colorScheme="red">
                            Alterar
                        </Button>
                    </Flex>
                </Flex>

                <Flex
                    as="section"
                    direction="column"
                    ml="30px"
                    minW="30vw"
                    gap={2}
                    p={2}
                    borderRadius="7px"
                    boxShadow="5px 8px 15px #000"
                >
                    <Heading fontSize="20px" color="red.200">Resumo</Heading>
                    <Divider />
                    {produtos.map((produto) => (
                        <Flex key={produto.id}
                            gap={5}
                            borderBottom="1px solid rgba(0,0,0,0.2"
                        >
                            <Text>{produto.nome}</Text>
                            <Text>{produto.quantidade}</Text>
                            <Text>formataMoeda{produto.quantidade * produto.preco}</Text>

                        </Flex>
                    ))}
                    <Flex direction="column">
                        <Flex justify="space-between" color="gray.400" align="center" >
                            <Text fontSize="sm">SubTotal</Text>
                            <Text>{formataMoeda(valor)}</Text>
                        </Flex>
                        <Flex color="gray.400" align="center" justify="space-between">
                            <Text color={freteTaxa === 0 ? 'green.300' : ''}>
                                {freteTaxa === 0 ? 'Grátis' : formataMoeda(freteTaxa)}
                            </Text>
                        </Flex>
                        <Flex justify="space-between"
                            color="black"
                            align="center"
                            fontWeight={600}
                        >
                            <Text>Total</Text>
                            <Text>{formataMoeda(valor)}</Text>

                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex as="section" mb={5} direction="column" mx={16}>
                <Heading fontSize="20px" color="red.400">
                    Pagamento
                </Heading>
                <Text>Escolha a forma de pagamento</Text>
                <Divider />
                <Tabs mt={3} minH="40vh">
                    <TabList>
                        <Tab>Cartão de Crédito</Tab>
                        <Tab>Pix</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Flex as="form" direction="column" mx={16} gap={1}>
                                <Input id="cardNumber" label="Número do Cartão" type="number" />
                                <Input id="cardNome" label="Nome Impresso no Cartão" type="text" />
                                <Flex gap={3}>
                                    <Input id="validade" label="Validade" type="text" />
                                    <Input id="cvv" label="CVV" type="number" />
                                </Flex>
                                <Input id="cpf" label="CPF" type="text" />
                            </Flex>
                        </TabPanel>
                        <TabPanel>Informação do Pix</TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
        </Flex>
    )
}