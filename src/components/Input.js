import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import COLORS from '../const/Colors';

// Função que representa um componente
const Input = ({label, error, onFocus = () => {}, ...props}) => {
  return (
    <View style={estilos.formContainer}>
      <Text style={estilos.inputLabel}>{label}</Text>

        {/* Quando adicionamos [] podemos colocar mais de uma classe */}
      <View style={[estilos.inputContainer , {borderColor: error ? COLORS.red : COLORS.darkBlue}]}>
        <TextInput
          style={estilos.TextInput}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
          }}
          {...props}
        />
      </View>

      <Text>{error}</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  formContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    marginVertical: 5,
    fontSize: 15,
    color: COLORS.gray,
  },
  inputContainer: {
    height: 55,
    backgroundColor: COLORS.light,
    flexDirection: 'row',
    borderWidth: 0.5,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  TextInput: {
    flex: 1,
    color: COLORS.darkBlue,
  },
});

export default Input;
