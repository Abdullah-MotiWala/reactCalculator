import React from 'react';

export default function Button(props) {
   
    return (
        <>
            <div className="button">
                <input type="button" value={props.number} id={props.number} onClick={props.func} onChange={props.funcChange}></input>
            </div>
        </>
    )
}
