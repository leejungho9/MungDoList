import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";

const SidebarBlock = styled.div`
  position: absolute;
  width: 300px;
  height: inherit;
  background-color: #fffff9;
  right: 0;
  display: ${(props) => (props.state ? "block" : "none")};
`;

const SidebarHead = styled.div`
  display: flex;
  height: 85px;
  width: 100%;
  padding-left: 32px;
  box-sizing: border-box;
  align-items: center;
  border-bottom: 1px solid #dfdfdf;
  background-color: #fffff9;
`;

const ArrowLeftIcon = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const SidebarBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

const SidebarMenu = styled.a`
  font-size: 18px;
  font-family: "Gowun Dodum";
  margin: 15px 0;
  cursor: pointer;
`;
function TodoSidebar({isSidebar, setIsSidebar}) {

  const showSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  return (
    <SidebarBlock state={isSidebar}>
      <SidebarHead>
        <ArrowLeftIcon>
          <BsArrowLeft size={24} onClick={showSidebar} />
        </ArrowLeftIcon>
      </SidebarHead>
      <SidebarBody>
        <SidebarMenu>메인 페이지로</SidebarMenu>
        <SidebarMenu>리스트 보기</SidebarMenu>
        <SidebarMenu>기록 남기기</SidebarMenu>
      </SidebarBody>
    </SidebarBlock>
  );
}

export default TodoSidebar;
