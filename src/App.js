import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import MobileScreen from './screens/MobileScreen'
import HomeScreen from './screens/HomeScreen'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import CartScreen from './screens/Cart'

const Navigator = createStackNavigator({
    Mobile: MobileScreen,
    Home: HomeScreen,
    Cart: CartScreen

},
    {
        initialRouteName: 'Home',
        headerMode: 'none'

    })

const AppContainer = createAppContainer(Navigator)

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <AppContainer />
            </Provider>
        )
    }
}


