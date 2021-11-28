import React, { useState } from 'react';
import Button from './Button';

let numbers = [
    ["+", "-", "%", "/"],
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0, "."]
];

export default function Calculator() {
    const [input, setInput] = useState("");


    const addingNum = (e) => {
        setInput(input + e.target.value)
    }


    let numBtn = numbers.flat().map((dig, ind) => {
        return <Button number={dig} key={ind} func={addingNum} />
    })

    let result = () => {
        setInput(eval(input))
    }


    return (
        <>
            <div d="dis"><p>Calculate here: {input}</p></div>
            <div className="cal">
                {numBtn}
                <Button number="=" key="=" func={result} />
            </div>
        </>
    )
}
