import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { RiHeartAddLine } from "react-icons/ri";
import Todoitem from "./Todoitem";
import { useDispatch, useSelector } from "react-redux";
import TodoCreate from "./TodoCreate";
import axios from "axios";
import { getAllTodos } from "../commons/actions";
const TodoListBlock = styled.div`
  padding: 50px 0;
`;
const TodoDate = styled.div`
  font-family: "Gowun Dodum";
  font-size: 20px;
`;
const DateContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  .icons {
    cursor: pointer;
  }
`;
const TodoContainer = styled.div`
  padding: 50px 32px;
  height: 510px;
  box-sizing: border-box;
`;
const TodoListAddBox = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
`;
const AddTodoContainer = styled.div`
  position: absolute;
  bottom: 50px;
  right: 32px;
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

function TodoList() {
  // 추가Input on/off
  const [showInput, setShowInput] = useState(false);
  //오늘 날짜 
  const [todayTodos, setTodayTodos] = useState([]);
  
  // todo 불러오기 
  const todos = useSelector((state) => state.todos);

  // 날짜 계산
  let today = new Date();
  const weeks = ["일", "월", "화", "수", "목", "금", "토"];

  let year = today.getFullYear();
  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let day = ("0" + today.getDate()).slice(-2);
  let week = weeks[today.getDay()] + "요일";
  let fullDate = `${year}-${month}-${day}`;
  

  const todayTodoList = () => {
     setTodayTodos( todos.filter((todo) => todo.date === fullDate));
  };
  

  useEffect(() => { 
    todayTodoList();
  }, [todos, fullDate]);





  return (
    <TodoListBlock>
      <DateContainer>
        <HiOutlineChevronLeft className="icons prev" />
        <TodoDate>
          {fullDate} {week}
        </TodoDate>
        <HiOutlineChevronRight className="icons prev" />
      </DateContainer>
      <TodoContainer>
        {todayTodos.map((todoItem) => {
          return (
            <Todoitem
              key={todoItem.id}
              todoItem={todoItem}
            />
          );
        })}
        <TodoListAddBox>
          {showInput && (
            <TodoCreate showInput={showInput} setShowInput={setShowInput} />
          )}
        </TodoListAddBox>
      </TodoContainer>
      <AddTodoContainer>
        <AddTodoItem onClick={() => setShowInput(!showInput)}>
          <RiHeartAddLine className="addIcon" size={30} />
        </AddTodoItem>
      </AddTodoContainer>
    </TodoListBlock>
  );
}

export default TodoList;
