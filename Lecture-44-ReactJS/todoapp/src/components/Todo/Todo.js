import React from 'react'
import classes from './Todo.module.css'
import {FaTrashAlt} from 'react-icons/fa';

const Todo = (props) => {
    return (
        <li className={classes['list-item']}>
            <input
                type="checkbox"
                defaultChecked={props.completed}
            ></input>
            <span>{props.task}</span>
            <FaTrashAlt className={classes.floatRight} />
        </li>
    )
}

export default Todo
