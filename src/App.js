import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, useLocation } from "react-router-dom";
import "./App.css";
import { getAllTodos } from "./commons/actions";
import Main from "./pages/Main";

function App() {
 const dispatch = useDispatch();

  //json-server 에서 todo data 받아오기
  useEffect(() => {
   async function getTodos() {
     try {
      const response = await axios.get("http://localhost:4000/todos");
      console.log(response.data)
      dispatch(getAllTodos(response.data))
     } catch (err) {
       console.log(err)
     }
   }
   getTodos();
 }, [dispatch]);


  return (
    <BrowserRouter>
      <Route path="/" component={Main}   />
    </BrowserRouter>
  );
}

export default App;
