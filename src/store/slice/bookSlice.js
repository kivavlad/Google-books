import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE_URL, MAX_RESULTS } from "../../config";

const initialState = {
    items: [],
    totalItems: 0,
    loading: false,
    error: null,
}

export const getBooks = createAsyncThunk(
    'books/getBooks',
    async function(data) {
        const response = await fetch(`${API_BASE_URL}/v1/volumes?q=${data.title}+subject:${data.category}&maxResults=${MAX_RESULTS}&startIndex=${data.startIndex}&orderBy=${data.sorting}&key=${process.env.REACT_APP_API_KEY}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json"
            }
        })
    
        return await response.json();
    }
)

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        resetBooks() {
            return initialState
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getBooks.pending, (state) => {
                state.loading = true;
            })
            .addCase(getBooks.rejected, (state, actions) => {
                state.error = actions.error;
                state.loading = false;
            })
            .addCase(getBooks.fulfilled, (state, actions) => {
                const { items, totalItems } = actions.payload;

                if (items) {
                    state.items = state.items.concat(items);
                    state.totalItems = totalItems;
                }
                state.loading = false;
            })
    }
})

export const { resetBooks } = bookSlice.actions;
export default bookSlice.reducer;