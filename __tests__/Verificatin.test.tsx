import { render } from "@testing-library/react-native";
import Verification from "../src/components/Verfication";
jest.mock("react-native-vector-icons/FontAwesome", () => () => <></>)
jest.mock("react-native-vector-icons/AntDesign", () => () => <></>)
jest.mock("react-native-vector-icons/Feather", () => () => <></>)
jest.mock("react-native-vector-icons/EvilIcons", () => () => <></>)
const props={
    navigation:{
        navigate:jest.fn()
    }
}


describe("create PAssword Compoennt",()=>{
    render(<Verification />)
})