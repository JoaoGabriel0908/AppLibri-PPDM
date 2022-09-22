import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';

import COLORS from '../const/Colors';
import apiLivraria from '../service/apiLivraria';
import capaLivro150 from '../assets/livros/lor150.png';
import capaLivro100 from '../assets/livros/lor100.png';

const Listagem = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    apiLivraria.get('/listarLivros').then(data => {
      console.log(data);
      setLivros(data.data);
    });
  }, []);

  return (
    <ScrollView>
      <View style={estilos.container}>
        {livros.map(livro => (
          <View style={estilos.post}>
            <Image style={estilos.imagem} source={capaLivro150} />
            <Text style={estilos.titulo}>{livro.titulo}</Text>
          </View>
        ))}

        {/* Função com {} retorna um corpo de processamento */}
        {/* Função quando termina com() retorna um return com tudo que está dentro */}
      </View>
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  post: {
    width: '95%',
    alignItems: 'center',
    backgroundColor: '#ccc',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    elevation: 5,
  },
  imagem: {
    borderRadius: 5,
    marginVertical: 16,
    marginLeft: 16,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Listagem;
