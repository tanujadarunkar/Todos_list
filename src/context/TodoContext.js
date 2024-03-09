import {createContext, useContext} from "react";
// createContext is used to create the context and useContext is for using the context


//  -->in parameters i can pass all the things or data 

 export const TodoContext = createContext({
    //we are storing data in a array format
    todos: [
        {
            id: 1,
            todo: "Todo Message",
            completed: false
        }
    ],
//in this we are adding only definations not the functionality
//this gives you idea about how your data looks like
    addTodo: (todo) =>{},
    //what i have to update gives us id and what is updated then todo gives us
    updateTodo: (id, todo) => {},
    deleteTodo: (id) =>{},
    toggleComplete: (id) =>{}
    //all of this is just blueprint of the functionality
 })         
 
 //in this we are creatin our own custom hook in which are returning another hook called as useContext
 //if we are creating in different file then we have to import that files but in same file we dont have to mport this because we already have this.
 export const useTodo = () => {
    return useContext(TodoContext)
 }

 export const TodoProvider = TodoContext.Provider