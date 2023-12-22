import React from "react";

const Input = (props) => {
    
    return(
        <div>
            <input
            type="text"
            id={props.name}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            className="border p-2 text-black"
            placeholder={props.placeholder}
            spellCheck="false"
            autoComplete="off"
            />
        </div>
    )
}

export default Input;