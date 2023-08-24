import { fireEvent, render } from "@testing-library/react-native";
import Verification from "../src/components/Verfication";



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


describe("create PAssword Compoennt", () => {
    test("render component", () => {
        const { getByTestId } = render(<Verification {...props} />)
        const goback = getByTestId("goback")
        fireEvent.press(goback)
        expect(props.navigation.goBack).toBeCalled()
    })

})