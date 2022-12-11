import React from 'react'
import classes from './Todo.module.css'
import {FaTrashAlt} from 'react-icons/fa';

const Todo = (props) => {
    const deleteHandler = ()=>{
        props.deleteTodo(props.id);
    }
    return (
        <li className={classes['list-item']}>
            <input
                type="checkbox"
                defaultChecked={props.completed}
                onClick={()=>{props.markDone(props.id)}}
            ></input>
            <span style={{textDecoration: props.completed ? 'line-through':'none'}}>{props.task}</span>
            <FaTrashAlt onClick={deleteHandler} className={classes.floatRight} />
        </li>
    )
}

export default Todo
