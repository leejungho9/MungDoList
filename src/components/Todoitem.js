import React, { useState } from "react";
import styled from "styled-components";
import { RiHeartAddLine } from "react-icons/ri";
import { RxPencil2, RxTrash } from "react-icons/rx"
import { TfiTrash } from "react-icons/tfi";
import TodoCreate from "./TodoCreate";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../commons/actions";
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

  div{
    display: none;
  }

  &:hover{
    div {
      display: block;
      .icons{
        margin: 0 5px;
      }
    }
  }
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
  flex-grow: 2;
  text-decoration: ${(props) => props.checked ? "line-through" : "none"};
  &:hover {
    font-weight: bold;
  }
`;

const TodoHoverBox = styled.div`
  .update:hover{
    transform: scale(1.1);
    cursor: pointer;
  }
  .delete:hover{
    transform: scale(1.1);
    cursor: pointer;
  }
`

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
  const dispatch = useDispatch();
  const [showInput, setShowInput ]  = useState(false);
  const checkboxChange = (e) => {
    console.log(e.target.checked)
  }
  const handleDelete = (id) => {
    console.log(id)
    dispatch(deleteTodo(id))
  }
  return (
    <TodoItemBlock>
      <TodoItemContainer>
        {todayTodos.map((todo) => {
          return (
            <TodoListBox key={todo.id}>
              <TodoCheckbox id={todo.id} checked={todo.isCompleted} onChange={checkboxChange}/>
              <TodoLabel htmlFor={todo.id} checked={todo.isCompleted}>{todo.title}</TodoLabel>
              <TodoHoverBox>
                <RxPencil2 size={20} className="icons update" />
                <TfiTrash size={20} className="icons delete" onClick={() => handleDelete(todo.id)}/>
              </TodoHoverBox>
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
