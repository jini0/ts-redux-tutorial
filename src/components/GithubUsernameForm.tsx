// 7.29 💖💖
import React, { ChangeEvent, FormEvent, useState } from 'react';

type GithubUsernameFormProps = {
    onSubmitUsername: (username: string) => void
}
const GithubUsernameForm = ({ onSubmitUsername }: GithubUsernameFormProps) => {
    const [ input, setInput ] = useState('');

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitUsername(input);
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }
    return (
        <form onSubmit={onSubmit}>
            <input onChange={onChange} value={input} placeholder="github계정명을 입력하세요." />
            <button>조회</button>
        </form>
    );
};

export default GithubUsernameForm;