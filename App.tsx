import {NativeBaseProvider, StatusBar} from 'native-base';

import {TEMAS} from './src/styles/themes'
import Rotas from './src/Rotas';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.green[100]} />
    <Rotas/>
    </NativeBaseProvider>
  );
}
