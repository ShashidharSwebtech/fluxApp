import { fireEvent, render } from "@testing-library/react-native";
import CreateNewPassword from "../src/components/CrateNewPassword";
import { AnimatedKeyboardOptions } from "react-native-reanimated";

jest.mock("react-native-vector-icons/FontAwesome", () => () => <></>)
jest.mock("react-native-vector-icons/AntDesign", () => () => <></>)
jest.mock("react-native-vector-icons/Feather", () => () => <></>)
jest.mock("react-native-vector-icons/EvilIcons", () => () => <></>)
jest.mock("@react-navigation/native", () => {
    const activeNavigation = jest.requireActual("@react-navigation/native");
    const { View: MockView } = require("react-native");
    return {
        ...activeNavigation,
        NavigationContainer: () => <MockView />,
    };
})
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
        GestureHandlerRootView: () => <MockView /> 
    };
});
const props={
    navigation:{
        navigate:jest.fn(),
        goBack:jest.fn()
    }
}


describe("create PAssword Compoennt",()=>{
    test("go back", () => {
        const { getByTestId } = render(<CreateNewPassword {...props} />)
        // const goback = getByTestId("goback")
        // fireEvent.press(goback)
        // expect(props.navigation.goBack).toBeCalled()
    })
    // test("go back", () => {
    //     const { getByTestId } = render(<CreateNewPassword {...props} />)
    //     const navigatetoverfication = getByTestId("navigatetoverfication")
    //     const input = getByTestId("input0")
    //     input.props.onChangeText("text")
    //     const input1 = getByTestId("input1")
    //     input1.props.onChangeText("text")
    //     fireEvent.press(navigatetoverfication)
    //     expect(props.navigation.navigate).toBeCalledWith("verfication")
    // })
    // //
    // test("text input test with index 0", () => {
    //     const { getByTestId } = render(<CreateNewPassword {...props} />)
    //     const input = getByTestId("input0")
    //     input.props.onChangeText("text")
    // })
    // test("text input test with index 1", () => {
    //     const { getByTestId } = render(<CreateNewPassword {...props} />)
    //     const input1 = getByTestId("input1")
    //     input1.props.onChangeText("text")
    // })
    // // 
    // test("FlatList button test", () => {
    //     const { getByTestId } = render(<CreateNewPassword {...props} />)
    //     const eyebutton = getByTestId("eyebutton0")
    //     // 
    //     fireEvent.press(eyebutton)
    //     const eyebutton1 = getByTestId("eyebutton1")
    //     fireEvent.press(eyebutton1)
    //     // const eyeicon = getByTestId("eyeicon0")

    // })
    // test("FlatList eyeIcons test test", () => {
    //     const { getByTestId } = render(<CreateNewPassword {...props} />)
    //     const eyebutton = getByTestId("eyebutton0")
    //     // 
    //     fireEvent.press(eyebutton)
    //     const eyebutton1 = getByTestId("eyebutton1")
    //     fireEvent.press(eyebutton1)
    //     const input = getByTestId("input0")
    //     input.props.onChangeText("text")
    //     const input1 = getByTestId("input1")
    //     input1.props.onChangeText("text")
    //     // // const eyeicon = getByTestId("eyeicon0")
    //     // console.log(eyebutton.props.children)
    // })
})