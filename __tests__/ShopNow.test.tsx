import { fireEvent, render } from "@testing-library/react-native";
import ShopNow from "../src/components/ShopNow";
import Carousel,{Pagination} from "react-native-snap-carousel";

const props={
    navigation:{
        navigate:jest.fn()
    }
}

const {View:MockView}=require("react-native")
// jest.mock('react-native-snap-carousel', () => {
//   const RealCarousel = jest.requireActual('react-native-snap-carousel');
//   const RealPagination = RealCarousel.Pagination;

// return {
//   __esModule: true,
//   default: (props:any) => <RealCarousel {...props} />,
//   Pagination: (props:any) => <RealPagination {...props} />
// };
// });
jest.mock("react-native-snap-carousel",()=>({
default:()=>()=><></>,
Pagination:()=>()=><></>
}))
describe("shopNow component",()=>{
    test("rendering component",()=>{
        const {getByTestId}=render(<ShopNow {...props}/>)
        const signup=getByTestId('signup')
        fireEvent.press(signup)
    })
})