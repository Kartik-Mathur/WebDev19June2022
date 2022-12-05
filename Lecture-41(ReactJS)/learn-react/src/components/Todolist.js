import React from 'react'

const taskList = [
    {
        name: 'Cricket',
        isCompleted: false
    },
    {
        name: 'Coding',
        isCompleted: true
    },
    {
        name: 'Development',
        isCompleted: false
    },
    {
        name: 'Dancing',
        isCompleted: true
    }
];

const Todolist = () => {
    return (
        <div>
            {
                taskList.map((task) => {
                    return <li>
                        {task.name}
                        <input type="checkbox" defaultChecked={task.isCompleted}></input>
                        </li>
                })
            }
        </div>
    )
}

export default Todolist
