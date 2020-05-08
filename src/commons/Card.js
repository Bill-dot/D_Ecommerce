import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Card = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       
        // justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1.5,
        borderColor: '#1f4d99',
        // backgroundColor:'#ffdcd1',
        margin: 5,
        // marginTop:25,
        // paddingBottom:10,
        padding: 3,
        borderRadius:10
    }
})

export {Card}