import { useEffect } from "react";
import { BrowserRouter, Route, useLocation } from "react-router-dom";
import "./App.css";
import TodoContainer from "./components/TodoContainer";
import TodoHead from "./components/TodoHead";
import TodoMainList from "./components/TodoMainList";
import Main from "./pages/Main";
function App() {

  return (
    <BrowserRouter>
      <Route path="/" component={Main} />
      {/* <Route path="/list" component={TodoList} /> */}
    </BrowserRouter>
  );
}

export default App;
