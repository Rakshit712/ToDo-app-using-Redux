import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateTodo } from './feature/TodoSlice';

function Update() {
  const {id} = useParams();
  const todo = useSelector(state => state.todo);
  const exisitingUser = todo.filter(item => item.id == id);
  const {task,completed} = exisitingUser[0];
  const [utask,setTask] = useState(task)
  const [ucompleted,setCompleted] = useState(completed)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e)=>{
    e.preventDefault();
    dispatch(updateTodo({
      id:id,
      task:utask,
      completed:ucompleted
    }))
    navigate("/")

  }

  return (
    <>
    <div className='div'>
        <h2>Update ToDO</h2>
        <div className='subDiv'>
            <form onSubmit={handleUpdate}>
                <div>
                <label htmlFor='task'>Task</label>
                <input type='text'
                 name='task'
                  placeholder='Enter ToDo' 
                  className='input'
                  value={utask}
                  onChange={e=> setTask(e.target.value)}
                  
                  />
                </div>
                <div>
                    <label htmlFor='completed'>Status</label>
                    <input type='text' name='completed' value={ucompleted} placeholder='Enter status' onChange={e=> setCompleted(e.target.value)} className='input'></input>
                </div>
                <br/>
                <button className='btnCreate'>Update</button>
            </form>

        </div>
    </div>
    </>
  )
}

export default Update