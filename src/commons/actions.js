export const ADD = "ADD_TODO";
export const DELETE = "DELETE_TODO";
export const UPDATE = "UPDATE_TODO";

let id = 5;

export const addTodo = (todo) => {
  return {
    type : ADD,
    payload : {
      id : id++,
      title : todo.title,
      isCompleted: todo.isCompleted,
      date : todo.date
    }
  }
}

export const deleteTodo = (id) => {
  return {
    type : DELETE,
    payload : {
      id
    }
  }
}

export const updateTodo = (todo) => {
  return {
    type : UPDATE,
    payload : {
      id : todo.id,
      title : todo.title,
      isCompleted: todo.isCompleted,
      date : todo.date
    }
  }
}