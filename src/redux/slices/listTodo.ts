import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from ".";
import {filteredArray} from "../../components/helper";

interface IState {
  listTodo: any[];
}

const initialState: IState = {
  listTodo: [],
};

const listTodoSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    addNewWork: (state, action: PayloadAction<any>) => {
      state.listTodo = [
        ...state.listTodo,
        action.payload
      ];
    },
    removeWork: (state, action: PayloadAction<any>) => {
      state.listTodo = state.listTodo.filter(item => item.id !== action.payload);
    },
    updateWork: (state, action: PayloadAction<any>) => {
      state.listTodo = state.listTodo?.map(item => {
        if (item.id === action.payload?.id) {
          return action.payload;
        }
        return item;
      });
    },
    removeMultipleWork: (state, action: PayloadAction<any>) => {
      state.listTodo = filteredArray(state.listTodo, action.payload)
    }
  }
});

export const selectListTodo = (state: RootState) => state.listTodo;

export const {addNewWork, removeWork, updateWork, removeMultipleWork} = listTodoSlice.actions;

export default listTodoSlice.reducer;