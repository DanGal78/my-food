import { Card, CardBody, Heading, Stack, Text, Image } from "@chakra-ui/react"

import { FC } from "react"

interface CardProdutosProps{
    nome: string
    preco: number
    descricao: string
    image: string
}

export const CardProdutos: FC<CardProdutosProps> = ({
    nome,
    preco,
    descricao,
    image,
}) => {
    return (
        <Card maxW="sm">
                <CardBody>
                    <Image src="https://placehold.co/398x157"
                     alt={'Imagem do Produto: Nome do produto'}/>
                     <Stack mt={5} mx={5}>
                        <Heading size="md">Nome do Produto</Heading>
                        <Text noOfLines={3} >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet officia saepe omnis nulla enim vero sint pariatur natus, dignissimos ullam dolorem! Nisi libero asperiores nam corrupti, pariatur ipsam nihil fugit.
                        </Text>
                        <Text color="green.500">R$ 75,28</Text>
                     </Stack>
                </CardBody>
            </Card>
    )
}