import React from 'react'
import classes from './Form.module.css';

const Form = () => {
    return (
        <form className={classes.form}>
            <input
                type="text"
                placeholder="Enter Task"
            ></input>
            <button>Add Task</button>
        </form>
    )
}

export default Form
