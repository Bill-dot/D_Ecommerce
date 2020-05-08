import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { CardSection, SearchBar } from '../commons'
import AvailableItem from '../components/AvailableItem'
import { categoryIDAction } from '../actions'

class HomeScreen extends Component {
    constructor(props) {
        super(props)
        // console.log(props)

    }


    render() {
        return (
            <View style={styles.main}>
                <SearchBar navigation={this.props.navigation} />
                <ScrollView>

                    <CardSection>
                        <AvailableItem
                            name={this.props.CategoryList[0].title}
                            image={this.props.CategoryList[0].imageURL}
                            cost={val}
                            onPress={() => {
                                this.props.categoryIDAction(0)
                                return this.props.navigation.navigate('Mobile')
                            }} />
                        <AvailableItem
                            name={this.props.CategoryList[1].title}
                            image={this.props.CategoryList[1].imageURL}
                            cost={val}
                            onPress={() => {
                                this.props.categoryIDAction(1)
                                this.props.navigation.navigate('Mobile')
                            }} />
                    </CardSection>
                    <CardSection>
                        <AvailableItem
                            name={this.props.CategoryList[2].title}
                            image={this.props.CategoryList[2].imageURL}
                            cost={val}
                            onPress={() => {
                                this.props.categoryIDAction(2)
                                this.props.navigation.navigate('Mobile')
                            }} />
                        <AvailableItem
                            name={this.props.CategoryList[3].title}
                            image={this.props.CategoryList[3].imageURL}
                            cost={val}
                            onPress={() => {
                                this.props.categoryIDAction(3)
                                this.props.navigation.navigate('Mobile')
                            }} />
                    </CardSection>
                    <CardSection>
                        <AvailableItem
                            name={this.props.CategoryList[4].title}
                            image={this.props.CategoryList[4].imageURL}
                            cost={val}
                            onPress={() => {
                                this.props.categoryIDAction(4)
                                this.props.navigation.navigate('Mobile')
                            }} />
                        <AvailableItem
                            name={this.props.CategoryList[5].title}
                            image={this.props.CategoryList[5].imageURL}
                            cost={val}
                            onPress={() => {
                                this.props.categoryIDAction(5)
                                this.props.navigation.navigate('Mobile')
                            }} />
                    </CardSection>
                    <CardSection>
                        <AvailableItem
                            name={this.props.CategoryList[6].title}
                            image={this.props.CategoryList[6].imageURL}
                            cost={val}
                            onPress={() => {
                                this.props.categoryIDAction(6)
                                this.props.navigation.navigate('Mobile')
                            }} />
                        <AvailableItem
                            name={this.props.CategoryList[7].title}
                            image={this.props.CategoryList[7].imageURL}
                            cost={val}
                            onPress={() => {
                                this.props.categoryIDAction(7)
                                this.props.navigation.navigate('Mobile')
                            }} />
                    </CardSection>

                </ScrollView>
            </View>
        )
    }
}

const val = 0

const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: '#b8b8b8'
    }
})

mapStateToProps = (state) => {
    return {
        CategoryList: state.CategoryList,
        CategoryID: state.CategoryID
    }
}

const mapStateToDispatch = {
    categoryIDAction
}

export default connect(mapStateToProps, mapStateToDispatch)(HomeScreen)


