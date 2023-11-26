import { Todo } from "../modal"
import SingleTodo from "./SingleTodo";


interface props {
    todos: Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
    completedTodos:Todo[];
    setCompletedTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todolist = ({todos , setTodos , completedTodos , setCompletedTodos}:props) => {
return (
    <div className="todolist-container">
        <div className="TodosList" >
            <span className="todo-active">Active Tasks</span>
        {todos.map((item , index)=>(
            <SingleTodo key={item.id} index={index} todo={item.todo} id={item.id} isdone={item.isdone}  todos={todos} setTodos={setTodos} />
        ))}
        </div>
        <div className="TodosRemove" >
            <span className="todo-remove">Completed Tasks</span>
        {completedTodos.map((item ,index)=>(
            <SingleTodo key={item.id} index={index} todo={item.todo} id={item.id} isdone={item.isdone}  todos={completedTodos} setTodos={setCompletedTodos} />
        ))}
        </div>
    </div>
)
}

export default Todolist