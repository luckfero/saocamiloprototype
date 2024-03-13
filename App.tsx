import Login from './src/Login';
import {NativeBaseProvider, StatusBar} from 'native-base';

import {TEMAS} from './src/styles/themes'

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.green[100]} />
    <Login />
    </NativeBaseProvider>
  );
}
