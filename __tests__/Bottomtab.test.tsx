import { render } from "@testing-library/react-native";
import Bottomtab from "../src/components/Bottomtab";

jest.mock("react-native-vector-icons/FontAwesome", () => () => <></>)
jest.mock("react-native-vector-icons/AntDesign", () => () => <></>)
jest.mock("react-native-vector-icons/Feather", () => () => <></>)
jest.mock("react-native-vector-icons/EvilIcons", () => () => <></>)
jest.mock("react-native-vector-icons/MaterialCommunityIcons", () => () => <></>)
jest.mock("react-native-vector-icons/Octicons", () => () => <></>)
jest.mock("react-native-vector-icons/SimpleLineIcons", () => () => <></>)
jest.mock("react-native-vector-icons/Ionicons", () => () => <></>)
jest.mock("react-native-vector-icons/FontAwesome6", () => () => <></>)


const { View: MockedView } = require("react-native")

jest.mock("@react-navigation/bottom-tabs", () => ({
  createBottomTabNavigator: () => ({
    Screen: () => <MockedView ></MockedView>,
    Navigator: () => <></>
  })
}))


test("rendeing compoenent", () => {
  render(<Bottomtab />)
})
