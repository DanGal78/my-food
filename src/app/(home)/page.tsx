'use client'

import { Button, Flex, FormControl, Heading, Icon, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react"
import {GoSearch} from 'react-icons/go'
import { useState } from "react";
import { CardDestaqueProps } from "@/components/CardDestaque";
import { CardLoja } from "@/components/CardLoja";

export default function Page() {
  const [busca, setBusca] = useState('');
  return (
  <Flex direction="column" align="center" grow={1}>
    <Flex as="hgroup" direction="column" align="center">
      <Heading as="h1" fontSize="2.25rem">Tudo pra facilitar seu dia a dia</Heading>
      <Heading as="h2" fontSize="1rem" color="blackAlpha.400">O que você precisa está aqui. Peça a receba onde estiver </Heading>
    </Flex>
    <Flex as="section" w="100%">
      <FormControl flexDirection="row" display="flex" gap={4} marginX="48" marginTop="4">
        <InputGroup>
        <InputLeftAddon bg="none" border="nome">
        <Icon as={GoSearch}/> </InputLeftAddon>
        <Input  type="text" placeholder="Pesquise um item" value={busca} 
        onChange={(evento) => setBusca(evento.target.value)}
        borderRadius="none"
        />
        </InputGroup>
          <Button colorScheme="red" borderRadius="none">Buscar</Button>
      </FormControl>
    </Flex>
    <Flex as="section" mt={10} gap={4}>
      <CardDestaqueProps src='/restaurant.avif' path='/' titulo='Restaurante' color='red'/>
      <CardDestaqueProps src='/market.avif' path='/' titulo='Compras' color='green'/>
    </Flex>
    <Flex as="section"  maxW="90vw" marginLeft="5vw"  direction={'column'} >
      <Heading fontSize="1.25rem">Lojas</Heading>
      <Flex gap={8} mt={2} wrap="wrap" align="center"  >
    <CardLoja path="/" nome='Emici Donald' nota={4.5} categoria="Lanche" distancia="1.2KM" tempo="30-40 min" taxaEntrega={38.90}></CardLoja>
    <CardLoja path="/" nome='Emici Donald' nota={4.5} categoria="Lanche" distancia="1.2KM" tempo="30-40 min" taxaEntrega={0}></CardLoja>
    <CardLoja path="/" nome='Emici Donald' nota={4.5} categoria="Lanche" distancia="1.2KM" tempo="30-40 min" taxaEntrega={8.00}></CardLoja>
    <CardLoja path="/" nome='Emici Donald' nota={4.5} categoria="Lanche" distancia="1.2KM" tempo="30-40 min" taxaEntrega={0}></CardLoja>
      </Flex>
    </Flex>
  </Flex>
  )
}
