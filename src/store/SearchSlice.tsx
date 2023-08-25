import { createSlice } from "@reduxjs/toolkit";
export const clothsData = [    
    {        
        id:1,        
        title:'Jacket',        
        items:'128 Items',    
    },    
    {        
        id:2,        
        title:'Skirts',        
        items:'40 Items',    
    },    
    {        
        id:3,        
        title:'Dresses',        
        items:'36 Items',    
    },    
    {        
        id:4,        
        title:'Sweaters',        
        items:'24 Items',    
    } ,    
    {       
         id:5,       
          title:'Jeans',        
          items:'14 Items',    
        },    
        {        
            id:6,        
            title:'T-shirts',        
            items:'12 Items',    
        },    
        {        
            id:7,        
            title:'Pants',        
            items:'9 Items',    
        },]


export interface searchInitState{
    history:string[],
    clothsData:{
        id:number,
        title:string,
        items:string
    }[]
}
const state:searchInitState={
    history:["Sunglasses","Sweater","Hoodie"],
    clothsData:clothsData
}
const searchSlice=createSlice({
    name:"slice",
    initialState:state,
    reducers:{
        addToSearchHistory:(state,action:{payload:string,type:string})=>{
          
            state.history=[...state.history,action.payload]
        },
        removeFromSearchHistory:(state,action)=>{
            state.history=state.history.filter((item,index)=>index!=action.payload)
        },
        deleteSearchHistory:(state)=>{
            state.history=[]
        }
    },
})

export const {addToSearchHistory,removeFromSearchHistory,deleteSearchHistory}=searchSlice.actions;
export default searchSlice.reducer