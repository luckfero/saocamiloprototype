import { VStack, Text, Divider, ScrollView } from "native-base"
import { CardConsulta } from "../componentes/CardConsulta"
import { Titulo } from "../componentes/Titulo"
import { Botao } from "../componentes/Botao"

export default function Consultas(){
    return(
        <ScrollView p="5">
            <Titulo color="green.300">Minhas Consultas</Titulo>
            <Botao mb={5} mt={5}>Agendar nova consulta</Botao>
            <Divider mt={5}/>

            <Titulo mt={5} mb={5} color="green.300" fontSize="lg" alignSelf="flex-start" >Próximas Consultas</Titulo>
            <CardConsulta
                nome="Dr. André"
                especialidade="Cardiologista"
                foto="https://avatars.githubusercontent.com/u/125588055?v=4"
                data="20/03/2024"
                foiAgendado
            />
            <Divider mt={5}/>

            <Titulo mt={5} mb={5} color="green.300" fontSize="lg" alignSelf="flex-start" >Consultas Passadas</Titulo>
            <CardConsulta
                nome="Dr. André"
                especialidade="Cardiologista"
                foto="https://avatars.githubusercontent.com/u/125588055?v=4"
                data="20/03/2024"
                foiAtendido
            />
            <CardConsulta
                nome="Dr. André"
                especialidade="Cardiologista"
                foto="https://avatars.githubusercontent.com/u/125588055?v=4"
                data="20/03/2024"
                foiAtendido
            />
            <CardConsulta 
                nome="Dr. André"
                especialidade="Cardiologista"
                foto="https://avatars.githubusercontent.com/u/125588055?v=4"
                data="20/03/2024"
                foiAtendido
            />
            <Divider mb={20}/>
        </ScrollView>

    )
}