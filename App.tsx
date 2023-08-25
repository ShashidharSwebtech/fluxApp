/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,

  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
 
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from './src/components/LandingPage';
import ShopNow from './src/components/ShopNow';
import SignUp from './src/components/SignUp';
import SignIn from './src/components/SignIn';
import Forgot from './src/components/Forgot';
import Verfication from './src/components/Verfication';
import CreateNewPassword from './src/components/CrateNewPassword';

import Bottomtab from './src/components/Bottomtab';

const Stack = createStackNavigator();



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          headerShown:false
        }}
        >
        <Stack.Screen name="landing" component={LandingPage}/>
        <Stack.Screen name="bottomtab" component={Bottomtab}/>
        <Stack.Screen name="signup" component={SignUp}/>
        <Stack.Screen name="signin" component={SignIn}/>
        <Stack.Screen name="shopnow" component={ShopNow}/>
        <Stack.Screen name="forgot" component={Forgot}/>
        <Stack.Screen name="verfication" component={Verfication}/>
        <Stack.Screen name="createPassword" component={CreateNewPassword}/>


        </Stack.Navigator>
      </NavigationContainer>
  

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
