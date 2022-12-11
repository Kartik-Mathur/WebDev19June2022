import React, { useState } from 'react'
import useToggle from '../hooks/useToggle'

const Toggle = () => {
    const [isHappy,changeEmotion] = useToggle(true);

    return (
        <div onClick={() => { changeEmotion() }}>
            {isHappy ? <div>😊</div> : <div>😔</div>}
        </div>
    )
}

// const Toggle = () => {
//     const [toggle, setToggle] = useState(true);

//     return (
//         <div onClick={() => { setToggle(!toggle) }}>
//             {toggle ? <div>😊</div> : <div>😔</div>}
//         </div>
//     )
// }
export default Toggle;