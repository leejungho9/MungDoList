import styled from "styled-components";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import TodoSidebar from "./TodoSidebar";

const TodoHeadBlock = styled.div`
  padding: 0 32px;
  height: 85px;
  border-bottom: 1px solid #dfdfdf;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fffff9;
`;
const LogoIcon = styled.img`
  width: 20px;
  height: 20px;
`;
const HeadTitle = styled.h1`
  font-family: "GowunDodum";
  flex-basis: 150px;
  font-size: 20px;
  letter-spacing: 5px;
  flex-grow: 2;
  margin-left: 20px;
`;

const IconContainer = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
function TodoHead(props) {
  const [isSidebar, setIsSidebar] = useState(false);

  const showSidevbar = () => {
    setIsSidebar(!isSidebar);
    console.log(isSidebar)
  };

  return (
    <>
      <TodoHeadBlock>
        <LogoIcon src="../images/logo.png" alt="강아지 발바닥 로고" />
        <HeadTitle>멍두리스트</HeadTitle>
        <IconContainer onClick={showSidevbar}>
          <HiMenu size={25} />
        </IconContainer>
      </TodoHeadBlock>

        { isSidebar ? <TodoSidebar isSidebar={isSidebar} setIsSidebar={setIsSidebar}/> : null }
    </>
  );
}

export default TodoHead;
