import {VStack, Image, Text, Box, FormControl, Input, Button, Link,} from 'native-base'
import { TouchableOpacity } from 'react-native';
import Icon from './assets/Icon.png'
import { color } from 'native-base/lib/typescript/theme/styled-system';

export default function Login() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Icon} alt="Logo YE" />

      <Text
      fontSize="2xl"
      fontWeight="bold"
      color="green.300"
      textAlign="center"
      mt={5}
      >
        YE GESTÃO DE SAÚDE
      </Text>
      <Box>
        <FormControl mt={10}>
          <FormControl.Label>Email</FormControl.Label>
          <Input placeholder='Insira seu endereço de Email'
          size='lg'
          w="100%"
          borderRadius='lg'
          bgColor='#fff'
          shadow={5}
          />


        </FormControl>
        <FormControl mt={5}>
          <FormControl.Label>Senha</FormControl.Label>
          <Input placeholder='Insira sua Senha'
          size='lg'
          w="100%"
          borderRadius='lg'
          bgColor='#fff'
          shadow={5}
          />


        </FormControl>
      </Box>
      
      <Button
        w="100%"
        color="black"
        bg="green.300"
        mt={8}
        borderRadius="lg"
        variant="outline"
      >
        <Text color="white">
          Entrar
        </Text>

      </Button>

      <Link mt={10} href='https://www.alura.com.br'>
        Esqueceu sua senha?
      </Link>

      <Box mt={6} w="100%" flexDirection="row" justifyContent="center">
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity>
          <Text color="blue.100"> Faça seu cadastro!</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
    
  );
}
