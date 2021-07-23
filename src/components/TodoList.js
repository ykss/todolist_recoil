import React from 'react'
import { useRecoilValue } from 'recoil'
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator'
import TodoListFilters from './TodoListFilters';
import { filteredTodoListState } from "../atoms/atoms";
import TodoListStats from './TodoListStats';

function TodoList() {
    const todoList = useRecoilValue(filteredTodoListState);

    return (
        <>
            <TodoListStats/>
            <TodoListFilters/>
            <TodoItemCreator/>
            {todoList.map((todoItem) => (
                <TodoItem key={todoItem.id} item={todoItem}/>
            ))}
        </>
    )
}

export default TodoList
