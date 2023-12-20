import React from "react";

const Input = (props) => {
    let value = ""

    if(props.name === "firstName"){
        value = props.value.firstName
    } else if (props.name === "lastName"){
        value = props.value.lastName
    } else if (props.name === "participation"){
        value = props.value.participation
    } else {
        throw new Error("Nome inválido: " + props);
    }

    return(
        <div>
            <input
            type="text"
            id={props.name}
            name={props.name}
            value={value}
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