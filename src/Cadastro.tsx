import {VStack, Image, Text, Box, FormControl, Input, Button, Link, ScrollView, Checkbox} from 'native-base';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Icon from './assets/Icon.png';
import { color } from 'native-base/lib/typescript/theme/styled-system';
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';


export default function Cadastro() {
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
        },
        {
          id: 3,
          label: 'Crie uma senha',
          placeHolder: 'Digite sua senha'
        },

        {
          id: 4,
          label: 'Digite novamente sua senha',
          placeHolder: 'Repita sua senha'
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
          placeHolder: 'Insira seu CEP'
        }, 
        {
          id: 2,
          label: 'Endereço',
          placeHolder: 'Insira seu endereço'
        },
        {
          id: 3,
          label: 'Número',
          placeHolder: 'Insira seu número'
        }, 
        {
          id: 4,
          label: 'Complemento',
          placeHolder: 'Insira seu complemento'
        },
        {
          id: 5,
          label: 'Telefone',
          placeHolder: '(00) 00000-0000'
        }
      ],
      checkbox:[]
    },
    {
      id:3,
      titulo: 'Para finalizar, selecione seu plano:',
      entradaTexto: [],
      checkbox: [
        {
          id:1,
          value:'Sulamerica'
        },
        {
          id:2,
          value:'Unimed'
        },
        {
          id:3,
          value:'Amil'
        },
        {
          id:4,
          value:'Bradesco'
        },
        {
          id:5,
          value:'Itaú'
        },
        {
          id:6,
          value:'Santa Helena'
        },
        {
          id:7,
          value:'Outros'
        },
        {
          id:8,
          value:'Não tenho plano'
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
    <ScrollView flex={1} p={5}>
      <Image mt={10} source={Icon} alt="Logo YE" alignSelf="center"/>

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

      {secoes[3]? 
      <Text color ="green.200" fontWeight="bold" fontSize="md" mt="2" mb="2">
      Selecione o plano:
      </Text>: null}

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
      <Botao onPress={() => avancarSecao()} mt={5} mb={20}>Avançar</Botao>

    </ScrollView>
    
  );
}
