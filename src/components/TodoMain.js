import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MainBlock = styled.div`
  width: 400px;
  height: 844px;
  background-color: #fffff9;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  display: ${(props) => props.state ? "flex" : "none"};
`;

const MainTitle = styled.div`
  position: absolute;
  top: 100px;
  text-align: center;
  font-family: "Gowun Dodum";
  font-size: 40px;
  line-height: 58px;
  color: #3e3e3e;
  letter-spacing: 0.5rem;
  font-weight: bold;
`;

const MainImage = styled.img`
  position: absolute;
  width: 238px;
  height: 301px;
  top: 200px;
`
const MainDesc = styled.span`
  position: absolute;
  width: 171px;
  height: 44px;
  top: 570px;

  font-family: 'Gowun Dodum';
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  color: #3E3E3E;
`

function TodoMain({isMain, closeMain}) {


  return (
    <MainBlock onClick={closeMain} state={isMain}>
      <MainTitle>멍두리스트</MainTitle>
      <MainImage src="images/dog.png"/>
      <MainDesc>반려견과의 행복한 하루를 멍두리스트에 기록해보세요. Click me! </MainDesc>
    </MainBlock>
  );
}

export default TodoMain;
