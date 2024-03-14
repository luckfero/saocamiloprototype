import Cadastro from './src/Cadastro'
import {NativeBaseProvider, StatusBar} from 'native-base';

import {TEMAS} from './src/styles/themes'

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.green[100]} />
    <Cadastro />
    </NativeBaseProvider>
  );
}
