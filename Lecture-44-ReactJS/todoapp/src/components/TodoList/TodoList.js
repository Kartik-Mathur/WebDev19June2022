import React,{useState} from 'react';
import Todo from '../Todo/Todo';
import classes from './TodoList.module.css';

const TodoList = (props) => {
    let todos = props.todos
    return (
        <ul className={classes.ul}>
            {
                todos.map((todo)=>{
                    return (
                        <Todo 
                        key={todo.id}
                        id={todo.id}
                        task={todo.task}
                        completed={todo.completed}
                        deleteTodo = {props.deleteTodo}
                        markDone ={props.markDone}
                        />
                    )
                })
            }
        </ul>
    )
}

export default TodoList
