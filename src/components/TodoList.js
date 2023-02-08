import React from 'react';
import styled from 'styled-components';

const TodoListBlock = styled.div`


`


function TodoList(props) {

    const date = new Date();
    const days = ['일','월','화','수','목','금','토'];

    return (
        <main>
            <TodoListBlock>
                <div className='day'>{`${days[date.getDay()]}요일`}</div>
            </TodoListBlock>
        </main>
    );
}

export default TodoList;