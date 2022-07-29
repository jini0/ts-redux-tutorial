// 7.29 💜💛나눠보기 - 파일을 조각조각내서!💛💜  --> modules폴더의 todos.ts를 조각조각내기
import { ActionType } from "typesafe-actions";
import * as actions from "./actions";               // * : 내보내는 애를 다 보낼건데 / as actions : as 뒤에는 별칭!! --> actions라고 부르겠다

// 모든 액션 객체들에 대한 타입준비
// 함수의 리턴타입을 추론
// 💛같은 파일이 아니라서 내보내야하니까 export 추가
export type TodosAction = ActionType<typeof actions>

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