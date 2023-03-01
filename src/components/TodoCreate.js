import axios from 'axios';
import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addTodo } from '../commons/actions';

const TodoCreateBlock = styled.div`
`
const AddTodoInput = styled.input.attrs({ type: "input" })`
  border: none;
  margin-left: 30px;
  font-size: 20px;
  font-family: "Gowun Dodum";
  &:focus {
    outline: none;
  }
`;

const AddCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

function TodoCreate({showInput, setShowInput}) {
  const dispatch = useDispatch();
  const [addTodoText, setAddTodoText] = useState("");
  const [addTodoCheck, setAddTodoCheck] = useState(false);
  const TodoInputRef = useRef();


  useEffect(() => {
    if (TodoInputRef.current !== null) {
      TodoInputRef.current.focus();
    }
  },[TodoInputRef]);

  const handleChange = (e) => {
    const { value } = e.target;
    setAddTodoText(value);
  };
  
  const checkboxChange = (e) => {
    setAddTodoCheck(e.target.checked)
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  
  const todos = useSelector((state) => state.todos);

  //json-server 에 todo data 추가
  const handleClick = async () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let day = ("0" + today.getDate()).slice(-2);
    let fullDate = `${year}-${month}-${day}`;
    const todo = {
      id: todos.length+1,
      title: addTodoText,
      description: null,
      isCompleted: addTodoCheck,
      date: fullDate,
    };
    console.log(todo)

    const response = await axios.post("http://localhost:4000/todos", todo);
    console.log(response.data)
    dispatch(addTodo(response.data))
    setAddTodoText("");
    setShowInput(false);
  };

  return (
    <TodoCreateBlock>
      <AddCheckbox onChange={checkboxChange}/>
      <AddTodoInput
        ref={TodoInputRef}
        value={addTodoText}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
    </TodoCreateBlock>
  );
}

export default TodoCreate;