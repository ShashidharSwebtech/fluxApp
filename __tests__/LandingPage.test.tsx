import { fireEvent, render } from "@testing-library/react-native";
import LandingPage from "../src/components/LandingPage";


const props={
    navigation:{
        navigate:jest.fn()
    }
}

describe("landing page",()=>{
    test("rendering",()=>{
        const {getByTestId}=render(<LandingPage {...props}/>)
        const shopnow=getByTestId("shopnow")
        fireEvent.press(shopnow)
        expect(props.navigation.navigate).toHaveBeenCalledWith("shopnow")
    })
})