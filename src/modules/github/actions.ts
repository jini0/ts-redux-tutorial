// 7.29 💖github 서버 사용자정보가져와서 할거임💖
import { GithubProfile } from "../../api/github";
import { AxiosError } from "axios";
// import { deprecated } from "typesafe-actions";
// const { createStandardAction } = deprecated;
import { createAsyncAction } from "typesafe-actions";

export const GET_USER_PROFILE = 'github/GET_USER_PROFILE';
export const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR';

// 액션 생성 함수
// export const getUserProfile = createStandardAction(GET_USER_PROFILE)();
// export const getUserProfileSuccess = createStandardAction(GET_USER_PROFILE_SUCCESS)<GithubProfile>();
// export const getUserProfileError = createStandardAction(GET_USER_PROFILE_ERROR)<AxiosError>();

//utill함수 사용
//이렇게 쓰나 위에처럼 쓰나 똑같다!
export const getUserProfileAsync = createAsyncAction(
    GET_USER_PROFILE,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_ERROR
)<undefined, GithubProfile, AxiosError>();
