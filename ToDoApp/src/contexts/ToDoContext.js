import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos:[
        {
            id:2,
            todo:"todo messages",
            completed:false,
        }
    ],
    addTodo: (todo) => {},
    updatedTodo:(id, todo) =>{},
    deleteTodo:(id) =>{},
    toggleComplete:(id) =>{}
})

export const useTodo = () =>{
    return useContext(ToDoContext)
}

export const Todoprovider = ToDoContext.Provider