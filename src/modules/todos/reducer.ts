// 7.29 ๐๐๋๋ ๋ณด๊ธฐ - ํ์ผ์ ์กฐ๊ฐ์กฐ๊ฐ๋ด์!๐๐  --> modulesํด๋์ todos.ts๋ฅผ ์กฐ๊ฐ์กฐ๊ฐ๋ด๊ธฐ
import { TodoState, TodosAction } from "./types";
import { createReducer } from "typesafe-actions";
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actions';

// โ์ด๊ธฐ์ํ ์ ์ธ
//ํ์๋ค์ ์ฐ์  ๋ค ์ ์ํด๋๊ณ  ์ด๊ธฐ์ํ๋ฅผ ์ ์ธํด์ผํจ
const initialState: TodoState = [];

// ๋ฆฌ๋์ ์์ฑ
const todos = createReducer<TodoState, TodosAction>(initialState, {
    [ADD_TODO]: (state, action) => {
        return state.concat({
            ...action.payload,
            done:false
        })
    },
    [TOGGLE_TODO]: (state, { payload: id }) => 
    state.map(todo => (todo.id === id ? { ...todo, done: ! todo.done } : todo)),
    [REMOVE_TODO]: (state,{ payload: id }) => 
    state.filter(todo => todo.id !== id)
})
export default todos;