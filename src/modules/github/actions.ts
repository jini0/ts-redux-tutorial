// 7.29 πgithub μλ² μ¬μ©μμ λ³΄κ°μ Έμμ ν κ±°μπ
import { GithubProfile } from "../../api/github";
import { AxiosError } from "axios";
// import { deprecated } from "typesafe-actions";
// const { createStandardAction } = deprecated;
import { createAsyncAction } from "typesafe-actions";

export const GET_USER_PROFILE = 'github/GET_USER_PROFILE';
export const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR';

// μ‘μ μμ± ν¨μ
// export const getUserProfile = createStandardAction(GET_USER_PROFILE)();
// export const getUserProfileSuccess = createStandardAction(GET_USER_PROFILE_SUCCESS)<GithubProfile>();
// export const getUserProfileError = createStandardAction(GET_USER_PROFILE_ERROR)<AxiosError>();

//utillν¨μ μ¬μ©
//μ΄λ κ² μ°λ μμμ²λΌ μ°λ λκ°λ€!
export const getUserProfileAsync = createAsyncAction(
    GET_USER_PROFILE,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_ERROR
)<undefined, GithubProfile, AxiosError>();
