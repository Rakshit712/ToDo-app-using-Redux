import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import  {Link , useNavigate} from "react-router-dom"
import { deleteTodo } from './feature/TodoSlice';


function Home() {
    const todo = useSelector(state => state.todo);
    const dispatch = useDispatch();
    const handleDelete = (id) =>{
        dispatch(deleteTodo({id:id}))
    }
    
  return (
    <>
    <div className='container'>
        <h2>ToDo</h2>
        <Link to="/create" className='buttonCreate'>Add +</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Action</th>
                   
                </tr>

            </thead>
            <tbody>
                    {todo.map((to,index)=>(
                        <tr key={index}>
                            <td>{to.id}</td>
                            <td>{to.task}</td>
                            <td>{to.completed}</td>
                            <td><Link to={`/update/${to.id}`} className='btnEdit'>Edit</Link>
                            <button onClick={()=>handleDelete(to.id)} className='btnDelete'>Delete</button></td>

                        </tr>

                    ))}
            </tbody>
        </table>
    </div>
    </>
  )
                    }

export default Home