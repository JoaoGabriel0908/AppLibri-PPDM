import React from "react";
import {TouchableOpacity, StyleSheet, Text} from 'react-native'

import COLORS from "../const/Colors";

const Button = ({title, onPress=(() => {})}) => {
    return(
        <TouchableOpacity activeOpacity={0.7} style={estilos.button} onPress={onPress}>
            <Text style={estilos.title}>{title}</Text>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    title:{
        color: COLORS.white,
        fontWeight: "bold",
        fontSize: 18,
    },
    button:{
        height: 55,
        width:"100%",
        backgroundColor: COLORS.blue,
        justifyContent: 'center',
        alignItems: "center",
        marginVertical: 20,
        borderWidth: .5,
        borderRadius: 10,
    },
});

export default Button