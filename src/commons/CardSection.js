import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

const CardSection = (props) => {

    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        
        flexDirection:'row',
        justifyContent:'flex-start',
        // borderWidth:2,
        // borderColor:'#ff3c00',
        position: 'relative',
        marginTop:18,
        borderRadius:5,
        marginHorizontal:5,
        alignItems:'center',
        paddingVertical:5
    }
})

export  {CardSection}

