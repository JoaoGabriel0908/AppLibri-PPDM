import React from "react";
import {Text, View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import Input from "../components/Input";
import COLORS from "../const/Colors";
import Button from "../components/Button";

const Cadastro = ()=>{

    const nome = "Tela de Cadastro";
  
    return(
      <SafeAreaView style={estilos.safe}>
        <ScrollView style={estilos.scroll}>

        <Text style={estilos.textTitle}>Cadastro de Livro</Text>

          <View style={estilos.viewForm}>

            {/* Componente que criamos */}
            <Input label="Título"/>
            <Input label="Descrição"/>
            <Input label='Capa'/>

            <Button title="Cadastrar"/>

          </View>

        </ScrollView>
      </SafeAreaView>
    );
  }

const estilos = StyleSheet.create({
  safe:{
    backgroundColor:COLORS.white,
  },
  scroll:{
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  textTitle:{
    color: COLORS.black,
    fontSize: 25,
    fontWeight:"bold",
    textAlign:"center",
  },
  viewForm:{
    marginVertical:20,
  },
})

export default Cadastro;