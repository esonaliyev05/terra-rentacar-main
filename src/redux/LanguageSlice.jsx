// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   language:"e"
// }


// const languageSlice = createSlice({
//   name:"language",
//   initialState,
//   reducers: {
//     setLanguage: (state , action) => {
//       state.language = action.payload;
//     },
//   },
// });

// export const {setLanguage} = languageSlice.actions;
// export default languageSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

// `initialState` ni `localStorage` dan o‘qish bilan sozlash
const initialState = {
  language: localStorage.getItem("appLanguage") || "en", // Agar localStorage’da qiymat bo‘lmasa, default 'en'
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      try {
        localStorage.setItem("appLanguage", action.payload); // Tilni localStorage ga saqlash
      } catch (e) {
        console.error("localStorage ga yozishda xato:", e); // Xatolik bo‘lsa log qilish
      }
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;