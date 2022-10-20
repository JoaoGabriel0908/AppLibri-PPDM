// O APP representa o ponto inicial da nossa aplicação
import React from 'react';
import {View, Text, button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Cadastro from './src/telas/Cadastro';
import Listagem from './src/telas/Listagem';
import Detalhes from './src/telas/Detalhes';
import Button from './src/components/Button';

// function HomeScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function Details({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Home')}
//       />
//     </View>
//   );
// }

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={false}>
        {/* <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{title: 'CADASTRO DE LIVROS'}}
        /> */}
        <Stack.Screen
          name="Listagem"
          component={Listagem}
          options={{title: 'LISTAGEM'}}
        />
        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{title: 'DETALHES'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
