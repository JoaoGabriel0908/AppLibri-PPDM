import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import COLORS from '../const/Colors';
import apiLivraria from '../service/apiLivraria';

const Editar = ({route, navigation}) => {
  // const nome = "Tela de Cadastro";

  //CAPTURA DE DADOS COM USO DE STATES
  //CRIAÇÃO DE ESTRUTURA DE STATE QUE ARMAZENA OS CONTEÚDOS DIGITADOS
  const [inputs, setInputs] = React.useState({
    // O useState sempre representa essa estrutura
    // Chave = inputs / valor = inputs
    titulo: '',
    descricao: '',
    capa: '',
  });

  useEffect(() => {
    apiLivraria.get(`listarLivros/${cod_livro}`)
    .then((data)=>{
      setInputs(data.data[0])
    }
    )
  })

  const {cod_livro} = route.params

  // FUNÇÃO QUE MANIPULA A ENTRADA DE DADOS NA
  // STATE NO MÉTODO OnChangeText
  const handleOnChange = (text, input) => {
    //O setInputs invoca o estado e passa para o prevState
    setInputs(
      prevState => (
        console.log(prevState),
        // console.log(input + ` ` + text)

        // Injeção de dados na State
        // Sobrepondo resultado do texto e colocando no prevState
        {...prevState, [input]: text}
      ),
    );
  };
  // ******************** Validação dos dados de cadastro ********************

  // State de erro de preenchimento
  const [errors, setErrors] = React.useState([]);

  // Função Handler que configura as mensagens de erros na state
  // Pegando as mensagens de erros e onde ocorreu (input)
  const handleErrors = (errorMessage, input) => {
    // Quando usamos um par de parenteses quer dizer que estamos dando um RETURN
    setErrors(prevState => ({
      ...prevState,
      [input]: errorMessage,
    }));
  };

  // Função de validação
  const validate = () => {
    let validate = true;

    // Quando máo tem conteúdo o validate ficará falso e aparecerá a mensagem
    if (!inputs.titulo) {
      validate = false;
      handleErrors('Informe o título do livro', 'titulo');
      // console.log('Título em branco')
    }
    if (!inputs.descricao) {
      validate = false;
      handleErrors('Informe a descrição do livro', 'descricao');
      // console.log('Descrição em branco')
    }
    if (!inputs.capa) {
      validate = false;
      handleErrors('Informe a capa do livro', 'capa');
      // console.log('Capa em branco')
    }
    if (validate){
      // Envia os dados para a API cadastrar.
      cadastrar();
      console.log('Cadastrou')
    }

    console.log(errors);
  };

  // Função que cria o cadastro com o post
  const cadastrar = () => {
    try{
      const response = apiLivraria.post('/cadastrarLivros', 
      {
        titulo: inputs.titulo,
        descricao: inputs.descricao,
        imagem: inputs.capa,
      })
    }catch(error){}
  }

  return (
    // SafeAreaView, uma div que colocaria os elementos dentro dele
    <SafeAreaView style={estilos.safe}>
      <ScrollView style={estilos.scroll}>
        <Text style={estilos.textTitle}>Cadastro de Livro</Text>

        <View style={estilos.viewForm}>
          {/* Componente que criamos */}

          {/*Os dados são passados para o onChange, que passa para a variavel 'TEXT'*/}
          <Input
            label="Título"
            iconName='book-outline'
            error={errors.titulo}
            onFocus={() => {
              // Tirando a mensagem de erro 
              handleErrors(null, 'titulo');
            }}
            value={inputs.titulo}
            onChangeText={text => handleOnChange(text, 'titulo')}
          />
          <Input
            label="Descrição"
            iconName='card-text-outline'
            error={errors.descricao}
            onFocus={() => {
              handleErrors(null, 'descricao');
            }}
            value={inputs.descricao}
            onChangeText={text => handleOnChange(text, 'descricao')}
          />
          <Input
            label="Capa"
            iconName='image-outline'
            error={errors.capa}
            onFocus={() => {
              handleErrors(null, 'capa');
            }}
            value={inputs.imagem}
            onChangeText={text => handleOnChange(text, 'capa')}
          />

          <Button title="Cadastrar" onPress={validate} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  safe: {
    backgroundColor: COLORS.white,
    borderTopStartRadius: 20, 
    borderTopEndRadius: 20,
  },
  scroll: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  textTitle: {
    color: COLORS.blue,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  viewForm: {
    marginVertical: 20,
  },
});

export default Editar;
