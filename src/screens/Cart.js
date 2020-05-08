import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, Image } from 'react-native'
import { Card, CardSection, Button, Head } from '../commons'
import { connect } from 'react-redux'
import { CartAddAction, CartDelAction, updatePlusCart, updateMinusCart } from '../actions'

class Cart extends Component {
    constructor(props) {
        super(props)
        // console.log(props.cart)
    }

    render() {
        return (
            <View style={styles.container}>
                <Head>CART</Head>
                {
                    this.props.cart.item.length == 0 ? this.renderEmpty() : this.renderFull()
                }
            </View>
        )
    }

    search(item) {
        let i = 0;
        let quantity = 0;
        while (i < this.props.cart.item.length) {
            if (this.props.cart.item[i].title === item.title) {
                quantity = this.props.cart.item[i].quantity
            } i++;
        }
        return quantity;
    }

    renderEmpty() {
        return (
            <View style={{ flex: 1 }}>
                <Image
                    source={source = { uri: 'https://tyjara.com/assets/site/img/empty-cart.png' }}
                    style={{ height: 500, width: null }}
                />
                <View style={{ marginHorizontal: 60 }}>
                    <Button onPress={() => this.props.navigation.navigate('Home')}>Continue Shopping</Button>
                </View>
            </View>
        )
    }

    renderFull() {
        const { item, totalCost } = this.props.cart
        return (
            <View style={{ flex: 1, backgroundColor: '#6a6c6e' }}>
                <FlatList
                    data={item}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.containerFull}>
                                <View style={styles.containerImage}>
                                    <Card>
                                        <Image source={{ uri: item.imageURL }} style={{ height: 100, width: 80, borderRadius: 8 }} />
                                    </Card>
                                </View>
                                <View style={styles.containerName}>
                                    <Card>
                                        <Text style={styles.containerText1}>{item.title}</Text>
                                        <Text style={styles.containerText2}>Rs : {item.cost}</Text>
                                    </Card>
                                </View>
                                <View style={styles.containerNumber}>
                                    <Button onPress={() => {
                                        this.props.updatePlusCart({
                                            imageURL: item.imageURL,
                                            title: item.title,
                                            cost: item.cost
                                        })
                                    }}>  +  </Button>
                                    <Text style={styles.textOfNumber}>{this.search(item)}</Text>
                                    <Button onPress={() => {
                                        quantity = this.search(item)

                                        if (quantity >= 2) {
                                            this.props.updateMinusCart({
                                                imageURL: item.imageURL,
                                                title: item.title,
                                                cost: item.cost
                                            })
                                        } else {

                                            this.props.CartDelAction({
                                                imageURL: item.imageURL,
                                                title: item.title,
                                                cost: item.cost,
                                            })
                                        }


                                    }}>  -  </Button>
                                </View>
                            </View>
                        )
                    }}
                />
                <Text style={styles.containerText2}>Total Amount : Rs {this.props.cart.totalCost}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10
    },
    containerImage: {
        flex: 1,
        marginLeft: 4
    },
    containerName: {
        flex: 2,
        justifyContent: 'space-between'
    },
    containerNumber: {
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerText1: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20
    },
    containerText2: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 25
    },
    textOfNumber: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12
    },
    containerFull: {
        borderWidth: 1,
        padding: 0,
        flex: 1,
        flexDirection: 'row',
        borderRadius: 12,
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 12,
        backgroundColor: '#e3e4e6'
    }
})

mapStateToProps = (state) => {
    return {
        cart: state.Cart
    }
}

const mapStateToDispatch = {
    CartAddAction,
    CartDelAction,
    updatePlusCart,
    updateMinusCart
}

export default connect(mapStateToProps, mapStateToDispatch)(Cart)