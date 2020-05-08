import React from 'react'
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

const SearchBar = ({navigation}) => {

    const { main, text1, text2, textInput } = styles

    return (
        <View style={main}>
            <Icon name="menu" size={35} color="white" style={{marginLeft:5}}/>
            <Icon name="search" size={35} color="white" style={{marginLeft:20}}/>
            <TextInput style={textInput} placeholder='Search for item' />
            <TouchableOpacity style={styles.opacity} onPress={()=>navigation.navigate('Cart')}>
                <Icon name="shopping-cart" size={35} color="white" style={styles.text2}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        // borderWidth: 0.5,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#000000',
        paddingVertical: 8,
        marginHorizontal:3,
        marginBottom:10
    },
    text1: {
        flex: 1,
        // fontWeight: 'bold',
        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        // paddingVertical:10,
        marginVertical: 10,
        marginLeft: 10,
        color: 'white'
    },
    text2: {
        // fontFamily: 'Montserrat-Bold',
        // fontWeight: 'bold',
        // fontSize: 20,
        // paddingVertical:10,
        // marginVertical:10,
        marginLeft: 5,
        // borderWidth: 5,
        paddingLeft: 10,
        // color: 'white',
        

    },
    textInput: {
        flex: 3,
        // borderWidth:1,
        borderRadius: 8,
        backgroundColor: '#d4d9d6',
        marginLeft: 5,
        paddingVertical: 8,
        fontSize: 20,
        color:'black',
        fontFamily: 'Montserrat-Medium',
    },
    opacity:{
        flex:1,
        
        }
})

export { SearchBar }