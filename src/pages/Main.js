import React from 'react';
import TodoContainer from '../components/TodoContainer';
import TodoHead from '../components/TodoHead';
import TodoMain from '../components/TodoMain';

function Main(props) {
  return (
    <div>
      <TodoContainer>
        <TodoHead/>
        <TodoMain/>
      </TodoContainer>
    </div>
  );
}

export default Main;