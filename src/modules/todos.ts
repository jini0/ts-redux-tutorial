// 7.29
//💚render 랜더하는 애가 없으면 확장자명을 .tsx가 아니고 .ts라고 해도 된다!! ---> 그래서 modules폴더 내에는 확장자명 다 .ts 해도 됨!!!💚
// 액션 타입 선언, 액션 생성 함수, 초기값, 리듀서
// 할 일 추가, 할 일 제거, 할 일 체크

// ✔액션타입 선언
const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

let nextId = 1;
// ✔액션 생성 함수
// 다른 곳에도 써야해서 export 내보내주기!
export const addTodo = (text: string) => ({            //text값을 받아서 넣어줄거임 -> text 변수만 넣으면 안됨 typescript라서 타입을 지정해줘야함!!!! (타입지정안해주면 error가 뜸)
    type:ADD_TODO,           //함수 addTodo가 실행될 때 리턴되는 애들
    payload: {
        id: nextId++,
        text
    }
})
export const toggleTodo = (id:number) => ({
    type:TOGGLE_TODO,       //함수 toggleTodo가 실행될 때 리턴되는 애들
    payload: id
})
export const removeTodo = (id:number) => ({
    type:REMOVE_TODO,       //함수 removeTodo가 실행될 때 리턴되는 애들
    payload: id
})

// * 액션 객체들에 대한 타입 작성
type TodosAction = 
| ReturnType<typeof addTodo>        //ReturnType: 뒤에 있는 함수(addTodo/toggleTodo/removeTodo)가 return 해주는 타입을 말하는거!
| ReturnType<typeof toggleTodo>
| ReturnType<typeof removeTodo>

// * 상태에서 사용 할 일 항목 데이터 정의
// type: 이 변수에 어떤 타입을 줄건지 해주는거임(값이 아니고 타입을 정의해주는거)
export type Todo = {
    //id text가 있을거임
    id: number;
    text: string;
    done: boolean;
}

// * 이 모듈에서 관리할 상태 타입 작성
// todoState는 할일 목록 -> 배열 --> 배열안에 id text isDone같은 것들이 들어가있는 객체가 들어가 있을 거임!
// --> 배열도 타입을 지정해줘야함
export type TodoState = Todo[];    //이 배열은 Todo타입의 [배열]이다!!!

// ✔초기상태 선언
//타입들을 우선 다 정의해두고 초기상태를 선언해야함
const initialState: TodoState = [];

// 리듀서 작성
function todos(
    state: TodoState = initialState,
    action: TodosAction
): TodoState {                      //리턴타입은 TodoState
    switch(action.type){            //여기가 return
        case ADD_TODO:
            return state.concat({
                id: action.payload.id,
                text: action.payload.text,
                done: false
            });
        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.payload ? {...todo, done: !todo.done} : todo
                )
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload );
        default:
            return state;
    }
}
// 리듀서 함수 내보내기 -> export default
export default todos;