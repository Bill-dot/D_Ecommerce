import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image, TouchableWithoutFeedback } from 'react-native'
import { SearchBar, Head, CardSection, Button } from '../commons'
import AvailableItem from '../components/AvailableItem'
import { connect } from 'react-redux'
import { ModalAction, CartAddAction, updatePlusCart } from '../actions'
import Modal from 'react-native-modal'
import { color } from 'react-native-reanimated'


class MobileScreen extends Component {
    constructor(props) {
        super(props)
    }

    learnHeader = () => {
        switch (this.props.CategoryID) {
            case 0: {
                return "Mobiles"
            }
            case 1: {
                return "Games"
            }
            case 2: {
                return "Men's Clothing"
            }
            case 3: {
                return "Women's Clothing"
            }
            case 4: {
                return "Kid's Clothing"
            }
            case 5: {
                return "Kitchen Equipment"
            }
            case 6: {
                return "Furniture"
            }
            case 7: {
                return "Electronics"
            }
        }
    }

    search(item) {
        let i = 0;
        let quantity = 0;
        while (i < this.props.Cart.item.length) {
            if (this.props.Cart.item[i].title === item) {
                quantity = this.props.Cart.item[i].quantity
            } i++;
        }
        return quantity;
    }

    render() {
        const { imageURL, title, cost } = this.props.ModalStatus.pressedItem
        return (
            <View style={styles.container}>
                <SearchBar navigation={this.props.navigation} />
                <Head>
                    {this.learnHeader()}
                </Head>
                <Modal
                    style={styles.modal}
                    isVisible={this.props.ModalStatus.isModalVisible}
                    onBackButtonPress={() => this.props.ModalAction({})}
                    backdropOpacity={0.9}
                >
                    <View style={styles.modalView}>
                        <Image source={{ uri: imageURL }} style={{ height: 450, width: 350, borderRadius: 8 }} />
                        <Text style={styles.modalItemName}>{title}</Text>
                        <Text style={styles.modalItemCost}>Rs:{cost}</Text>
                        <Button onPress={() => {
                            this.props.ModalAction({})
                            this.props.navigation.navigate('Cart')
                        }}>GO TO CART</Button>
                        <Button onPress={
                            () => {
                                let quantity=this.search(title)

                                if (quantity == 0) {// console.log(this.props.ModalStatus.pressedItem)
                                    this.props.CartAddAction({ imageURL: imageURL, title: title, cost: cost, quantity: 1 })
                                } else {
                                    this.props.updatePlusCart({ imageURL: imageURL, title: title, cost: cost })
                                }
                                this.props.ModalAction({})
                                this.props.navigation.navigate('Cart')

                            }
                        }>BUY NOW</Button>
                    </View>
                </Modal>
                <ScrollView>
                    <CardSection>
                        <AvailableItem
                            name={this.props.itemID[0].title}
                            image={this.props.itemID[0].imageURL}
                            cost={this.props.itemID[0].cost}
                            onPress={() => {
                                this.props.ModalAction(this.props.itemID[0])
                            }}
                        />
                        <AvailableItem
                            name={this.props.itemID[1].title}
                            image={this.props.itemID[1].imageURL}
                            cost={this.props.itemID[1].cost}
                            onPress={() => {
                                this.props.ModalAction(this.props.itemID[1])
                            }}
                        />
                    </CardSection>
                    <CardSection>
                        <AvailableItem
                            name={this.props.itemID[2].title}
                            image={this.props.itemID[2].imageURL}
                            cost={this.props.itemID[2].cost}
                            onPress={() => {
                                this.props.ModalAction(this.props.itemID[2])
                            }}
                        />
                        <AvailableItem
                            name={this.props.itemID[3].title}
                            image={this.props.itemID[3].imageURL}
                            cost={this.props.itemID[3].cost}
                            onPress={() => {
                                this.props.ModalAction(this.props.itemID[3])
                            }}
                        />
                    </CardSection>
                    <CardSection>
                        <AvailableItem
                            name={this.props.itemID[4].title}
                            image={this.props.itemID[4].imageURL}
                            cost={this.props.itemID[4].cost}
                            onPress={() => {
                                this.props.ModalAction(this.props.itemID[4])
                            }}
                        />
                        <AvailableItem
                            name={this.props.itemID[5].title}
                            image={this.props.itemID[5].imageURL}
                            cost={this.props.itemID[5].cost}
                            onPress={() => {
                                this.props.ModalAction(this.props.itemID[5])
                            }}
                        />
                    </CardSection>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c8c9c5'
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalItemName: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 25,
        // fontWeight:'bold',
        color: 'white',
        alignSelf: 'flex-start'
    },
    modalItemCost: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 40,
        // fontWeight:'bold',
        color: 'white',
        alignSelf: 'flex-start'
    },
    modal: {
        margin: 40
    }
})

mapStateToProps = (state) => {
    console.log(state.CategoryID)
    switch (state.CategoryID) {
        case 0:
            return {
                itemID: state.MobileList,
                CategoryID: state.CategoryID,
                ModalStatus: state.ModalStatus,
                Cart: state.Cart
            }
        case 1:
            return {
                itemID: state.GameList,
                CategoryID: state.CategoryID,
                ModalStatus: state.ModalStatus,
                Cart: state.Cart
            }
        case 2:
            return {
                itemID: state.MenList,
                CategoryID: state.CategoryID,
                ModalStatus: state.ModalStatus,
                Cart: state.Cart
            }
        case 3:
            return {
                itemID: state.WomenClothesList,
                CategoryID: state.CategoryID,
                ModalStatus: state.ModalStatus,
                Cart: state.Cart
            }
        case 4:
            return {
                itemID: state.KidClothesList,
                CategoryID: state.CategoryID,
                ModalStatus: state.ModalStatus,
                Cart: state.Cart

            }
        case 5:
            return {
                itemID: state.KitchenList,
                CategoryID: state.CategoryID,
                ModalStatus: state.ModalStatus,
                Cart: state.Cart
            }
        case 6:
            return {
                itemID: state.FurnitureList,
                CategoryID: state.CategoryID,
                ModalStatus: state.ModalStatus,
                Cart: state.Cart
            }
        case 7:
            return {
                itemID: state.ElectronicList,
                CategoryID: state.CategoryID,
                ModalStatus: state.ModalStatus,
                Cart: state.Cart
            }
    }
}
const mapStateToDispatch = {
    ModalAction,
    CartAddAction,
    updatePlusCart

}

export default connect(mapStateToProps, mapStateToDispatch)(MobileScreen)