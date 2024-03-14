import {VStack, Image, Text, Box, FormControl, Input, Button, Link, Checkbox, ScrollView} from 'native-base';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Icon from './assets/Icon.png';
import { color } from 'native-base/lib/typescript/theme/styled-system';
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';

export default function Login() {
  const [numSecao, setNumSecao] = useState(0);
  const secoes = [
    {
      id: 1,
      titulo: 'Insira alguns dados básicos',
      entradaTexto: [
        {
          id: 1,
          label: 'Nome',
          placeHolder: 'Digite seu nome completo'
        },

        {
          id: 2,
          label: 'Email',
          placeHolder: 'Digite seu Email'
        }
      ],
      checkbox:[]
    },
    {
      id:2,
      titulo: 'Agora, mais alguns dados sobre você:',
      entradaTexto: [
        {
          id: 1,
          label: 'CEP',
          placeHolder: 'Digite seu CEP'
        }
      ],
      checkbox:[]
    },
    {
      id:3,
      titulo: 'Para finalizar, quais são os seus planos?',
      entradaTexto: [],
      checkbox: [
        {
          id:1,
          value:'Sulamerica'
        },
        {
          id:2,
          value:'Unimed'
        }
      ]
    }
  ]

  function avancarSecao(){
    if(numSecao < secoes.length - 1){
      setNumSecao(numSecao+1)
    }
  }

  function voltarSecao(){
    if(numSecao > 0){
      setNumSecao(numSecao - 1)
    }
  }



  return (
    <VStack flex={1} p={5}>
      <Image source={Icon} alt="Logo YE" alignSelf="center"/>

    <Titulo alignSelf="center">
      {secoes[numSecao].titulo}
    </Titulo>
    

      <Box>
        {
          secoes[numSecao]?.entradaTexto?.map(entrada => {
            return <EntradaTexto label={entrada.label} placeholder={entrada.placeHolder}  key={entrada.id}/>
          })
        }
      </Box>
      <Box>
        {
          secoes[numSecao].checkbox.map(checkbox => {
            return <Checkbox value={checkbox.value}  key={checkbox.id}>
              {checkbox.value}
            </Checkbox>
          })
        }
      </Box>
      
      {numSecao > 0 &&<Botao onPress={() => voltarSecao()} bgColor='gray.400'>Voltar</Botao>}
      <Botao onPress={() => avancarSecao()} mt={4}>Avançar</Botao>

    </VStack>
    
  );
}
