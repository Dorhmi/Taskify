// import React from 'react'

import { useState } from "react"
import InputField from "./components/InputField"
import { Todo } from "./modal"

const App = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos , setTodos] = useState<Todo[]>([])

  console.log(todos);
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!todo) {
      return (
          alert("please entre a value")
      )
    } else {
      const newTodo = {id: Date.now() , todo:todo}
      setTodos([...todos , newTodo])
      setTodo('')
    }
}
  
  return (
    <section className="section-container">
      <div className="section-center">
      <h1 className="section-title">taskify</h1>
      <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit}/>
      </div>
    </section>
  )
}

export default App