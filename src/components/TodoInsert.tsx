// 7.29 redux-typescript -- Todo!
import React, { FormEvent, useState } from 'react';

//props로 전달받을 데이터 타입을 지정
type TodoInsertProps = {
    onInsert: (text:string) => void;
}
//props로 전달받을 때, 어떤 타입인지도 정의해줘야지 오류가 안뜸!!!
//인풋에 입력되는 값은 useState로 관리해주면됨!
const TodoInsert = ({onInsert} : TodoInsertProps) => {
    const [value, setValue] = useState('');
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {           //e event의 값을 받을건데 type을 지정해줘야함!
        setValue(e.target.value);
    }
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        onInsert(value);            //value값을 넘겨주면 될거임
        setValue("");               //다시 빈문자열로 변경
    }
    return (
        <div>
            {/* form의 onSubmit에 마우스를 갖다대면 --> 끝에 React.FormEventHandler<HTMLFormElement> 이런게 있음
            저기에서 FormEvent만 따로 빼와서 위에 onSubmit이벤트의 e에 타입을 적어준다! */}
            <form onSubmit={onSubmit}>
                {/* input의 onChange에 마우스를 갖다대면 --> 끝에 React.ChangeEventHandler<HTMLInputElement> 이런게 있음
                handler를 쓰고, 제너럴로 타입을 <HTMLInputElement>타입을 지정해줄거임 ----> 위에  e의 타입을 그대로 적어줌(Handler 글자만 빼고 복사해서 넣어줌) */}
                <input onChange={onChange} value={value} placeholder="할 일을 입력하세요" />
                <button type="submit">등록</button>
            </form>
        </div>
    );
};

export default TodoInsert;