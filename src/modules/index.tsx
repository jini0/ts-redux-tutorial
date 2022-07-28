// 7.28 이 파일을 컨테이너컴포넌트에 내보내서 써줄거임
import { combineReducers } from "redux";
import counter from "./counter";

const rootReducer = combineReducers({ counter });
export default rootReducer;

//rootReducer얘를 불러쓸 건데 얘가 리턴해주는 애의 타입을 지정해준거
//타입도 지정해서 내보내주기
//✨나중에 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야하므로 내보내줍니다!!!✨
export type RootState = ReturnType<typeof rootReducer>