// 7.29 💖미들웨어 thunk 이용 / 깃허브 사용자정보이용💖
import { createReducer } from "typesafe-actions";
import { GithubState, GithubAction } from "./types";
import { GET_USER_PROFILE, GET_USER_PROFILE_SUCCESS, GET_USER_PROFILE_ERROR } from "./actions";

//초기값 설정
const initialState: GithubState = {
    userProfile: {
        loading: false,
        error: null,
        data: null
    }
}

const github = createReducer<GithubState, GithubAction>(initialState, {
    [GET_USER_PROFILE]: state => ({
        ...state,
        userProfile: {
            loading: true,
            error: null,
            data: null
        }
    }),
    [GET_USER_PROFILE_SUCCESS]: (state, action) => ({           //전달해줄 값이 있는 애들은 action도 같이 전달
        ...state,
        userProfile: {
            loading: false,
            error: null,
            data: action.payload
        }
    }),
    [GET_USER_PROFILE_ERROR]: (state, action) => ({           //전달해줄 값이 있는 애들은 action도 같이 전달
        ...state,
        userProfile: {
            loading: false,
            error: action.payload,
            data: null
        }
    })
})

export default github;