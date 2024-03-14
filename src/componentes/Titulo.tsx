import {Text, ITextProps} from "native-base"
import { ReactNode } from "react"

interface TituloProps extends ITextProps {children: ReactNode}

export function Titulo({ children, ...rest}: TituloProps){
    return(
        <Text
      fontSize="2xl"
      mt={10}
      fontWeight="bold"
      color="gray.500"
      textAlign="center" 
      {...rest}
      >
        {children}
      </Text>
    )
}