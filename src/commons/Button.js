import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const Button = (props) => {

    const { container, text } = styles
    return (
        <TouchableOpacity onPress={props.onPress} style={container}>
            <Text style={text}>
                {props.children}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: 'white',
        margin: 5,
        marginTop:15,
        backgroundColor:'#56a6e3',
        borderRadius:5

    }

    , text: {
        fontFamily: 'Montserrat-Bold',
        alignSelf: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
})

export  {Button}