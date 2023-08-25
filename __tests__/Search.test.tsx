import { render } from "@testing-library/react-native";
import Search from "../src/components/BottomTabs/Search";
jest.mock("react-native-vector-icons/Feather", () => () => <></>)
jest.mock("react-native-vector-icons/FontAwesome6", () => () => <></>)
jest.mock("react-native-vector-icons/MaterialCommunityIcons", () => () => <></>)

describe("user compoent", () => {
  test("render", () => {
    render(<Search />)
  })
})