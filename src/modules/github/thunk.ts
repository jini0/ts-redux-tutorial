// 7.29 πλ―Έλ€μ¨μ΄ thunk μ΄μ© / κΉνλΈ μ¬μ©μμ λ³΄μ΄μ©π
import { getUserProfileAsync } from './actions';
import { GithubAction } from './types';
import { getUserProfile } from '../../api/github';
import { RootState } from '..';
import { ThunkAction } from 'redux-thunk';

//ThunkAction μ λ€λ¦­
//1. TReturnType : thunkν¨μμμ λ°ννλ κ°μ νμμ μ€μ 
//2. TState : μ€ν μ΄μ μνμ λν νμ
//3. TEXTAThunkArg : redux-thunk λ―Έλ€μ¨μ΄μ Extra ArgumentμΌ γ£νμμ μ§μ 
//4. TBasicAction : dispatchν  μ μλ μ‘μλ€μ νμμ μ€μ 
export function getUserProfileThunk(username: string) : ThunkAction<void, RootState, null, GithubAction> {          //μ λλ¦­ λ£μ΄μ£ΌκΈ°!!!
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