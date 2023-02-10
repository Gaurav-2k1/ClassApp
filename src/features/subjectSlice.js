import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    subject: null,

};


export const subjectSlice = createSlice({
    name: 'subject',
    initialState,
    reducers: {
        setsubjectInfo: (state, action) => {
            state.subject = action.payload.subject;
        }
    }
});


export const { setsubjectInfo } = subjectSlice.actions;
export const selectChannelId = (state) => state.subject.subject;

export default subjectSlice.reducer;