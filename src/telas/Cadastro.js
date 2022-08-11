import React from "react";
import {Text, View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import Input from "../components/Input";
import COLORS from "../const/Colors";
import Button from "../components/Button";

const Cadastro = ()=>{

    // const nome = "Tela de Cadastro";

    //CAPTURA DE DADOS COM USO DE STATES
    //CRIAÇÃO DE ESTRUTURA DE STATE QUE ARMAZENA OS CONTEÚDOS DIGITADOS
    const [inputs, setInputs] = React.useState({
      // O useState sempre representa essa estrutura
      // Chave = inputs / valor = inputs
      titulo: '',
      descricao: '',
      capa: '',
    })

    // FUNÇÃO QUE MANIPULA A ENTRADA DE DADOS NA 
    // STATE NO MÉTODO OnChangeText
    const handleOnChange = (text, input) => {
      //O setInputs invoca o estado e passa para o prevState
        setInputs((prevState) => (
          console.log(prevState),
        // console.log(input + ` ` + text)

        // Injeção de dados na State
        {...prevState, [input]:text}
      ));
    }

    // Validação dos dados de cadastro
    // Função de validação
    const validate = () => {
      let validate = true;

      if(!inputs.titulo) {
        validate = false;
        console.log('Título em branco')
      }
      if(!inputs.descricao) {
        validate = false;
        console.log('Descrição em branco')
      }
      if(!inputs.capa) {
        validate = false;
        console.log('Capa em branco')
      }
    }

    return(
      // SafeAreaView, uma div que colocaria os elementos dentro dele
      <SafeAreaView style={estilos.safe}>
        <ScrollView style={estilos.scroll}>

        <Text style={estilos.textTitle}>Cadastro de Livro</Text>  
    
          <View style={estilos.viewForm}>

            {/* Componente que criamos */}

            {/*Os dados são passados para o onChange, que passa para a variavel 'TEXT'*/}
            <Input label="Título" onChangeText={(text) => handleOnChange(text, 'titulo')}/>
            <Input label="Descrição" onChangeText={(text) => handleOnChange(text, 'descricao')}/>
            <Input label="Capa" onChangeText={(text) => handleOnChange(text, 'capa')}/>

            <Button title="Cadastrar"
            onPress={validate}/>

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
    color: COLORS.blue,
    fontSize: 25,
    fontWeight:"bold",
    textAlign:"center",
  },
  viewForm:{
    marginVertical:20,
  },
})

export default Cadastro;