// O APP representa o ponto inicial da nossa aplicação
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Cadastro from './src/telas/Cadastro';
import Listagem from './src/telas/Listagem';
import Detalhes from './src/telas/Detalhes';

const App = () => {

  return (

    <Detalhes/>
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={false}>
    //     <Stack.Screen
    //       name="Cadastro"
    //       component={Cadastro}
    //       options={{headerShown: false}}
    //     />

    //     <Stack.Screen
    //       name="Listagem"
    //       component={Listagem}
    //       options={{headerShown: false}}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
