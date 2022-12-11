import React from 'react';
import Todo from '../Todo/Todo';
import classes from './TodoList.module.css';

const TodoList = () => {
    const todos = [
        {
            task:'Coding Blocks Jaana',
            completed: false,
            id:'2312'
        },
        {
            task:'Learn React',
            completed: true,
            id:'5432'
        },
        {
            task:'Play Cricket',
            completed: false,
            id:'2762'
        },
        {
            task:'Go to clubs',
            completed: true,
            id:'2315'
        }
    ];

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
                        />
                    )
                })
            }
        </ul>
    )
}

export default TodoList
