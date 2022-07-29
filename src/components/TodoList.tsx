// 7.29
import React from 'react';
import { Todo } from '../modules/todos';
import TodoItem from './TodoItem';

//props타입 지정  --값을 넣어주는게 아니고 여기는 이런 타입들이 들어갈거다!의미임
type TodolistProps = {
    todos: Todo[];          //Todo타입의 [배열]이다!
    onToggle: (id:number) => void;
    onRemove: (id:number) => void;
}
                //TodoList는 todo항목들 전체라서 --> todos
const TodoList = ({ todos, onToggle, onRemove }: TodolistProps) => {
    if(todos.length ===0 ) return <div>등록한 항목이 없습니다.</div>
    return (
        <ul>
            {todos.map(todo=>(
                <TodoItem todo={todo} onToggle={onToggle} onRemove={onRemove} key={todo.id} />
            ))}
        </ul>
    );
};

export default TodoList;