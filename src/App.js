import "./styles.css";
import ReactDraft from "./reactDraft";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="nav">
          <div>
            <Link to="/reactdraft">React Draft</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/users">Users</Link>
          </div>
        </div>
        <div className="main">
          <Switch>
            <Route path="/about"></Route>
            <Route path="/users"></Route>
            <Route path="/reactdraft">
              <ReactDraft></ReactDraft>
            </Route>
            <Route path="/">
              <ReactDraft></ReactDraft>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
