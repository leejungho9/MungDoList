import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
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
  });

  const handleChange = (e) => {
    const { value } = e.target;
    setAddTodoText(value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let day = ("0" + today.getDate()).slice(-2);
    let fullDate = `${year}-${month}-${day}`;
  
    const todo = {
      title: addTodoText,
      description: null,
      isCompleted: addTodoCheck,
      date: fullDate,
    };
    
    dispatch(addTodo(todo));
    setAddTodoText("");
    setShowInput(false);
  };
  const checkboxChange = (e) => {
    setAddTodoCheck(e.target.checked)
  }
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