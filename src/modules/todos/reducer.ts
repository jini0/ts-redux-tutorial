// 7.29 💜💛나눠보기 - 파일을 조각조각내서!💛💜  --> modules폴더의 todos.ts를 조각조각내기
import { TodoState, TodosAction } from "./types";
import { createReducer } from "typesafe-actions";
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actions';

// ✔초기상태 선언
//타입들을 우선 다 정의해두고 초기상태를 선언해야함
const initialState: TodoState = [];

// 리듀서 작성
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