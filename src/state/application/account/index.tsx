import { createSlice } from "@reduxjs/toolkit";

export enum accountScreens {
  ADDDETAILS,
  VERIFYEMAIL,
  PAYMETHOD,
}

const initialState = {
    activeBar: accountScreens.ADDDETAILS
  };
  

  const accountPagesSlice = createSlice({
    name: "accountUi",
    initialState,
    reducers: {
      setActiveAccountScreen(state, action) {
        state.activeBar = action.payload;
      },
    },
  });
  

  export const { setActiveAccountScreen} =
  accountPagesSlice.actions;
export default accountPagesSlice.reducer;
