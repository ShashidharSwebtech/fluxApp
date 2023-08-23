import { fireEvent, render } from "@testing-library/react-native";
import Forgot from "../src/components/Forgot";
jest.mock("react-native-vector-icons/FontAwesome", () => () => <></>)
jest.mock("react-native-vector-icons/AntDesign", () => () => <></>)
jest.mock("react-native-vector-icons/Feather", () => () => <></>)
jest.mock("react-native-vector-icons/EvilIcons", () => () => <></>)

const props = {
    navigation: {
        navigate: jest.fn(),
        goBack: jest.fn()
    }
}

describe("Forgot Component", () => {

    test("render component", () => {
        const { getByTestId } = render(<Forgot {...props} />)
        const goback = getByTestId("goback")
        fireEvent.press(goback)
        expect(props.navigation.goBack).toBeCalled()
    })
    test("naviagte to createNewComponent", () => {
        const { getByTestId } = render(<Forgot {...props} />)
        const navigatetoverfication = getByTestId("navigatetoverfication")
        fireEvent.press(navigatetoverfication)
        expect(props.navigation.navigate).toBeCalledWith("verfication")
    })
    test("naviagte to createNewComponent", () => {
        const { getByTestId } = render(<Forgot {...props} />)
        const emailinput = getByTestId("emailinput")
        emailinput.props.onChangeText("test")
        expect(emailinput.props.value).toBe("test")


    })

})