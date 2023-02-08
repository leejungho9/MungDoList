import React, { useState } from 'react';
import TodoContainer from '../components/TodoContainer';
import TodoHead from '../components/TodoHead';
import TodoMain from '../components/TodoMain';
import TodoList from '../components/TodoList';

function Main(props) {
  const [isMain, setIsMain] = useState(true);

  const closeMain = () => {
    setIsMain(false);
  }


  return (
    <div>
      <TodoContainer>
        <TodoHead/>
        <TodoMain isMain={isMain} closeMain={closeMain}/>
        { isMain ? null : <TodoList/>}
      </TodoContainer>
    </div>
  );
}

export default Main;