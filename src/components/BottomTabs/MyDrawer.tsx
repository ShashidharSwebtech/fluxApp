import { SafeAreaView, Text, View } from 'react-native'
import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import SearchFilter from '../SearchFilter';
import {
  responsiveHeight as rh,
  responsiveFontSize as rf,
  responsiveScreenWidth as rw,
} from 'react-native-responsive-dimensions';

const Drawer = createDrawerNavigator();
export class MyDrawer extends Component {
  render() {
    return (


      <View testID='drawer' style={{flex:1}}>
      <Drawer.Navigator
      id='drawer123'
      drawerContent={()=><DrawerContent/>}
      screenOptions={{
        headerShown:false,
        drawerPosition:"right" ,
        drawerStyle:{
          borderTopLeftRadius:rh(2),
          backgroundColor:"#fff",
          borderBottomLeftRadius:rh(2)
        },
        drawerType:"front"
      }}
      >
        <Drawer.Screen name="my-drawer" component={SearchFilter}/>
      </Drawer.Navigator>

      </View>

    )
  }
}

export default MyDrawer