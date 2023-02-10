import { act } from "react-dom/test-utils"
import { ADD, DELETE } from "./actions"

const initialState = {
  todos : [
    {
      "id": 1,
      "title": "아침 사료 주기",
      "description": "오늘 쩡이랑 호수공원으로 산책을 다녀왔다. 쩡이가 추워할까봐 걱정을 많이 했는데 생각보다 잘 놀아서 기분이 너무 좋았다.",
      "isCompleted": true,
      "date": "2023-02-09"
    },
    {
      "id": 2,
      "title": "저녁 사료 주기",
      "description": "오늘 쩡이랑 호수공원으로 산책을 다녀왔다. 쩡이가 추워할까봐 걱정을 많이 했는데 생각보다 잘 놀아서 기분이 너무 좋았다.",
      "isCompleted": false,
      "date": "2023-02-09"
    },
    {
      "id": 3,
      "title": "산책 30분 하기",
      "description": "오늘 쩡이랑 호수공원으로 산책을 다녀왔다. 쩡이가 추워할까봐 걱정을 많이 했는데 생각보다 잘 놀아서 기분이 너무 좋았다.",
      "isCompleted": false,
      "date": "2023-02-09"
    },
    {
      "id": 4,
      "title": "기관지 영양제 먹이기",
      "description": "오늘 쩡이랑 호수공원으로 산책을 다녀왔다. 쩡이가 추워할까봐 걱정을 많이 했는데 생각보다 잘 놀아서 기분이 너무 좋았다.",
      "isCompleted": false,
      "date": "2023-02-10"
    },
  ]
}


export const reducer = (state = initialState, action) => {
  if(action.type === ADD){
    console.log(state.todos)
    return {
      todos: [...state.todos, action.payload],
    }
  }

  if(action.type === DELETE){
    return {
      todos:  [...state.todos.filter((todo)=> todo.id !== action.id),] 
    }
  }

  if(action.type === UPDATE){

  }

  return state
}