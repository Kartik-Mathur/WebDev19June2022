import React,{useEffect, useState} from 'react'
import Form from '../Form/Form'
import TodoList from '../TodoList/TodoList'

const TodoApp = () => {
    // const initialTodos = [
    //     {
    //         task:'Coding Blocks Jaana',
    //         completed: false,
    //         id:'2312'
    //     },
    //     {
    //         task:'Learn React',
    //         completed: true,
    //         id:'5432'
    //     },
    //     {
    //         task:'Play Cricket',
    //         completed: false,
    //         id:'2762'
    //     },
    //     {
    //         task:'Go to clubs',
    //         completed: true,
    //         id:'2315'
    //     }
    // ];

    let initialTodos = (JSON.parse(window.localStorage.getItem('todos')) || []);

    const [todos, setTodos] = useState(initialTodos);

    const addTodo = (newTodo)=>{
        setTodos((prevState)=>{
            return [...prevState,newTodo]
        })
    }

    const deleteTodo =(id)=>{
        setTodos((prevState)=>{
            return prevState.filter((todo)=>todo.id != id);
        })
    }

    const markDone = (id)=>{
        setTodos((prevState)=>{
            return prevState.map((todo)=> todo.id == id ? {
                todo,completed: !todo.completed
            }:todo)
        })
    }

    useEffect(()=>{
        console.log('running use effect-1');
    })

    useEffect(()=>{
        console.log('running use effect');
        window.localStorage.setItem('todos',JSON.stringify(todos));
    },[todos]);

    return (
        <div>
            <Form addTodo={addTodo}/>
            <TodoList markDone={markDone} deleteTodo={deleteTodo} todos={todos} />
        </div>
    )
}

export default TodoApp
