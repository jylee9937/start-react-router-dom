import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Links from "./components/Links";
import NavLinks from "./components/NavLinks";
import Login from "./pages/Login";

const isLogin = false;

function App() {
  return (
    <BrowserRouter>
      <Links />
      <NavLinks />
      <Switch>
        <Route
          path="/login"
          render={() => (isLogin ? <Redirect to="/" /> : <Login />)}
        />
        <Route path="/profile/:id" exact component={Profile} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/about" exact component={About} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
