import { render } from "@testing-library/react-native";
import Home from "../src/components/BottomTabs/Home";
import Header from "../src/common/Header";
jest.mock("react-native-vector-icons/FontAwesome", () => () => <></>)
jest.mock("react-native-vector-icons/AntDesign", () => () => <></>)
jest.mock("react-native-vector-icons/Feather", () => () => <></>)
jest.mock("react-native-vector-icons/EvilIcons", () => () => <></>)
jest.mock("react-native-vector-icons/MaterialCommunityIcons", () => () => <></>)
jest.mock("react-native-vector-icons/Octicons", () => () => <></>)
jest.mock("react-native-vector-icons/SimpleLineIcons", () => () => <></>)
jest.mock("react-native-vector-icons/Ionicons", () => () => <></>)
jest.mock("react-native-vector-icons/FontAwesome6", () => () => <></>)
const header_Props = {
    title: "home"
}
describe("Home compoennt", () => {

    test("rendering Header", () => {
        render(<Header title="home" />)
    })
    test("render", () => {
        render(<Home />)
    })

})