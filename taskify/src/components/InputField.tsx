


interface props {
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (e: React.FormEvent) => void
}

const InputField: React.FC<props> = ({todo , setTodo , handleSubmit}) => {

return (
    <form className='form-container' onSubmit={handleSubmit}>
        <input className='form-input' type="text" 
        value={todo}
        placeholder="Enter a Task"
        onChange={(e)=>{setTodo(e.target.value)}}/>
        <button className='submit-btn'>Go</button>
    </form>
)
}

export default InputField