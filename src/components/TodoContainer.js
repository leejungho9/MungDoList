import React from 'react';
import styled from 'styled-components';


const TodoContainerBlock = styled.div`
    width: 390px;
    height: 844px;

    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 100px;
    background-color: green;

    display: flex;
    flex-direction: column;

`
function TodoContainer({children}) {
    return (
       <TodoContainerBlock>{children}</TodoContainerBlock>
    );
}

export default TodoContainer;