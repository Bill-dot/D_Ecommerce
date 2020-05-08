import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

// Make a component
const Head = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.children}</Text>
    </View>
  );
};

const styles =StyleSheet.create( {
  viewStyle: {
    backgroundColor: '#56a6e3',
    justifyContent: 'center',
    borderBottomWidth:1,
    borderBottomLeftRadius:12,
    borderBottomRightRadius:12,
    marginBottom:10,
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    marginHorizontal:5,
  

    
  },
  textStyle: {
    fontSize: 30,
    fontFamily:'Montserrat-Bold',
    color:'white'
  }
});

export  {Head}