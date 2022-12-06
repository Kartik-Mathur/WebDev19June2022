import React,{useState} from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);
    
    const countHandler = ()=>{
        // count = count + 1;
        setCount(count+1);
        // console.log(count);
    }
    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={countHandler}>Click!</button>
        </div>
    )
}

export default Counter
