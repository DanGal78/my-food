import { apiClient } from '@/config/axios';

import { Loja } from "./lojaService";
import axios from 'axios';

export interface Produto{
    id: string;
    nome: string;
    preco: number;
    descricao: string;
    imagem: string;
    desconto?: number
    loja?: Loja
}

    interface PaginatedProdutos {
        data: Produto[];
    }

    export function getProdutos() {
        return apiClient.get<PaginatedProdutos>('/produtos')
    }

    export function getProduto(id: string | number){
        return apiClient.get<Produto>(`/produtos/${id}`)
    }
    export function updateProduto<DataForm> (
        id: number | string, 
        produto: DataForm, )
        { 
            return apiClient.put<DataForm, Produto>(`/produtos/${id}`, produto)
       }
       export function createProduto<DataForm>(produto: DataForm) {
        return axios.post('/produtos', produto)
       }
