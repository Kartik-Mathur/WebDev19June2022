import React from 'react'

const JsxLearn = () => {
    let funnyNumber = 7;
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    const loginIn = true;
    return (
        <div>
            {loginIn && <div style=
            {{
                backgroundColor:'black',
                border:'2px solid black',
                color:'white'
            }}
            >This is NAV BAR</div>}
            <p>
                This is some randomNumber:
                {Math.floor(Math.random() * 10 + 1)}
            </p>
            <p>Random Number: {randomNumber}</p>

            {                
                (randomNumber === funnyNumber) ? 
                <img style={{ width: '150px' }}
                    src="https://media4.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif?cid=6c09b9525256f4a03fceba8e4a7e4d7305856b4b250a3023&rid=giphy.gif&ct=g"></img> 
                    :
                <p>You didn't win 😢😢😢😢</p>
            }

        </div>
    )
}

export default JsxLearn
