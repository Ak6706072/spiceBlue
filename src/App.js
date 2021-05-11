import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import Tasks from "./components/Tasks/Tasks";
import { useDispatch, useSelector } from "react-redux";
import { setUserTostore } from "./redux/actions/actions";
import { insertAllTask, isJWT } from "./redux/actions/actions";
function App() {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const getToken = async () => {
    if (localStorage.getItem("jwt") === null) {
      const res = await fetch(`https://stage.api.sloovi.com/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "smithcheryl@yahoo.com",
          password: "12345678",
        }),
      });
      const token = await res.json();
      localStorage.setItem("jwt", token.results.token);
      dispatch(isJWT(true));
    } else {
      dispatch(isJWT(false));
      dispatch(setUserTostore(localStorage.getItem("jwt")));
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <div className="App">
      <Header />

      <div className="app_body">
        <div className="app_body_left">
          <AddTask />
          <Tasks />
        </div>
        <div className="app_body_right"></div>
      </div>
    </div>
  );
}

export default App;
