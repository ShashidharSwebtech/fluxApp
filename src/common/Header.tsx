import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons"
import {
    responsiveHeight as rh,
    responsiveWidth as rw,
    responsiveFontSize as rf,
  } from 'react-native-responsive-dimensions';
import OctaIcon from "react-native-vector-icons/Octicons"



interface Iprops{
    title:string
}
export class Header extends Component<Iprops> {
  render() {
    const {title}=this.props
    return (
      <View style={styles.container}>
        <MaterialCommunityIcon name="sort-reverse-variant" color="#000" size={rh(4)} />
        <Text style={styles.title}>{title}</Text>
        <MaterialCommunityIcon name="bell-badge-outline"color="#000" size={rh(4)} />
      </View>
    )
  }
}

export default Header;
const styles=StyleSheet.create({
container:{
    justifyContent:"space-between",
    flexDirection:"row",
   
},
title:{
    fontSize:rf(3),
    fontWeight:"600",
    fontFamily:"Product Sans"
}
})