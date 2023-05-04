import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"
import { FC } from "react"

interface ModalProdutoPros{
    isOpen: boolean
    onClose: () => void
    id: string
}

export const ModalProduto: FC<ModalProdutoPros> = ({isOpen, onClose, id}) => {
    return <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader>
                <Text>Produtos</Text>
                <ModalCloseButton/>
            </ModalHeader>
            <ModalBody></ModalBody>
        </ModalContent>

    </Modal>
}