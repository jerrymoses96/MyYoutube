import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
  name: "app",
  initialState: {
    IsMenuOpen:true,
  },
  reducers:{
    ToggleMenu:(state)=>{
        state.IsMenuOpen = !state.IsMenuOpen;
    },
    RemoveMenu:(state)=>{
        state.IsMenuOpen=false;
    },
  }

});

export const{ToggleMenu,RemoveMenu} = AppSlice.actions; 
export default AppSlice.reducer;
