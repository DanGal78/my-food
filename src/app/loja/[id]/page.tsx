'use client'
import { CardProdutos } from "@/components/CardProduto/Index"
import { CardProdutoHorizontal } from "@/components/CardProdutoHorizontal"
import { StarRating } from "@/components/StarRating"
import { Button, Card, CardBody, Divider, Flex, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react"
import { use } from "react"
import { AiFillDollarCircle } from "react-icons/ai"

type LojaProps = {
    params: {
        id: string
    }
}


export default  function Loja({params: {id}}: LojaProps ) {
   const dadosLoja: any = use(
    new Promise((resolve) =>{
    setTimeout(() => 
        resolve({
         nome: 'Emici Donald', 
         nota: 4.5 ,
         categoria: "Lanche" ,
         distancia: "1.2KM" ,
         tempo: "30-40 min" ,
         taxaEntrega: 38.90,
         pedidoMinimo: 75.5,

    }),
    3 * 1000,
    )

   }), 
   )

   const moneyFormatter = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
   })

   return (
   <Flex 
       w="95vw" 
        minH="100vh" 
        marginX="2.5vw"        
        direction="column"
        align="center"
        justify="flex-star"
        mt={2}
        overflowX={"hidden"}
   >
        <Flex as="header" direction="column">
        <Image
            src="https://placehold.co/1200x250" 
            alt={'Imagem da capa da empresa:'+ dadosLoja.nome} 
            borderRadius="10px"
            />
    
        
        <Flex align="center" gap={4} mt={2}>
        <Image src="https://placehold.co/100" alt={'Imagem logo empresa:'+ dadosLoja.nome} 
            borderRadius="full"/>
            <Heading fontSize="1.5rem">{dadosLoja.nome} </Heading>
            <StarRating nota={dadosLoja.nota}/>
            <Flex ml="auto" gap={5} >
                <Button variant="link" colorScheme="red">Ver mais</Button>
                <Text 
                as="small" 
                verticalAlign="center"
                display="flex" 
                alignItems="center" 
                justifyContent="center"
                gap="3px"> 
                
                <Icon as={AiFillDollarCircle}/>
                    Pedido Mínimo{moneyFormatter.format(dadosLoja.pedidoMinimo)}
                </Text>
            </Flex>
       </Flex>
       </Flex>
       <Flex as="section" direction="column" grow={1} maxW="1200px" mt={2} >
        <Heading fontSize="1rem">Destaques</Heading>
        <Divider/>
        <Flex wrap="wrap" gap={6}>
        <CardProdutos descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempore dicta voluptatibus, eveniet velit, veritatis voluptatem consequatur aperiam nesciunt eos commodi incidunt accusantium? Cupiditate modi maxime pariatur rerum minima eligendi?" 
                        image="https://placehold.co/398x157" 
                        preco={20.85} 
                        nome="Grande Méqui"/>
        <CardProdutos descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempore dicta voluptatibus, eveniet velit, veritatis voluptatem consequatur aperiam nesciunt eos commodi incidunt accusantium? Cupiditate modi maxime pariatur rerum minima eligendi?" 
                        image="https://placehold.co/398x157" 
                        preco={15.28} 
                        nome="Quadra"/>
        <CardProdutos descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempore dicta voluptatibus, eveniet velit, veritatis voluptatem consequatur aperiam nesciunt eos commodi incidunt accusantium? Cupiditate modi maxime pariatur rerum minima eligendi" 
                        image="https://placehold.co/398x157" 
                        preco={28.75} 
                        nome="Emici Lanchinho Feliz"/>
        <CardProdutos descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempore dicta voluptatibus, eveniet velit, veritatis voluptatem consequatur aperiam nesciunt eos commodi incidunt accusantium? Cupiditate modi maxime pariatur rerum minima eligendi?" 
                        image="https://placehold.co/398x157" 
                        preco={15.90} 
                        nome="Emici Galinha"/>
            
        </Flex>
        </Flex>
        <Flex as="section"
        direction="column"
        grow={1}
        mt={2}
        maxW="1200px">
            <Heading fontSize="1rem">Produtos</Heading>
            <Divider/>
            <Flex direction={{base: "column", md: 'row'}}
             gap={4} 
             wrap="wrap" 
             mt={2}
             p={1}
             >
                <CardProdutoHorizontal
                descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempore dicta voluptatibus, eveniet velit, veritatis voluptatem consequatur aperiam nesciunt eos commodi incidunt accusantium? Cupiditate modi maxime pariatur rerum minima eligendi?" 
                image="https://placehold.co/398x157" 
                preco={15.90} 
                nome="Emici Galinha"
                />
                 <CardProdutoHorizontal
                descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempore dicta voluptatibus, eveniet velit, veritatis voluptatem consequatur aperiam nesciunt eos commodi incidunt accusantium? Cupiditate modi maxime pariatur rerum minima eligendi?" 
                image="https://placehold.co/398x157" 
                preco={15.90} 
                nome="Emici Galinha"
                />   
                <CardProdutoHorizontal
                descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempore dicta voluptatibus, eveniet velit, veritatis voluptatem consequatur aperiam nesciunt eos commodi incidunt accusantium? Cupiditate modi maxime pariatur rerum minima eligendi?" 
                image="https://placehold.co/398x157" 
                preco={15.90} 
                nome="Emici Galinha"
                />   
            </Flex>
        </Flex>
   </Flex>
   )
}
