import '../index.css'
import React, { useState } from 'react'




export default function Comp({ isDarkProp }) {
    const [text, setText] = useState("Click on the button to change text")

    const changeText = () => {
        let text1 = 'Lorem Ipsum Dolor Sit Amet';
        let text2 = 'React is a JavaScript library created by Facebook.\n React is a User Interface (UI) library.\n React is a tool for building UI components'
        text === text1 ? setText(text2) : setText(text1);

    }
    return (
        <div className="container text-center p-5 mt-5" style={{ fontSize: "2rem" }}>
            <button style={{ fontSize: "2rem" }} className={`btn btn-outline-${isDarkProp ? "light" : "dark"} rounded-0 mb-4`} onClick={changeText} >Change Text</button>
            <p className='textPara'>{text}</p>
        </div>
    )
}