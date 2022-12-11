import React,{useState} from 'react'

const useToggle = (initialVal) => {
    const [toggle, setToggle] = useState(initialVal);

    const changeToggleHandler = ()=>{
        setToggle(!toggle);
    }

    return [toggle,changeToggleHandler];
}

export default useToggle;
