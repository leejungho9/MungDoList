import React, { useEffect, useState } from "react";
import TodoContainer from "../components/TodoContainer";
import TodoHead from "../components/TodoHead";
import TodoMain from "../components/TodoMain";
import TodoMainList from "../components/TodoMainList";
import useCookies from "react-cookie/cjs/useCookies";
import styled from "styled-components";

function Main(props) {
  const [isMain, setIsMain] = useState(true);
  const [hasCookies, setHasCookies] = useState(true);
  //useCookies Hook을 이용해 쿠키 목록 불러오기
  const [appCookies, setAppCookies] = useCookies();

  const getExpiredDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  };

  const closeModalUntilExpires = () => {
    if (!appCookies) return;

    const expires = getExpiredDate(1);
    setAppCookies("MAIN_EXPIRES", true, { path: "/", expires });
    setIsMain(false);
    window.location.reload();
  };


  useEffect(() => {
    if (appCookies["MAIN_EXPIRES"]) return;
    console.log(appCookies["MAIN_EXPIRES"]);
    setHasCookies(false);
  }, []);

  return (
    <TodoContainer>
      <TodoHead />
      {!hasCookies && (
        <TodoMain
        isMain={isMain}
        closeModalUntilExpires={closeModalUntilExpires}
        />
        )}
      {hasCookies && <TodoMainList />}
    </TodoContainer>
  );
}

export default Main;
