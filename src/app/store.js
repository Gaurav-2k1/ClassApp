import { configureStore } from "@reduxjs/toolkit";
import subjectSlice from "../features/subjectSlice";


export const store = configureStore({
    reducer: {
        subject: subjectSlice
    }
})