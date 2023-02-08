import React from 'react';
import styled from 'styled-components';


const TodoContainerBlock = styled.div`
    width: 400px;
    height: 844px;
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    border: 1px solid #3e3e3e;
    position: relative;
`

function TodoContainer({children}) {
    return (
       <TodoContainerBlock>{children}</TodoContainerBlock>
    );
}

export default TodoContainer;