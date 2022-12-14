// 7.29 ๐งก1. ๋งจ์ฒ์์ ๋ฆฌ๋์ค๋ก ํ๊ฑฐ๐งก + ๐2.๋ฆฌํฉํ ๋ง๐
//๐render ๋๋ํ๋ ์ ๊ฐ ์์ผ๋ฉด ํ์ฅ์๋ช์ .tsx๊ฐ ์๋๊ณ  .ts๋ผ๊ณ  ํด๋ ๋๋ค!! ---> ๊ทธ๋์ modulesํด๋ ๋ด์๋ ํ์ฅ์๋ช ๋ค .ts ํด๋ ๋จ!!!๐
// ์ก์ ํ์ ์ ์ธ, ์ก์ ์์ฑ ํจ์, ์ด๊ธฐ๊ฐ, ๋ฆฌ๋์
// ํ  ์ผ ์ถ๊ฐ, ํ  ์ผ ์ ๊ฑฐ, ํ  ์ผ ์ฒดํฌ

//๐3. ๋๋ ๋ณผ๊ฑฐ์๐ - action.ts/ index.ts / reducer.ts / types.ts  --> 4๊ฐ์ ํ์ผ๋ก ๋ง๋ค๊ฑฐ์!
// ํ์ผ ์ด๋ฆ์ todos.ts -> todos_sample.ts

//๐2.๋ฆฌํฉํ ๋ง๐
import { ActionType, createReducer, deprecated } from "typesafe-actions";
const { createStandardAction } = deprecated;

// โ์ก์ํ์ ์ ์ธ
//๐2.๋ฆฌํฉํ ๋ง๐
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';
// 1.
// const ADD_TODO = 'todos/ADD_TODO' as const;
// const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
// const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

let nextId = 1;
// โ์ก์ ์์ฑ ํจ์
// ๋ค๋ฅธ ๊ณณ์๋ ์จ์ผํด์ export ๋ด๋ณด๋ด์ฃผ๊ธฐ!
//๐2.๋ฆฌํฉํ ๋ง๐
export const addTodo: any = (text: string) => ({            //text๊ฐ์ ๋ฐ์์ ๋ฃ์ด์ค๊ฑฐ์ -> text ๋ณ์๋ง ๋ฃ์ผ๋ฉด ์๋จ typescript๋ผ์ ํ์์ ์ง์ ํด์ค์ผํจ!!!! (ํ์์ง์ ์ํด์ฃผ๋ฉด error๊ฐ ๋ธ)
    type:ADD_TODO,           //ํจ์ addTodo๊ฐ ์คํ๋  ๋ ๋ฆฌํด๋๋ ์ ๋ค
    payload: {
        id: nextId++,
        text
    }
})
export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();
export const removeTodo = createStandardAction(REMOVE_TODO)<number>();
// 1.
// export const addTodo = (text: string) => ({            //text๊ฐ์ ๋ฐ์์ ๋ฃ์ด์ค๊ฑฐ์ -> text ๋ณ์๋ง ๋ฃ์ผ๋ฉด ์๋จ typescript๋ผ์ ํ์์ ์ง์ ํด์ค์ผํจ!!!! (ํ์์ง์ ์ํด์ฃผ๋ฉด error๊ฐ ๋ธ)
//     type:ADD_TODO,           //ํจ์ addTodo๊ฐ ์คํ๋  ๋ ๋ฆฌํด๋๋ ์ ๋ค
//     payload: {
//         id: nextId++,
//         text
//     }
// })
// export const toggleTodo = (id:number) => ({
//     type:TOGGLE_TODO,       //ํจ์ toggleTodo๊ฐ ์คํ๋  ๋ ๋ฆฌํด๋๋ ์ ๋ค
//     payload: id
// })
// export const removeTodo = (id:number) => ({
//     type:REMOVE_TODO,       //ํจ์ removeTodo๊ฐ ์คํ๋  ๋ ๋ฆฌํด๋๋ ์ ๋ค
//     payload: id
// })

// * ์ก์ ๊ฐ์ฒด๋ค์ ๋ํ ํ์ ์์ฑ
//๐2.๋ฆฌํฉํ ๋ง๐
const actions = {
    addTodo,
    toggleTodo,
    removeTodo
}
// 1.
// type TodosAction = 
// | ReturnType<typeof addTodo>        //ReturnType: ๋ค์ ์๋ ํจ์(addTodo/toggleTodo/removeTodo)๊ฐ return ํด์ฃผ๋ ํ์์ ๋งํ๋๊ฑฐ!
// | ReturnType<typeof toggleTodo>
// | ReturnType<typeof removeTodo>

//๐2.๋ฆฌํฉํ ๋ง๐ ์ถ๊ฐํ๊ธฐ
// ๋ชจ๋  ์ก์ ๊ฐ์ฒด๋ค์ ๋ํ ํ์์ค๋น
// ํจ์์ ๋ฆฌํดํ์์ ์ถ๋ก 
type TodosAction = ActionType<typeof actions>

// * ์ํ์์ ์ฌ์ฉ ํ  ์ผ ํญ๋ชฉ ๋ฐ์ดํฐ ์ ์
// type: ์ด ๋ณ์์ ์ด๋ค ํ์์ ์ค๊ฑด์ง ํด์ฃผ๋๊ฑฐ์(๊ฐ์ด ์๋๊ณ  ํ์์ ์ ์ํด์ฃผ๋๊ฑฐ)
export type Todo = {
    //id text๊ฐ ์์๊ฑฐ์
    id: number;
    text: string;
    done: boolean;
}

// * ์ด ๋ชจ๋์์ ๊ด๋ฆฌํ  ์ํ ํ์ ์์ฑ
// todoState๋ ํ ์ผ ๋ชฉ๋ก -> ๋ฐฐ์ด --> ๋ฐฐ์ด์์ id text isDone๊ฐ์ ๊ฒ๋ค์ด ๋ค์ด๊ฐ์๋ ๊ฐ์ฒด๊ฐ ๋ค์ด๊ฐ ์์ ๊ฑฐ์!
// --> ๋ฐฐ์ด๋ ํ์์ ์ง์ ํด์ค์ผํจ
export type TodoState = Todo[];    //์ด ๋ฐฐ์ด์ Todoํ์์ [๋ฐฐ์ด]์ด๋ค!!!

// โ์ด๊ธฐ์ํ ์ ์ธ
//ํ์๋ค์ ์ฐ์  ๋ค ์ ์ํด๋๊ณ  ์ด๊ธฐ์ํ๋ฅผ ์ ์ธํด์ผํจ
const initialState: TodoState = [];

// ๋ฆฌ๋์ ์์ฑ
//๐2.๋ฆฌํฉํ ๋ง๐
const todos_sample = createReducer<TodoState, TodosAction>(initialState, {
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
// 1.
// function todos(
//     state: TodoState = initialState,
//     action: TodosAction
// ): TodoState {                      //๋ฆฌํดํ์์ TodoState
//     switch(action.type){            //์ฌ๊ธฐ๊ฐ return
//         case ADD_TODO:
//             return state.concat({
//                 id: action.payload.id,
//                 text: action.payload.text,
//                 done: false
//             });
//         case TOGGLE_TODO:
//             return state.map(todo =>
//                 todo.id === action.payload ? {...todo, done: !todo.done} : todo
//                 )
//         case REMOVE_TODO:
//             return state.filter(todo => todo.id !== action.payload );
//         default:
//             return state;
//     }
// }
// ๋ฆฌ๋์ ํจ์ ๋ด๋ณด๋ด๊ธฐ -> export default
export default todos_sample;