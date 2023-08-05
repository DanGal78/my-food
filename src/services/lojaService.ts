import { apiClient } from '@/config/axios';
import { FormErrorMessage } from '@chakra-ui/react';
import { Produto } from './produtosService';
export interface Loja {
    id?:string
    nome: string
    nota: number
    categoria: string
    distancia?: string
    tempo: string
    taxaEntrega: number
    pedidoMinimo: number
    imageLogo: string
    imageCover: string
    produtos?: Produto[]
}

export interface PagitateLojas {
    data: Loja[]
}

export const listarLojas = () => {
    return apiClient.get<Loja[]>('/lojas')
        
        
}

export const obterLoja = (id: string) => {
    return apiClient.get<Loja>(`/lojas/${id}`)
}
interface CadastraLojaDTO {
    message: string
}

export const cadastrarLoja = (lojaData: Loja) => {
    return apiClient.post<CadastraLojaDTO>('/lojas',lojaData)
}

export const apagarLoja = (id: string | number) => {
    return apiClient.delete<CadastraLojaDTO>(`/lojas/${id}`)
}

export const atualizaLoja = (id: string | number, lojaData: Partial<Loja>) => {
    return apiClient.put<CadastraLojaDTO>(`/lojas/${id}`, lojaData)
}