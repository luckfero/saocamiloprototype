import { VStack, Text, Image, Box, ScrollView, Divider } from "native-base";
import Logo from '../assets/Icon.png';
import { Botao } from "../componentes/Botao";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Titulo } from "../componentes/Titulo";
import { depoimentos } from "../utils/mock";

export default function Principal(){
    return(
        <ScrollView flex={1} bgColor="white">
            <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
                <Titulo fontSize="3xl" alignSelf="center" color="green.300">Boas-vindas!</Titulo>
                <Box w="100%" borderRadius="lg" p={3} mt={10} shadow="1" borderRightRadius="md">
                    <EntradaTexto placeholder="Digite a especialidade"/>
                    <EntradaTexto placeholder="Digite a sua localização"/>
                    <Botao mt={3} mb={3}>Buscar</Botao>
                </Box>

                <Titulo color="green.300" alignSelf="center">Depoimentos</Titulo>
                <VStack space={3} divider={<Divider />} w="100%">
                    {
                        depoimentos.map(depoimentos => (
                            <Box key={depoimentos.id} w="100%" borderRadius="lg" p={3}>
                                <Text color="gray.300" fontSize="md" textAlign="justify">
                                    {depoimentos.text}
                                </Text>
                                <Text color="gray.500" fontSize="lg" fontWeight="bold" alignSelf="center" mt="2">{depoimentos.titulo}</Text>
                                </Box>
                        ))
                    }
                </VStack>
            </VStack>
        </ScrollView>
    );
}
