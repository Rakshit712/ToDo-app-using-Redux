import { createSlice } from "@reduxjs/toolkit";
import{todoList} from  "../Data"
export const TodoSlice = createSlice({
    name :"toDos",
    initialState: todoList,
    reducers:{
        addTodo: (state , action) =>{
            console.log(action)
            state.push(action.payload);

        },
        updateTodo:(state , action)=>{
            const {id, task, completed}= action.payload;
            const  found= state.find(item=> item.id == id );
            
            if(found){
                found.task =task;
                found.completed =completed;
            }
        }, 
        deleteTodo: (state , action )=>{
            const {id}= action.payload;
            const  found= state.find(item=> item.id == id );
            if(found) {
                return state.filter(item=> item.id !== found.id)
            }}
    }

})
export  const {addTodo, updateTodo,deleteTodo }= TodoSlice.actions
export default TodoSlice.reducer;
