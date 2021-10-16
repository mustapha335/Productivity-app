import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/navBar";
import Timer from "./Components/TimerCircle/timer";
import Calender from "./Components/Calender/calender";
import Chart from "./Components/Chart/chart";
import Dates from "./Components/Date/date";
import ProgressCircle from "./Components/ProgressCircle/progressCircle";
import SecondCircle from "./Components/SecondCircle/secondCircle";
import TodoForm from "./Components/Todo/TodoForm/todoForm";
import TodoLayout from "./Components/Todo/TodoLayout/todoLayout";
import TodoList from "./Components/Todo/TodoList/todoList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [error, setError] = useState(null);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  // saving the todos in browser storage to prevent loss of todos on refreshing tab
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (todo.length < 5) {
      setError("At least 5 word required!");
      return false;
    }

    setTodos([{ id: Date.now, title: todo, done: false }, ...todos]);

    setTodo("");
    setError(null);
  };

  const delHandler = (todoId) => {
    if (window.confirm("Are you sure")) {
      const updatedTodos = todos.filter((item) => item.id !== todoId);

      setTodos(updatedTodos);
    }
  };

  const doneHandler = (todoId) => {
    const index = todos.findIndex((emp) => emp.id === todoId);
    const newTodo = [...todos];

    newTodo[index] = {
      id: todos[index].id,
      title: todos[index].title,
      done: !todos[index].done,
    };

    setTodos(newTodo);
  };
  return (
    <Router>
      <div className="App">
        <div className="app__container">
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <div class="vertical"></div>
              <Timer />
              <Calender />

              <Chart />
              <Dates />
              <ProgressCircle />
              <SecondCircle />
            </Route>
          </Switch>

          <Switch>
            <Route path="/notes">
              <TodoLayout>
                <TodoForm
                  error={error}
                  value={todo}
                  submit={submitHandler}
                  onChange={(e) => setTodo(e.target.value)}
                />

                <TodoList
                  todos={todos}
                  delHandler={delHandler}
                  doneHandler={doneHandler}
                />
              </TodoLayout>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
