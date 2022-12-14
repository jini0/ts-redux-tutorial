// 7.29 ๐๐
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
            <input onChange={onChange} value={input} placeholder="github๊ณ์ ๋ช์ ์๋ ฅํ์ธ์." />
            <button>์กฐํ</button>
        </form>
    );
};

export default GithubUsernameForm;