// 7.29 ๐๐๋๋ ๋ณด๊ธฐ - ํ์ผ์ ์กฐ๊ฐ์กฐ๊ฐ๋ด์!๐๐  --> modulesํด๋์ todos.ts์์ ๊ฐ์ ธ์์ ์กฐ๊ฐ์กฐ๊ฐ๋ด๊ธฐ
import { deprecated } from "typesafe-actions";
const { createStandardAction } = deprecated;

// โ์ก์ํ์ ์ ์ธ
// ๐๊ฐ์ ํ์ผ์ด ์๋๋ผ์ ๋ด๋ณด๋ด์ผํ๋๊น export ์ถ๊ฐ
export const ADD_TODO = 'todos/ADD_TODO';
export const TOGGLE_TODO = 'todos/TOGGLE_TODO';
export const REMOVE_TODO = 'todos/REMOVE_TODO';

let nextId = 1;
// โ์ก์ ์์ฑ ํจ์
export const addTodo: any = (text: string) => ({            //text๊ฐ์ ๋ฐ์์ ๋ฃ์ด์ค๊ฑฐ์ -> text ๋ณ์๋ง ๋ฃ์ผ๋ฉด ์๋จ typescript๋ผ์ ํ์์ ์ง์ ํด์ค์ผํจ!!!! (ํ์์ง์ ์ํด์ฃผ๋ฉด error๊ฐ ๋ธ)
    type:ADD_TODO,           //ํจ์ addTodo๊ฐ ์คํ๋  ๋ ๋ฆฌํด๋๋ ์ ๋ค
    payload: {
        id: nextId++,
        text
    }
})
export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();
export const removeTodo = createStandardAction(REMOVE_TODO)<number>();