import { act, fireEvent, render } from "@testing-library/react-native";
import SignUp from "../src/components/SignUp";


jest.mock("react-native-vector-icons/FontAwesome", () => () => <></>)
jest.mock("react-native-vector-icons/AntDesign", () => () => <></>)
jest.mock("react-native-vector-icons/Feather", () => () => <></>)
jest.mock("react-native-vector-icons/EvilIcons", () => () => <></>)
const props={
    navigation:{
        navigate:jest.fn()
    }
}
jest.mock("@react-native-firebase/auth",()=>()=>({
    createUserWithEmailAndPassword:jest.fn()
    .mockImplementation((...args)=>Promise.resolve(()=>{}))
  }))
  jest.mock("@react-native-google-signin/google-signin",()=>({
    GoogleSignin:jest.fn()
  }))
  jest.mock("@invertase/react-native-apple-authentication",()=>({
    appleAuth:jest.fn().mockImplementation((...args)=>Promise.resolve({}))
  }))
describe("Sign up complete",()=>{
    test("chang text input onchage",()=>{
        const {getByTestId}=render(<SignUp {...props}/>)
        for(let i=0;i<4;i++){
            const nameInput=getByTestId("input"+i)
            nameInput.props.onChangeText("text",i)
        }
    })
    test("chang text input onchage Email",()=>{
        const {getByTestId}=render(<SignUp {...props}/>)
        for(let i=0;i<4;i++){
            const nameInput=getByTestId("input"+i)
            if(i==0)
            nameInput.props.onChangeText("text",i)
            else if(i==1)
            nameInput.props.onChangeText("text@gmail.com",i)
            else
            nameInput.props.onChangeText("Sunnapu@45",i)  
        }
        const signup=getByTestId("signup")
        fireEvent.press(signup)
        
    })
    test("chang text input onchage",()=>{
        const {getByTestId}=render(<SignUp {...props}/>)
        const signup=getByTestId("signup")
        for(let i=0;i<4;i++){
            fireEvent.press(signup)
            const nameInput=getByTestId("input"+i)
            if(i==0)
            nameInput.props.onChangeText("text",i)
            else if(i==1)
            nameInput.props.onChangeText("text@gmail.com",i)
            else
            nameInput.props.onChangeText("Sunnapu@45",i)  
        }
        fireEvent.press(signup)
        
    })
    //
    test("navigatetosignin", () => {
        const { getByTestId } = render(<SignUp {...props} />)
        const navigatetosignin = getByTestId("navigatetosignin")
        fireEvent.press(navigatetosignin)
        expect(props.navigation.navigate).toBeCalledWith("signin")

    })
   test("google compoents ",()=>{
    const {getByTestId}=render(<SignUp {...props}/>)
    const appleToken=getByTestId("appleToken")
    act(()=>{

        fireEvent.press(appleToken)
    })
   })
})