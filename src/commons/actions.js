export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const GET_TODO = "GET_TODO";



export const addTodo = (todo) => {
  console.log(todo)
  return {
    type : ADD_TODO,
    payload : {
      id : todo.id,
      title : todo.title,
      describe : todo.describe,
      isCompleted: todo.isCompleted,
      date : todo.date
    }
  }
}

export const deleteTodo = (id) => {
  return {
    type : DELETE_TODO,
    payload : {id}
  }
}

export const updateTodo = (todo) => {
  return {
    type : UPDATE_TODO,
    payload : {
      id : todo.id,
      title : todo.title
    }
  }
}

export const toggleTodo = (todo) => {
 
  return {
    type : TOGGLE_TODO,
    payload : {
      id : todo.id,
      isCompleted : todo.isCompleted
    }
  }
}

export const getAllTodos = (todos) => {
  return {
    type : GET_TODO,
    payload : {todos}
  }
}