import {VStack, Image, Text, Box, FormControl, Input, Button, Link, ScrollView} from 'native-base'
import { TouchableOpacity } from 'react-native';
import Icon from './assets/Icon.png'
import { color } from 'native-base/lib/typescript/theme/styled-system';
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';

export default function Login({navigation}) {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Icon} alt="Logo YE" />

      <Text fontSize="2xl" fontWeight="bold" color="green.300" textAlign="center" mt={4}>YE GESTÃO DE SAÚDE</Text>

    <Titulo>
      Faça login em sua conta
    </Titulo>
    
    <Box>
        <EntradaTexto
        label="Email"
        placeholder="Insira seu endereço de Email"
        />
        <EntradaTexto
        label="Senha"
        placeholder="Insira sua Senha"
        />
      </Box>
      
      <Botao onPress={() => navigation.navigate('Tabs')}>Entrar</Botao>

      <Link mt={4} href='https://www.alura.com.br'>
        Esqueceu sua senha?
      </Link>

      <Box mt={10} w="100%" flexDirection="row" justifyContent="center">
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color="blue.100"> Faça seu cadastro!</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
    
  );
}
