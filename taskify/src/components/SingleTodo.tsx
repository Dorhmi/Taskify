import { FaEdit ,FaTrash  } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { Todo } from "../modal";




interface props {
    id:number;
    todo:string;
    todos: Todo[];
    isdone:boolean;
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}


const SingleTodo: React.FC<props> = ({todo , id , todos , isdone , setTodos}) => {

const handelDone = (id:number) => {
    setTodos(todos.map(item => {
        if (item.id === id) {
            return {...item , isdone:!item.isdone}
        }
        return item
    }))
    // setTodos([...todos,newTodo])
}

const handleRemove = (id:number) => {
    setTodos(todos.filter((item)=> item.id !== id))
}

return (
    <article className="article-container">
        {isdone?<s className="article-title">{todo}</s>:<p className="article-title">{todo}</p>}
        <div className="icons-container">
            <span className="icon"><FaEdit/></span>
            <span className="icon" onClick={()=>{handleRemove(id)}}><FaTrash/></span>
            <span className="icon" onClick={()=>{handelDone(id)}}><MdOutlineDone/></span>
        </div>
    </article>
)
}

export default SingleTodo