import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";
import Todoitem from "./Todoitem";
import { useSelector } from "react-redux";
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

function TodoMainList(props) {
  let today = new Date();
  const weeks = ["일", "월", "화", "수", "목", "금", "토"];

  let year = today.getFullYear();
  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let day = ("0" + today.getDate()).slice(-2);
  let week = weeks[today.getDay()] + "요일";
  let fullDate = `${year}-${month}-${day}`;

  const todos = useSelector((state) => state.todos);
  const [todayTodos, setTodayTodos] = useState([])
  const todayTodoList = () => {
    setTodayTodos(todos.filter((todo) => todo.date === fullDate));
  };

  useEffect(() => {
    todayTodoList()
  }, [todos,fullDate] )

  return (
    <TodoListBlock>
      <DateContainer>
        <HiOutlineChevronLeft className="icons prev" />
          <TodoDate>{fullDate} {week} </TodoDate>
        <HiOutlineChevronRight className="icons prev" />
      </DateContainer>
      <Todoitem todayTodos={todayTodos}/>
    </TodoListBlock>
  );
}

export default TodoMainList;
