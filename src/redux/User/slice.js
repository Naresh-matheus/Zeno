import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: null,
  theme: "blue",
  colorBlindness: "Padrão",
  blockedResources: {
    cash: false,
    organizer: false,
    finance: false,
    stock: false,
    agenda: false,
    calendar: false,
    service: false,
  },
  userData: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.login = true;
    },
    logout: (state) => {
      state.login = null;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setColorBlindness: (state, action) => {
      state.colorBlindness = action.payload;
    },
    toggleBlockedResource: (state, action) => {
      const { resource, blocked } = action.payload;
      state.blockedResources[resource] = blocked;
    },
    userData: (state,action) =>{
      state.userData = action.payload;
      
    }
  },
});

export const { login, logout, setTheme, setColorBlindness, toggleBlockedResource, userData } = userSlice.actions;

export default userSlice.reducer;