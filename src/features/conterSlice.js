import { createSlice } from "@reduxjs/toolkit";


const initialState={
    count1:0,
    value:true,
    cartList:[]
}


    const counterSlice = createSlice({
        name:"counter",
        initialState,
        reducers:{
            

            addToCart:(state ,action)=>{

            const itemExist = state.cartList.find((item) => item.id===action.payload.id)
            console.log(itemExist, "Item");
            
                if(itemExist){

                            state.cartList.forEach((item) => {
                    console.log("item", item?.id);
                if (item?.id === action.payload.id) {
                    item.count++;
                }
                });

                    
                }else{
                    state.cartList.push({
                        ...action.payload,
                        count:1,
                    

        
            
          })    

        }
  

        },

        increment: (state, action) => {

            
            state.cartList.forEach((item) => {
                console.log("item", item?.id);
               if (item?.id === action.payload) {
                  item.count++;
               }})
            // state.cartList.forEach((item) => {
            //     console.log("item", item?.id);
            //    if (item?.id === productID) {
            //       item.count++;
            //    }
            // });
         }, 

        decrement:(state,action)=>{
              state.cartList.forEach((item)=>{
                if(item?.id==action.payload){
                    item.count--;
                }
              })
             
        },
        // change:(state,action)=>{
        //     state.value=!state.value
        //     console.log(state.value);
        // }

        


    }




})





export const {increment}=counterSlice.actions
export const {decrement}=counterSlice.actions
export const {change}=counterSlice.actions
export const {addToCart}=counterSlice.actions
export default counterSlice.reducer