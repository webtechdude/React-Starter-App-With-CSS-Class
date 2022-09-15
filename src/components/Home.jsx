import React, { useState } from 'react'
import '../index.css';




export default function Home() {
    const [number, setNumber] = useState(0)
    return (
        <main className="container text-center p-5 mt-5" style={{ display: "grid", placeContent: "center", fontSize: "2rem" }}>
            <h1 className='h1' id="number">{number}</h1>
            <div id="btn-container p-2">
                <button className="btn btn-primary mx-2" onClick={() => { setNumber(c => c + 1) }}>+</button>
                <button className="btn btn-secondary mx-2" onClick={() => { setNumber(c => c - 1) }}>-</button>
                <button className="btn btn-danger mx-2" onClick={()=> { setNumber(c=> 0) }}>Reset</button>
            </div>
        </main>
    )
}