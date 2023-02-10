import React, { useState } from "react";
import styled from "styled-components";
import { RiHeartAddLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useReducer } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { addTodo } from "../commons/actions";
import TodoCreate from "./TodoCreate";

const TodoItemBlock = styled.div`
  padding: 50px 32px;
`;

const TodoItemContainer = styled.div`
  height: 510px;
`;
const TodoListBox = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
`;
const TodoCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
const TodoLabel = styled.label`
  margin-left: 30px;
  font-size: 20px;
  font-family: "Gowun Dodum";
  cursor: pointer;
  text-decoration: ${(props) => props.checked ? "line-through" : "none"};
  &:hover {
    font-weight: bold;
  }
`;

const AddTodoItem = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d1d1d1;
  background-color: #ffffff;
  cursor: pointer;
  float: right;
  transition: all 0.2s linear;
  .addIcon {
    color: #eb7e2f;
  }
  &:hover {
    transform: scale(1.1);
  }
`;


function Todoitem({ todayTodos }) {
  const [showInput, setShowInput ]  = useState(false);


  const checkboxChange = (e) => {
    console.log(e.target.checked)
  }
  return (
    <TodoItemBlock>
      <TodoItemContainer>
        {todayTodos.map((todo) => {
          return (
            <TodoListBox key={todo.id}>
              <TodoCheckbox id={todo.id} checked={todo.isCompleted} onChange={checkboxChange}/>
              <TodoLabel htmlFor={todo.id} checked={todo.isCompleted}>{todo.title}</TodoLabel>
            </TodoListBox>
          );
        })}
        <TodoListBox>
          {showInput && <TodoCreate showInput={showInput} setShowInput={setShowInput}/>}
        </TodoListBox>
      </TodoItemContainer>
      <AddTodoItem onClick={() => setShowInput(!showInput)}>
        <RiHeartAddLine className="addIcon" size={30}/>
      </AddTodoItem>
    </TodoItemBlock>
  );
}

export default Todoitem;
