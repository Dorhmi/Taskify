import { FaEdit ,FaTrash  } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { Todo } from "../modal";
import React, { useEffect, useRef, useState } from "react";




interface props {
    id:number;
    todo:string;
    todos: Todo[];
    isdone:boolean;
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}


const SingleTodo: React.FC<props> = ({todo , id , todos , isdone , setTodos}) => {
    const [isedit , setIsedit] = useState<boolean>(false);
    const [editTodo , setEditTodo] = useState<string>(todo);
    const inputRef = useRef<HTMLInputElement>(null) 

    useEffect(()=>{
        inputRef.current?.focus();
    }, [isedit])

const handelDone = (id:number) => {
    setTodos(todos.map(item => {
        if (item.id === id) {
            return {...item , isdone:!item.isdone}
        }
        return item
    }))
}

const handleRemove = (id:number) => {
    setTodos(todos.filter((item)=> item.id !== id))
}

const handleEdit = (e:React.FormEvent , id:number) => {
    e.preventDefault()
    setTodos(todos.map(item=> item.id === id ? {...item , todo : editTodo}: item ))
    setIsedit(false)
}



return (
    <form className="article-container" onSubmit={(e)=>{handleEdit(e,id)}}>
        {isedit ?(<input className="input-value" 
        type="text" value={editTodo} 
        onChange={(e)=>{setEditTodo(e.target.value)}} 
        ref={inputRef}/>) 
        :isdone ?(<s className="article-title">{todo}</s>)
        :(<p className="article-title">{todo}</p>)}
        <div className="icons-container">
            <span className="icon" onClick={()=>{
                if(!isdone) {
                    setIsedit(!isedit)
                }
                }}><FaEdit/></span>
            <span className="icon" onClick={()=>{handleRemove(id)}}><FaTrash/></span>
            <span className="icon" onClick={()=>{handelDone(id)}}><MdOutlineDone/></span>
        </div>
    </form>
)
}

export default SingleTodo