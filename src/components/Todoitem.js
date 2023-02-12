import React, { useRef, useState } from "react";
import styled from "styled-components";
import { RxPencil2 } from "react-icons/rx";
import { TfiTrash } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, updateTodo } from "../commons/actions";
import { useEffect } from "react";
import axios from "axios";
import { computeHeadingLevel } from "@testing-library/react";

const TodoItemBlock = styled.div``;

const TodoListBox = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;

  div {
    display: none;
  }

  &:hover {
    div {
      display: block;
      .icons {
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
const TodoInput = styled.input.attrs({ type: "text" })`
  margin-left: 30px;
  font-size: 20px;
  font-family: "Gowun Dodum";
  cursor: pointer;
  flex-grow: 2;
  border: none;
  text-decoration: ${props => props.checked && "line-through"};

  &:focus {
    outline: none;
  }
  &:hover {
    font-weight: bold;
  }
`;

const TodoHoverBox = styled.div`
  .update:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  .delete:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

function Todoitem({ todoItem }) {
  const dispatch = useDispatch();
  // 수정모드 on/off
  const [editMode, setEditMode] = useState(false);
  // 수정할 Input
  const [newText, setNewText] = useState(todoItem.title);
  // input DOM 접근
  const TodoInputRef = useRef();

  // checkbox 선택
  const checkboxChange =  (e, id) => {
    handleCheck(id);
  };

  const handleCheck = async (id) => {

    const todo = {
      id: id,
      isCompleted : !todoItem.isCompleted
    };

    const response = await axios.patch(`http://localhost:4000/todos/${id}`, todo);
    dispatch(toggleTodo(response.data));
  }

  // Todo 삭제하기
  const handleDelete = async (id) => {
    const response = await axios.delete(`http://localhost:4000/todos/${id}`);
    console.log(response);
    window.location.reload();
  };

  // input text onChange 이벤트
  const handleChange = (e) => {
    setNewText(e.target.value);
  };

  // enter 눌렀을 때 이벤트
  const handleKeyPress = (e, id) => {
    if (e.key === "Enter") {
      handleClick(id);
    }
  };

  // Todo 수정하기
  const handleClick = async (id) => {
    const todo = {
      id: id,
      title: newText,
    };
    console.log(todo);
    const response = await axios.patch(
      `http://localhost:4000/todos/${id}`,
      todo
    );

    dispatch(updateTodo(response.data));
    setEditMode(false);
  };


  //edit 모드일때 input 포커싱
  useEffect(() => {
    if (editMode) {
      TodoInputRef.current.focus();
    } else {
      TodoInputRef.current.blur();
    }
  }, [editMode]);


  console.log(todoItem)

  return (
    <TodoItemBlock key={todoItem.id}>
      <TodoListBox>
        <TodoCheckbox
          checked={todoItem.isCompleted}
          onChange={(e) => checkboxChange(e, todoItem.id)}
        />
        <TodoInput
          ref={TodoInputRef}
          checked={todoItem.isCompleted}
          value={newText}
          readOnly={!editMode}
          onChange={handleChange}
          onKeyDown={(e) => handleKeyPress(e, todoItem.id)}
        ></TodoInput>
        <TodoHoverBox>
          <RxPencil2
            size={20}
            className="icons update"
            onClick={() => setEditMode(!editMode)}
          />
          <TfiTrash
            size={20}
            className="icons delete"
            onClick={() => handleDelete(todoItem.id)}
          />
        </TodoHoverBox>
      </TodoListBox>
    </TodoItemBlock>
  );
}

export default Todoitem;
