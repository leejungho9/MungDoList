import React from "react";
import styled from "styled-components";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";
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

    .icons{
        cursor: pointer;
    }
`;

const TodoListContainer = styled.div`
    padding: 50px 32px;
`
const TodoListBox = styled.div`
    padding: 10px 0;
    display : flex;
    align-items: center;
`
const TodoCheckbox = styled.input.attrs({ type: 'checkbox' })`
    width : 18px;
    height : 18px;
    cursor: pointer;
`
const TodoLabel= styled.span`
    margin-left: 30px;
    font-size: 20px;
    font-family: 'Gowun Dodum';
    cursor: pointer;
    &:hover{
        font-weight: bold;
    }
`

function TodoList(props) {
  const date = new Date();
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <TodoListBlock>
      <DateContainer>
        <HiOutlineChevronLeft className="icons prev"/>
        <TodoDate>2023-01-10 {`${days[date.getDay()]}요일`}</TodoDate>
        <HiOutlineChevronRight className="icons prev"/>
      </DateContainer>
      <TodoListContainer>
        <TodoListBox>
            <TodoCheckbox/><TodoLabel>아침 사료 주기</TodoLabel>
        </TodoListBox>
        <TodoListBox>
            <TodoCheckbox/><TodoLabel>아침 사료 주기</TodoLabel>
        </TodoListBox>
        <TodoListBox>
            <TodoCheckbox/><TodoLabel>아침 사료 주기</TodoLabel>
        </TodoListBox>
      </TodoListContainer>
    </TodoListBlock>
  );
}

export default TodoList;
