import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
export class SearchSlider extends Component {
  render() {
    return (
   <Drawer.Navigator
   drawerContent={()=><View>
<Text>shashidhar</Text>
   </View>}
   >
    
   </Drawer.Navigator>
    )
  }
}

export default SearchSlider