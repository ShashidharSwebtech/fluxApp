import { act, render } from "@testing-library/react-native";
import MyDrawer from "../src/components/BottomTabs/MyDrawer";

import { DrawerContentComponentProps } from "@react-navigation/drawer";


// 
jest.mock("react-native-vector-icons/FontAwesome6",()=>()=><></>)
jest.mock("react-native-vector-icons/AntDesign",()=>()=><></>)
jest.mock("react-native-vector-icons/Feather",()=>()=><></>)
jest.mock("react-native-vector-icons/FontAwesome",()=>()=><></>)


const {View:MockView}=require("react-native")
jest.mock("@react-navigation/drawer",()=>({
    createDrawerNavigator:()=>({
        Navigator:()=><></>,
        Screen:()=><></>,
    })
}))

describe("MyDrqwer Component",()=>{
    test("render",()=>{
        const {getByText,getByTestId}=render(<MyDrawer/>)
        const drawer=getByTestId("drawer")
        act(()=>{
         drawer.props.children.props.drawerContent()
        })
    })
})