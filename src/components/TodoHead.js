
import styled from 'styled-components';
import { HiMenu } from "react-icons/hi";
import { useState } from 'react';

const TodoHeadBlock = styled.div`
    padding: 16px 32px;
    border-bottom: 1px solid #dfdfdf;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color:  #FFFFF9;
`
const LogoIcon = styled.img`
    width: 20px;
    height: 20px;
`
const HeadTitle = styled.h1`
    font-family: "GowunDodum";
    flex-basis: 150px;
    font-size: 20px;
    letter-spacing: 5px;
    flex-grow: 2;
    margin-left : 20px;
`

const IconContainer = styled.div`
    width: 24px;
    height: 24px;
    cursor: pointer;
`
function TodoHead(props) {
    const [isSidebar, setisSidebar] = useState(false);

    const showSidevbar  = () => {
        console.log(isSidebar)
        setisSidebar(!isSidebar)
    }
    
    return (
        <header>
            <TodoHeadBlock>
                <LogoIcon src="../images/logo.png" alt="강아지 발바닥 로고"/>
                <HeadTitle>멍두리스트</HeadTitle>
                <IconContainer onClick={showSidevbar}>
                    <HiMenu size={25}/>
                </IconContainer>
            </TodoHeadBlock>
        </header>
    );
}

export default TodoHead;