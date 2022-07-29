// 7.29 💜💛나눠보기 - 파일을 조각조각내서!💛💜  --> modules폴더의 todos.ts에서 가져와서 조각조각내기
import { deprecated } from "typesafe-actions";
const { createStandardAction } = deprecated;

// ✔액션타입 선언
// 💛같은 파일이 아니라서 내보내야하니까 export 추가
export const ADD_TODO = 'todos/ADD_TODO';
export const TOGGLE_TODO = 'todos/TOGGLE_TODO';
export const REMOVE_TODO = 'todos/REMOVE_TODO';

let nextId = 1;
// ✔액션 생성 함수
export const addTodo: any = (text: string) => ({            //text값을 받아서 넣어줄거임 -> text 변수만 넣으면 안됨 typescript라서 타입을 지정해줘야함!!!! (타입지정안해주면 error가 뜸)
    type:ADD_TODO,           //함수 addTodo가 실행될 때 리턴되는 애들
    payload: {
        id: nextId++,
        text
    }
})
export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();
export const removeTodo = createStandardAction(REMOVE_TODO)<number>();