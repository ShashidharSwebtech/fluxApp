import { fireEvent, render } from "@testing-library/react-native";
import SearchFilter from "../src/components/SearchFilter";
import { Provider } from "react-redux";
import store from "../src/store/Store";



jest.mock("react-native-vector-icons/FontAwesome6",()=>()=><></>)
jest.mock("react-native-vector-icons/FontAwesome",()=>()=><></>)
jest.mock("react-native-vector-icons/AntDesign",()=>()=><></>)
jest.mock("react-native-vector-icons/Feather",()=>()=><></>)


const Props={
    navigation:{
        goBack:jest.fn()
    },
    history:[],
    addToSearchHistory: jest.fn(),
    removeFromSearchHistory:  jest.fn(),
    deleteSearchHistory:  jest.fn()
}


describe("SearchFilter Component",()=>{
test("go back",()=>{
    const {getByTestId}=render(<Provider store={store}>
        <SearchFilter {...Props}/>
        </Provider>)
    const goback=getByTestId("goback")
    fireEvent.press(goback)
    expect(Props.navigation.goBack).toHaveBeenCalled()
})
test("input text test",()=>{
    const {getByTestId}=render(<Provider store={store}>
        <SearchFilter {...Props}/>
        </Provider>)
    const textinput=getByTestId("search_input")
   textinput.props.onChangeText("text")
//    fireEvent.changeText(textinput,"text")
   expect(textinput.props.value).toBe("text")
})
test("Add toSearch History",()=>{
    const {getByTestId}=render(<Provider store={store}>
        <SearchFilter {...Props}/>
        </Provider>)
    const textinput=getByTestId("search_input")
    const addHistory=getByTestId('add_to_search_history')
    fireEvent.changeText(textinput,"text")
    fireEvent.press(addHistory)
    const history=store.getState().search.history;
    expect(history[history.length-1]).toBe("text")

})
test("Remove Element from Search History",()=>{
    const {getByTestId}=render(<Provider store={store}>
        <SearchFilter {...Props}/>
        </Provider>)
    const remove=getByTestId("remove0")
    const itematindex0=store.getState().search.history[0];
   
    fireEvent.press(remove)
    expect(store.getState().search.history[0]!==itematindex0).toBeTruthy()

})
test("Delete all Search History",()=>{
    const {getByTestId}=render(<Provider store={store}>
        <SearchFilter {...Props}/>
        </Provider>)
    const deleteAll=getByTestId("delete-all")
    fireEvent.press(deleteAll)
    const HistoryAfter=store.getState().search.history;
    expect(HistoryAfter.length).toBe(0)

})
})