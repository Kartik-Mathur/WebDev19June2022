import React,{useRef, useState} from 'react'
import classes from './Form.module.css';
import { v4 as uuid } from 'uuid';

const Form = (props) => {
    // const [input,setInput] = useState('');
    // const inputChangeHandler = (ev)=>{
    //     setInput(ev.target.value);
    //     console.log(ev.target.value);
    // }
    const inputRef = useRef();
    const submitFormHandler =(ev)=>{
        ev.preventDefault();
        // console.log(inputRef.current.value);
        let newTodo = {
            id:uuid(),
            task:inputRef.current.value,
            completed:false
        }
        
        props.addTodo(newTodo);
    }
    return (
        <form className={classes.form}>
            <input
                // onChange = {inputChangeHandler}
                type="text"
                placeholder="Enter Task"
                ref={inputRef}
            ></input>
            <button onClick={submitFormHandler}>Add Task</button>
        </form>
    )
}

export default Form
