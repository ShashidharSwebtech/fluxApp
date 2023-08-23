import { render } from "@testing-library/react-native";
import CreateNewPassword from "../src/components/CrateNewPassword";

jest.mock("react-native-vector-icons/FontAwesome", () => () => <></>)
jest.mock("react-native-vector-icons/AntDesign", () => () => <></>)
jest.mock("react-native-vector-icons/Feather", () => () => <></>)
jest.mock("react-native-vector-icons/EvilIcons", () => () => <></>)
const props={
    navigation:{
        navigate:jest.fn(),
        goBack:jest.fn()
    }
}


describe("create PAssword Compoennt",()=>{
    test("render",()=>{

        render(<CreateNewPassword {...props}/>)
    })
})