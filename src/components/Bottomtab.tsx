import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './BottomTabs/Home';
import FontAwosemIcon from "react-native-vector-icons/FontAwesome"
import FeatherIcon from "react-native-vector-icons/Feather"
import OcticonsIon from "react-native-vector-icons/Octicons"
import SimpleIcon from "react-native-vector-icons/SimpleLineIcons"
import IconicIcon from "react-native-vector-icons/Ionicons"
import {
    responsiveHeight as rh,
    responsiveWidth as rw,
    responsiveScreenWidth as rf,
  } from 'react-native-responsive-dimensions';
import Search from './BottomTabs/Search';
import AddCart from './BottomTabs/AddCart';
import User from './BottomTabs/User';

const Tab = createBottomTabNavigator();



export class Bottomtab extends Component {
  render() {
    return (
     <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:"#000",
        tabBarInactiveTintColor:"#E6E8EC",
        tabBarStyle:{
            position:"absolute",
            borderTopLeftRadius:rh(2),
            borderTopRightRadius:rh(2)
        },
        tabBarShowLabel:false
        
     }}>
        <Tab.Screen name="home" component={Home}
        options={{
            tabBarIcon:({color})=><OcticonsIon name="home" size={rh(4)} color={color}/>
        }}
        />
        <Tab.Screen name="search" component={Search}
        options={{
            tabBarIcon:({color})=><FeatherIcon name="search" size={rh(4)} color={color}/>
        }}
        />
        <Tab.Screen name="addcart" component={AddCart}
        options={{
            tabBarIcon:({color})=><SimpleIcon name="handbag" size={rh(4)} color={color}/>
        }}
        />
        <Tab.Screen name="person-outline" component={User}
        options={{
            tabBarIcon:({color})=><FeatherIcon name="user" size={rh(4)} color={color}/>
        }}
        />
     </Tab.Navigator>
    )
  }
}

export default Bottomtab