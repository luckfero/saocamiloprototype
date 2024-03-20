import { VStack, Text, ScrollView, Avatar, Divider } from "native-base"
import { Titulo } from "../componentes/Titulo"

export default function Perfil(){
    return(
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <Titulo color="green.300">Meu Perfil</Titulo>
                
                <Avatar size="2xl" source={{ uri: "https://avatars.githubusercontent.com/u/125588055?v=4"}} mt={5}/>

                <Titulo mt={10} color="green.300">Informações Pessoais</Titulo>
                <Titulo mt={5}>Lucca Oliveira</Titulo>
                <Text fontSize="lg" mb={1}>30/07/2004</Text>
                <Text fontSize="lg">Santo André - SP</Text>

                <Divider mt={7}/>

                <Titulo color="green.300" mt={7} mb={5}>Histórico Médico</Titulo>
                <Text fontSize="md">Bronquite</Text>
                <Text fontSize="md">Asma</Text>
                <Text fontSize="md">Sinusite</Text>
            </VStack>
        </ScrollView>

    )
}