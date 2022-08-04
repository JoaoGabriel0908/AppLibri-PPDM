import React from "react";
import {Text, View, StyleSheet} from 'react-native';

import Login from "./src/telas/Login";
import Cadastro from "./src/telas/Cadastro";

const App = ()=>{

  const nome = "SENAI - Jandira";

  return(
    // <View>
    //   <Login style={estilo.titulo}></Login>
    // </View>

    // <View>
    //   <Text style={estilo.titulo}>{nome}</Text>
    // </View>
    <View><Cadastro/></View>
  );
}

const estilo = StyleSheet.create({
  container:{},
  titulo: {
    width: "100%",
    backgroundColor :"#F00",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "whitesmoke",
    fontWeight: "bold",
    padding: 16,
    fontFamily: "Poppins",
  },
});

export default App;