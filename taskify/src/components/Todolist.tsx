import { Todo } from "../modal"
import SingleTodo from "./SingleTodo";



interface props {
    todos: Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const Todolist = ({todos , setTodos}:props) => {
return (
    <div className="todolist-container">
        {todos.map((item)=>(
            <SingleTodo key={item.id} todo={item.todo} id={item.id} isdone={item.isdone}  todos={todos} setTodos={setTodos} />
        ))}
    </div>
)
}

export default Todolist