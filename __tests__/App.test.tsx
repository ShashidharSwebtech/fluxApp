/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
jest.mock("@react-navigation/native", () => {
  const activeNavigation = jest.requireActual("@react-navigation/native");
  const { View: MockView } = require("react-native");
  return {
      ...activeNavigation,
      NavigationContainer: () => <MockView />,
  };
})
jest.mock("react-native-vector-icons/FontAwesome", () => () => <></>)
jest.mock("react-native-vector-icons/AntDesign", () => () => <></>)
jest.mock("react-native-vector-icons/Feather", () => () => <></>)
jest.mock("react-native-vector-icons/EvilIcons", () => () => <></>)
jest.mock("react-native-vector-icons/MaterialCommunityIcons", () => () => <></>)
jest.mock("react-native-vector-icons/Octicons", () => () => <></>)
jest.mock("react-native-vector-icons/SimpleLineIcons", () => () => <></>)
jest.mock("react-native-vector-icons/Ionicons", () => () => <></>)
jest.mock("react-native-vector-icons/FontAwesome6", () => () => <></>)

jest.mock("@react-navigation/stack", () => ({
  createStackNavigator: () => ({
      Navigator: () => <></>,
      Screen: () => <></>
  })
}))
jest.mock("@react-native-firebase/auth",()=>({
  createUserWithEmailAndPassword:jest.fn(),
  signInWithEmailAndPassword:jest.fn()
}))
jest.mock("react-native-snap-carousel",()=>{
  return {
    default:{
      Carosel:()=><></>
    },
    Pagination:()=><></>
  }
})
jest.mock("@react-native-google-signin/google-signin",()=>({
  GoogleSignin:jest.fn()
}))
jest.mock("@invertase/react-native-apple-authentication",()=>({
  appleAuth:jest.fn()
}))


jest.mock('@gorhom/bottom-sheet', () => {
  const { View: MockView } = require('react-native');

  // const actualbottomsheet = jest.requireActual("@gorhom/bottom-sheet")
  const BottomSheet = (props: any) => <MockView {...props} />

  return {
    // ...actualbottomsheet,
    default: { BottomSheet },
  };
});



jest.mock('react-native-gesture-handler', () => {
  const { View: MockView } = require('react-native');
  // const actualGesturerHandlerRootView = jest.requireActual("react-native-gesture-handler")
  return {
    // ...actualGesturerHandlerRootView,
    GestureHandlerRootView: () => < ></>
  };
});


jest.mock("@react-navigation/bottom-tabs", () => ({
  createBottomTabNavigator: () => ({
    Screen: () => <></>,
    Navigator: () => <></>
  })
}))
it('renders correctly', () => {
  renderer.create(<App />);
});
