// 7.29 💖
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import GithubProfileInfo from '../components/GithubProfileInfo';
import GithubUsernameForm from '../components/GithubUsernameForm';
import { RootState } from '../modules';
import { getUserProfileThunk } from '../modules/github';
// 8.1 추가 - error 뜨던거 수정
import type {} from 'redux-thunk/extend-redux';

const GithubProfileLoader = () => {
    const { data, loading, error } = useSelector((state: RootState) => state.github.userProfile);
    const dispatch = useDispatch();

    const onSubmitUsername = (username: string) => {
        dispatch(getUserProfileThunk(username));
    }
    return (
        <>
            <GithubUsernameForm onSubmitUsername={onSubmitUsername}/>
            {loading && <p>로딩중...</p>}   
            {/* 로딩이 true면 */}
            {error && <p>에러발생...</p>}
            {data && <GithubProfileInfo bio={data.bio}
            blog={data.blog}
            // name={data.name}     //name이 null값이라서 안나와서
            // name={data.login}    //이렇게 name값에 login의 값을 넣어줘도 된다!! --> GithubProfileInfo.tsx에서 props에 name을 넣어주고 / props의 타입도 name의 타입을 지정해주면 된다!
            login={data.login}
            thumbnail={data.avatar_url}
            />}   
        </>
    );
};

export default GithubProfileLoader;