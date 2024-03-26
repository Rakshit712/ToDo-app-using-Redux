import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  {Link , useNavigate} from "react-router-dom"
import{addTodo} from "./feature/TodoSlice"


function Create() {
    const [task,setTask] = useState("")
    const [completed,setCompleted] = useState("")
    const todo = useSelector(state => state.todo);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addTodo({id :todo[todo.length -1].id+1,  task, completed}))
        navigate("/")
    }
      return (
    <>
    <div className='div'>
        <h2>Add a new ToDO</h2>
        <div className='subDiv'>
            <form onSubmit = {handleSubmit}>
                <div>
                <label htmlFor='task'>Task</label>
                <input type='text'
                 name='task'
                  placeholder='Enter ToDo' 
                  className='input'
                  onChange={e=>setTask(e.target.value)}
                  />
                </div>
                <div>
                    <label htmlFor='completed'>Status</label>
                    <input type='text' name='completed' placeholder='Enter status' onChange={e=>setCompleted(e.target.value)} className='input'></input>
                </div>
                <br/>
                <button className='btnCreate'>Submit</button>
            </form>

        </div>
    </div>
    </>
  )
}

export default Create