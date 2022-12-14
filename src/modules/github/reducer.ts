// 7.29 ๐๋ฏธ๋ค์จ์ด thunk ์ด์ฉ / ๊นํ๋ธ ์ฌ์ฉ์์ ๋ณด์ด์ฉ๐
import { createReducer } from "typesafe-actions";
import { GithubState, GithubAction } from "./types";
import { GET_USER_PROFILE, GET_USER_PROFILE_SUCCESS, GET_USER_PROFILE_ERROR } from "./actions";

//์ด๊ธฐ๊ฐ ์ค์ 
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
    [GET_USER_PROFILE_SUCCESS]: (state, action) => ({           //์ ๋ฌํด์ค ๊ฐ์ด ์๋ ์ ๋ค์ action๋ ๊ฐ์ด ์ ๋ฌ
        ...state,
        userProfile: {
            loading: false,
            error: null,
            data: action.payload
        }
    }),
    [GET_USER_PROFILE_ERROR]: (state, action) => ({           //์ ๋ฌํด์ค ๊ฐ์ด ์๋ ์ ๋ค์ action๋ ๊ฐ์ด ์ ๋ฌ
        ...state,
        userProfile: {
            loading: false,
            error: action.payload,
            data: null
        }
    })
})

export default github;