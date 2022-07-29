// 7.29 💖미들웨어 thunk 이용 / 깃허브 사용자정보이용💖
import { getUserProfileAsync } from './actions';
import { GithubAction } from './types';
import { getUserProfile } from '../../api/github';
import { RootState } from '..';
import { ThunkAction } from 'redux-thunk';

//ThunkAction 제네릭
//1. TReturnType : thunk함수에서 반환하는 값의 타입을 설정
//2. TState : 스토어의 상태에 대한 타입
//3. TEXTAThunkArg : redux-thunk 미들웨어의 Extra Argument으 ㅣ타입을 지정
//4. TBasicAction : dispatch할 수 있는 액션들의 타입을 설정
export function getUserProfileThunk(username: string) : ThunkAction<void, RootState, null, GithubAction> {          //제너릭 넣어주기!!!
    return async dispatch => {
        const { request, success, failure } = getUserProfileAsync;
        dispatch(request());
        try {
            const userProfile = await getUserProfile(username)
            dispatch(success(userProfile))
        } catch (e:any) {
            dispatch(failure(e));
        }
    };
};