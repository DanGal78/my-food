import { Loja } from "./lojaService";

export interface Produto{
    id: string;
    nome: string;
    preco: number;
    descricao: string;
    imagem: string;
    desconto?: number
    loja?: Loja
}

export function getProdutos(): Produto[] {
    return [
        
            {
            id: '1',
            nome: 'Produto 1',
            preco: 100,
            descricao: 'Descrição do produto 1',
            imagem: 'https://picsum.photos/200/300',
            loja: {
                id: '1',
                nome: 'Meci Donaldi',
                nota: 4.5,
                categoria: 'Categoria 1',
                distancia: '1.5 km',
                tempo: '30 min',
                taxaEntrega: 5,
                pedidoMinimo: 10,
                },
            
            },
            {
            id: '2',
            nome: 'Produto 2',
            preco: 200,
            descricao: 'Descrição do produto 2',
            imagem: 'https://picsum.photos/200/300',
            },
            {
            id: '3',
            nome: 'Produto 3',
            preco: 300,
            descricao: 'Descrição do produto 3',
            imagem: 'https://picsum.photos/200/300',
            },
            {
            id: '4',
            nome: 'Produto 4',
            preco: 400,
            descricao: 'Descrição do produto 4',
            imagem: 'https://picsum.photos/200/300',
            },
            {
            id: '5',
            nome: 'Produto 5',
            preco: 500,
            descricao: 'Descrição do produto 5',
            imagem: 'https://picsum.photos/200/300',
            },
            {
            id: '6',
            nome: 'Produto 6',
            preco: 600,
            descricao: 'Descrição do produto 6',
            imagem: 'https://picsum.photos/200/300',
            },
            {
            id: '7',
            nome: 'Produto 7',
            preco: 700,
            descricao: 'Descrição do produto 7',
            imagem: 'https://picsum.photos/200/300',
            },
            {
            id: '8',
            nome: 'Produto 8',
            preco: 800,
            descricao: 'Descrição do produto 8',
            imagem: 'https://picsum.photos/200/300',
            },
            {
            id: '9',
            nome: 'Produto 9',
            preco: 900,
            descricao: 'Descrição do produto 9',
            imagem: 'https://picsum.photos/200/300',
            },
            {
            id: '10',
            nome: 'Produto 10',
            preco: 1000,
            descricao: 'Descrição do produto 10',
            imagem: 'https://picsum.photos/200/300',
            },
            ]          
     
    }

    export function getProduto(id: string): Produto | undefined {
        return getProdutos().find((produto) => produto.id === id)
    }
    export function updateProdutos<DataForm>
    (id: number | string, produto: DataForm): Produto { 
        return{
            id: '10',
            nome: 'Produto 10',
            preco: 1000,
            descricao: 'Descrição do produto 10',
            imagem: 'https://picsum.photos/200/300',
        }
       }
       export function createProduto<DataForm>(produto: DataForm): Produto {
        return{
            id: '10',
            nome: 'Produto 10',
            preco: 1000,
            descricao: 'Descrição do produto 10',
            imagem: 'https://picsum.photos/200/300',
        }
       }