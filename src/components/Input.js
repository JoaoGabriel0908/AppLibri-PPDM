import React from "react";
import {View, Text, TextInput, StyleSheet} from 'react-native'

import COLORS from "../const/Colors";

// Função que representa um componente
const Input = ({label, ...props}) => {
    return(
        
        <View style={estilos.formContainer}>
            <Text style={estilos.inputLabel}>{label}</Text>
            
            <View style={estilos.inputContainer}>
                <TextInput style={estilos.TextInput} autoCorrect={false} {...props}/>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    formContainer: {
        marginBottom: 20
    },
    inputLabel:{
        marginVertical: 5,
        fontSize: 15,
        color: COLORS.gray
    },
    inputContainer:{
        height:55,
        backgroundColor:COLORS.light,
        flexDirection:'row',
        borderWidth: .5,
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    TextInput:{
        flex:1,
        color:COLORS.darkBlue
    }
});

export default Input