import { fireEvent, render } from "@testing-library/react-native";
import SignIn from "../src/components/SignIn";
const props={
    navigation:{
        navigate:jest.fn()
    }
}
jest.mock("react-native-vector-icons/AntDesign", () => () => <></>)
jest.mock("react-native-vector-icons/EvilIcons", () => () => <></>)

jest.mock("@react-native-firebase/auth",()=>()=>({
    signInWithEmailAndPassword:jest.fn()
    .mockImplementation((...args)=>Promise.resolve(()=>{}))
  }))
describe("Sign In component",()=>{
    test("sign up test",()=>{
       const {getByTestId}= render(<SignIn {...props}/>)
       const signup=getByTestId("signup")
       fireEvent.press(signup)
       expect(props.navigation.navigate).toBeCalledWith("signup")
    })
    test("sign up test",()=>{
        const {getByTestId}= render(<SignIn {...props}/>)
        const forgot=getByTestId("forgot")
        fireEvent.press(forgot)
        expect(props.navigation.navigate).toBeCalledWith("forgot")
     })
     test("input 0",()=>{
        const {getByTestId}= render(<SignIn {...props}/>)
        const input0=getByTestId("input0")
        input0.props.onChangeText("text",0)
       expect(input0.props.value).toBe("text")
     })
     test("input 1",()=>{
        const {getByTestId}= render(<SignIn {...props}/>)
        const input1=getByTestId("input1")
        input1.props.onChangeText("text",1)
       expect(input1.props.value).toBe("text")
     })
     test("cheking sign in functionality",()=>{
        const {getByTestId}= render(<SignIn {...props}/>)
        const input0=getByTestId("input0")
        input0.props.onChangeText("text",0)

        const input1=getByTestId("input1")
        input1.props.onChangeText("text",1)

        const signinBtn=getByTestId("signin")
        fireEvent.press(signinBtn)

    })
})