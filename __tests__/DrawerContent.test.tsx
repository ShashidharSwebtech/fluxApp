import { act, render } from "@testing-library/react-native";
import DrawerContent from "../src/components/BottomTabs/DrawerContent";

jest.mock("react-native-vector-icons/FontAwesome6",()=>()=><></>)
jest.mock("react-native-vector-icons/AntDesign",()=>()=><></>)
jest.mock("react-native-vector-icons/Feather",()=>()=><></>)
jest.mock("react-native-vector-icons/FontAwesome",()=>()=><></>)


describe("DrawerContent component",()=>{
test("rendering",()=>{
    render(<DrawerContent/>)
})
})