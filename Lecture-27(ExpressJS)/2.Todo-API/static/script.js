window.onload = ()=>{
    let btn = document.querySelector('#btn');
    let task = document.querySelector('#task');
    let form = document.querySelector('form');
    let tasklist = document.querySelector('#tasklist');
    
    function refreshTodos(){
        $('#tasklist').empty();
        $.get('/gettasks',(tasks)=>{
            for(let task of tasks){
                let li = document.createElement('li');
                li.innerText = task;
                tasklist.appendChild(li);
            }
        })
    }
    refreshTodos();

    function updateData(taskname){
        $('#tasklist').empty();
        $.post('/addtask',{
            name: taskname
        }).then((tasks)=>{
            for(let task of tasks){
                let li = document.createElement('li');
                li.innerText = task;
                tasklist.appendChild(li);
            }
        })
    }

    form.addEventListener('submit',(ev)=>{
        ev.preventDefault();
        let taskname = task.value;
        updateData(taskname);
    })
}