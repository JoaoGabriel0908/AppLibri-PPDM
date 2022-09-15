// O APP representa o ponto inicial da nossa aplicação
import React from "react";
import {Text, View, StyleSheet} from 'react-native';

import Login from "./src/telas/Login";
import Cadastro from "./src/telas/Cadastro";
import Listagem from "./src/telas/Listagem";
import COLORS from "./src/const/Colors";

const App = ()=>{

  // const nome = "SENAI - Jandira"

  return(
    // <View>
    //   <Login style={estilo.titulo}></Login>
    // </View>

    // <View>
    //   <Text style={estilo.titulo}>{nome}</Text>
    // </View>
    <View><Listagem/></View>
  );
}

const estilo = StyleSheet.create({
  container:{
    paddingTop: 100,
    backgroundColor: COLORS.darkBlue,
  },
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