import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default class AvailableItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { onPress, image, name, cost } = this.props
        return (
            <View style={styles.main}>
                <TouchableOpacity onPress={onPress}>
                    <Image source={{ uri: image }} style={styles.Image} />
                    <Text style={styles.text}>{name}</Text>
                    {cost == 0 ? <Text></Text> : <Text style={styles.text}>Rs :{cost}</Text>}
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        borderRadius: 8,
        marginRight: 10,
        marginLeft: 10,
        // justifyContent: 'center',
        flex: 1,
        backgroundColor: 'black'

    },
    text: {
        fontFamily: 'OpenSans-Bold',
        alignSelf: 'center',
        marginTop: 5,
        // fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
        paddingBottom: 5


    },
    Image: {
        height: 250,
        width: null,
        borderRadius: 10,
        borderBottomLeftRadius:0,
        borderBottomRightRadius:0
    }

})