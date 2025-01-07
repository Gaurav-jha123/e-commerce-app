import { createSlice , PayloadAction } from "@reduxjs/toolkit";

interface Book {
    _id: string;
    title : string;
    description : string;
    image : string;
    price : number;
    features : string;
    author : string;
    rating : number;
    pageCount : number;
}

interface BookState{
    books : Book[];
    loading : boolean;
    error: string | null;
}

const initialState : BookState = {
    books : [],
    loading : false,
    error : null,
}

const bookSlice = createSlice({
    name : 'books',
    initialState,
    reducers: {
        fetchBooksStart(state){
            state.loading = true;
        },
        fetchBooksSuccess(state, action : PayloadAction<Book[]>){
            state.books = action.payload;
            state.loading = false;
        },
        fetchBooksFailure(state, action : PayloadAction<string>){
            state.error = action.payload;
            state.loading = false;
        }
    }
});

export const { fetchBooksFailure , fetchBooksStart , fetchBooksSuccess} = bookSlice.actions;
export default bookSlice.reducer;