import {BrowserRouter,Switch,Route} from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import Login from "./Login";
import "../styles/reset.css";

function App() {
  return (
      <BrowserRouter>
        <GlobalStyle/>
        <Switch>
          <Route path="/" exact>
            <Login/>
          </Route>
          <Route path="/register" exact>

          </Route>
          <Route path="/transactions" exact>

          </Route>
          <Route path="/new-entry" exact>

          </Route>
          <Route path="/new-expense" exact>

          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
