import React, { useState } from "react";

export const List = () => {
    const [value, setValue] = useState("")
    const [todo, setTodo] = useState([])

    const enterPush = (e) => {
        if (e.key === "Enter") {
            setTodo((previous) => {
                const newTodo = value;
                const newList = [...previous, newTodo].filter((item) => item);
                return newList;
            });
            setValue("");
        }
    };
    return (
        <div className="container rounded">
                <h1>ToDo's</h1>
            <ul>
                <input 
                type="text" 
                placeholder="To Be Done" 
                onChange={
                    (e) => setValue(e.target.value)} 
                    value={value} 
                    onKeyUp={enterPush} />
                {
                    todo.map((item) => (
                        <li >
                            {item}
                            <i
                                onClick={() => setTodo((previus) => {
                                    const newList = previus.filter(element => element !== item)
                                    return newList;
                                })}
                                className="icon fa-solid fa-x">
                            </i>
                        </li>
                    ))
                }
            </ul>
            <div>{todo.length} tasks left</div>
        </div>
    )
}
