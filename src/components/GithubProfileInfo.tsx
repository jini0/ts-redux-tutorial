// 7.29 💖
import React from 'react';

//props 타입지정
type GithubProfileInfoProps = {
    // name: string;
    login: string;
    thumbnail: string;
    bio: string;
    blog: string;
}
// 8.1 https://api.github.com/users/jini0 를 확인해보고 값이 null이 아닌걸 props에 넣어주고 뜨는지 확인해보자!!! 
const GithubProfileInfo = ({ login, thumbnail, bio, blog }: GithubProfileInfoProps) => {
    return (
        <div>
            <div>
                <img src={thumbnail} alt="img" />
                <div>{login}</div>
            </div>    
            <p>{bio}</p>
            <div>{blog !== '' && <a href={blog}>블로그</a>}</div>
        </div>
    );
};

export default GithubProfileInfo;