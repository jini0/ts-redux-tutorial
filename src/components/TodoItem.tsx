// 7.29
// 할일 항목 하나하나 -> TodoItem
import React, { CSSProperties } from 'react';
import { Todo } from '../modules/todos';

//props로 받아올 때, props의 타입을 지정해서 넣어줘야한다!!
//props타입 지정
type TodoItemProps = {
    todo: Todo;                     //modules의 todos.ts에서 export type Todo 해준 Todo 타입을 말하는거임!!(내보내준거를 여기서 사용-> 내보내줬으니 다른곳에서도 사용가능함)
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
}   
                //TodoItem은 항목 하나하나니까 -> todo 
const TodoItem = ({ todo, onToggle, onRemove }: TodoItemProps) => {
    //따로 안만들어도 되고 바로 넣어줘도 되지만, 보기 편하게 하려고!
    const handleToggle = () => onToggle(todo.id)
    const handleRemove = () => onRemove(todo.id)
    //스타일주기
    const textStyle: CSSProperties = {
        textDecoration: todo.done ? 'line-through' : 'none'
    }
    const removeStyle: CSSProperties = {
        color: 'red',
        marginLeft: 8
    }
    return (
        <li>
            {/* style에 마우스를 갖다대면({}안에 아무것도 안적었을 때, (property) ~~~ React.CSSProperties 라고 뜰거임 --> 
            여기서 CSSProperties를 복사해서 textStyle의 타입에 적어주면 관련된게 뜰거임 */}
            <span onClick={handleToggle} style={textStyle}>{todo.text}</span>
            <span onClick={handleRemove} style={removeStyle}>X</span>
        </li>
    );
};

export default TodoItem;