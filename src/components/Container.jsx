import '../index.css'
import React, { useState } from 'react'




export default function Comp() {
    const [text, setText] = useState("Click on the button to change text")

    const changeText = () => {
        let text1 = 'Lorem Ipsum Dolor Sit Amet';
        let text2 = 'Taki is a very good boy'
        text === text1 ? setText(text2) : setText(text1);

    }
    return (
        <div className="container text-center p-5 mt-5" style={{ display: "grid", placeContent: "center", fontSize: "2rem" }}>
            <button onClick={changeText}>Change Text</button>
            <p className='textPara'>{text}</p>
        </div>
    )
}