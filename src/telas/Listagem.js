import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView, SafeAreaView, Image} from 'react-native';

import COLORS from '../const/Colors';
import apiLivraria from '../service/apiLivraria';
import capaLivro150 from '../assets/livros/lor150.png'
import capaLivro100 from '../assets/livros/lor100.png'
import { useEffect } from 'react/cjs/react.production.min';

const Listagem = () => {

    const [livros, setLivros] = useState([])

    useEffect(()=>{
        apiLivraria.get('/listarLivros')
        .then(
            (data)=>{
                console.log(data)
            }
        )
    },
    []
    )

    return(
    <ScrollView>
        <View style={estilos.container}>
            <View style={estilos.post}>
                <Image style={estilos.imagem} source={capaLivro150}/>
                <Text style={estilos.titulo}>O senhor dos anéis</Text>
            </View>
        </View>
    </ScrollView>
    )
}

const estilos = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    post:{
        width:'95%',
        alignItems:'center',
        backgroundColor:'#ccc',
        padding: 15,
        marginVertical: 5,
        borderRadius:5,
        elevation:5,
    },
    imagem:{
        borderRadius:5,
        marginVertical:16,
        marginLeft:16,
    },
    titulo:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
    }
})

export default Listagem