import { render } from "@testing-library/react-native";
import Search from "../src/components/BottomTabs/Search";
import { Provider } from "react-redux";
import store from "../src/store/Store";


jest.mock("react-native-vector-icons/Feather", () => () => <></>)
jest.mock("react-native-vector-icons/FontAwesome6", () => () => <></>)
jest.mock("react-native-vector-icons/MaterialCommunityIcons", () => () => <></>)


const store1=store;
describe("user compoent", () => {
  test("render", () => {
    render(<Search />)
  })
})