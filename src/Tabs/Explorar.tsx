import { VStack, Box, ScrollView } from "native-base";
import { Botao } from "../componentes/Botao";
import { CardConsulta } from "../componentes/CardConsulta";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Titulo } from "../componentes/Titulo";

export default function Explorar(){
  return(
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
        <Box w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md">
          <EntradaTexto
            placeholder="Digite a especialidade"
          />
          <EntradaTexto
            placeholder="Digite sua localização"
          />
          <Botao mt={3} mb={3}>
            Buscar
          </Botao>
        </Box>

        <Titulo color="green.300" alignSelf="center" mb={10}>Resultado da Busca</Titulo>
          <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white">
            <CardConsulta 
              especialidade="Cardiologia"
              foto="https://github.com/luckfero.png"
              nome="Dr. Cunha"
            />
            <CardConsulta 
              especialidade="Clínico Geral"
              foto="https://github.com/luckfero.png"
              nome="Dr. Oliveira"
            />
            <CardConsulta 
              especialidade="Pneumologista"
              foto="https://github.com/luckfero.png"
              nome="Dr. Souza"
            />
          </VStack>
        
      </VStack>
    </ScrollView>
  )
}