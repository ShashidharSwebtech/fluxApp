import { render } from "@testing-library/react-native";
import Forgot from "../src/components/Forgot";
jest.mock("react-native-vector-icons/FontAwesome", () => () => <></>)
jest.mock("react-native-vector-icons/AntDesign", () => () => <></>)
jest.mock("react-native-vector-icons/Feather", () => () => <></>)
jest.mock("react-native-vector-icons/EvilIcons", () => () => <></>)

test("render",()=>{
    render(<Forgot/>)
})