
import { act } from "react-dom/test-utils"
import { ADD_TODO, DELETE_TODO, UPDATE_TODO, TOGGLE_TODO, GET_TODO } from "./actions"


const initialState = {
  todos : [ ]
}
export const reducer = (state = initialState, action) => {
  if(action.type === ADD_TODO){
    console.log(state.todos)
    return {
      todos: [...state.todos, action.payload],
    }
  }

  if(action.type === DELETE_TODO){
    return {
      todos:  [...state.todos.filter((todo) => todo.id !== action.payload.id),] 
    }
  }

  if(action.type === UPDATE_TODO){
    return {
      todos : [...state.todos.map((todo) =>  todo.id === action.payload.id ? {...todo, title : action.payload.title} : todo)]
    }
  }

  if(action.type === TOGGLE_TODO){

    return {
      todos : [...state.todos.map((todo) => todo.id === action.payload.id ? {...todo, isCompleted : action.payload.isCompleted}: todo)]
    }
  }

  if(action.type === GET_TODO){
    return {
      todos : action.payload.todos
    }
  }

  return {...state}
}