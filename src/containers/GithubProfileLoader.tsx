// 7.29 ๐
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import GithubProfileInfo from '../components/GithubProfileInfo';
import GithubUsernameForm from '../components/GithubUsernameForm';
import { RootState } from '../modules';
import { getUserProfileThunk } from '../modules/github';
// 8.1 ์ถ๊ฐ - error ๋จ๋๊ฑฐ ์์ 
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
            {loading && <p>๋ก๋ฉ์ค...</p>}   
            {/* ๋ก๋ฉ์ด true๋ฉด */}
            {error && <p>์๋ฌ๋ฐ์...</p>}
            {data && <GithubProfileInfo bio={data.bio}
            blog={data.blog}
            // name={data.name}     //name์ด null๊ฐ์ด๋ผ์ ์๋์์
            // name={data.login}    //์ด๋ ๊ฒ name๊ฐ์ login์ ๊ฐ์ ๋ฃ์ด์ค๋ ๋๋ค!! --> GithubProfileInfo.tsx์์ props์ name์ ๋ฃ์ด์ฃผ๊ณ  / props์ ํ์๋ name์ ํ์์ ์ง์ ํด์ฃผ๋ฉด ๋๋ค!
            login={data.login}
            thumbnail={data.avatar_url}
            />}   
        </>
    );
};

export default GithubProfileLoader;