import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import Login from "./signUpAndSignIn/Login";
import "../styles/reset.css";
import SignUp from "./signUpAndSignIn/SignUp";
import UserContext from "../Context/UserContext";
import { useState } from "react";
import Transactions from "./Transactions/Transactions";

function App() {
  const [user,setUser]=useState(JSON.parse(localStorage.getItem('user')))
  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserContext.Provider value={{user,setUser}}>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <SignUp />
          </Route>
          <Route path="/transactions" exact>
            <Transactions/>
          </Route>
          <Route path="/new-entry" exact>

          </Route>
          <Route path="/new-expense" exact>

          </Route>
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
