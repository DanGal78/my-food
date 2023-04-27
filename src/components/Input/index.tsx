import { FormControl, FormLabel, Input as ChakraInput, InputProps } from "@chakra-ui/react";
import {  forwardRef } from "react";

interface InputBasePros extends InputProps{
    id: string
    type: string
    label: string

}

const InputBase = ({id, type, label, ...resto}: InputBasePros, ref: any) =>{

    return(
        <FormControl>
                    <FormLabel htmlFor={id}>{label}</FormLabel>
                    <ChakraInput id={id} 
                    type={type} 
                    {...resto} 
                    ref={ref}
                    variant="flushed"
                    focusBorderColor="red.500"/>
                </FormControl>
    )
}

export const Input = forwardRef<HTMLInputElement, InputBasePros>(InputBase)