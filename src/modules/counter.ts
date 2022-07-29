// <모듈리듀서 만들기>   🧡(7.28)-메모장 참고🧡   
//1. 액션타입
//2. 액션생성함수
//3. 초기값
//4. 리듀서 만들기
//💚render 랜더하는 애가 없으면 확장자명을 .tsx가 아니고 .ts라고 해도 된다!! ---> 그래서 modules폴더 내에는 확장자명 다 .ts 해도 됨!!!💚
//💜7.29 - 리팩토링하기(typesafe를 이용해서 간단하게 만들기)💜

// 💜7.29
// https://github.com/piotrwitek/typesafe-actions/issues/143  --> 우리는 v5 (5버전)  / v4(X)
import { ActionType, createReducer, deprecated } from "typesafe-actions";

const { createStandardAction } = deprecated;

//✔액션타입
//-as const를 작성하는 이유
//액션생성 함수를 생성시 매개변수 타입이 string으로 되어있지 않도록 방지
// 💜7.29
const INCREASE = "counter/INCREASE";   
const DECREASE = "counter/DECREASE";  
const INCREASE_BY = "counter/INCREASE_BY";
// 7.28
// const INCREASE = "counter/INCREASE" as const;   // as const를 안해주면 액션생성함수의 increase에 마우스를 갖다대면 type: string으로 되어있음!
// const DECREASE = "counter/DECREASE" as const;   // -> as const를 해줘야지 type: "counter/INCREASE" 로 잘 들어가있음 ~~ (다른거도 마찬가지)
// const INCREASE_BY = "counter/INCREASE_BY" as const;

//✔액션 생성함수 
//액션을 리턴해주는 함수! --> 그냥 액션객체를 넣어주지않고 이 함수를 실행시켜서 리턴해주려고 함수 만듬
// 💜7.29
export const increase = createStandardAction(INCREASE)();
export const decrease = createStandardAction(DECREASE)();
export const increaseBy = createStandardAction(INCREASE_BY)<number>();
// 7.28
// export const increase = () => ({ type: INCREASE });        
// export const decrease = () => ({ type: DECREASE });
// export const increaseBy = (diff: number) => ({ 
//     type: INCREASE_BY,
//     payload: diff
// });

//스테이트의 타입을 지정
type CounterState = {
    count: number;
}

//✔초기상태 생성
const initialState = {
    count: 0
}

//리듀서 액션 타입 지정
//ReturnType<typeof ---->  특정함수의 반환값을 추론
// 💜7.29
const actions = { increase, decrease, increaseBy }
type CounterAction = ActionType<typeof actions>
// 7.28
// type CounterAction = 
// | ReturnType<typeof increase>       //ReturnType : return의 타입을 정해줄 수 있음!  --> const increase = () => ({ type: INCREASE });  --> 뒤에오는 함수가 리턴해주는 아이를 type으로 쓰겠다는 의미!
// | ReturnType<typeof decrease>                                       // --> 그래서 type: INCREASE인 애를 쓰겠다는 의미!!!
// | ReturnType<typeof increaseBy>       

//✔리듀서 만들기
// 리듀서의 내보내기는 -> export default 
// 💜7.29 - createReducer를 통해서 오브젝트맵 형태로 리듀서를 구현
const counter = createReducer<CounterState, CounterAction>(initialState, {
    [INCREASE]: state => ({ count: state.count + 1 }),
    [DECREASE]: state => ({ count: state.count - 1 }),
    [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload })
})
export default counter;
// 7.28
// export default function counter(state:CounterState = initialState, action: CounterAction) : CounterState{          // CounterState이런 타입으로 리턴해줌!
//                 //state의 타입은 CounterState인데 이 값이 지금 초기값으로 들어가있음(initialState로)
//     switch(action.type){
//         case 'counter/INCREASE':
//             return { count: state.count + 1 }; 
//         case 'counter/DECREASE':
//             return { count: state.count - 1 }; 
//         case 'counter/INCREASE_BY':
//             return { count: state.count + action.payload }; 
//         default:
//             return state;
//     }
// }
