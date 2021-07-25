import "./App.css";
import { Switch, Route, useHistory} from "react-router-dom";
import { useState } from "react";
import Layout from "./components/layouts/Layout";
import Login from "./screens/login/Login";
import Home from "./screens/home/Home";
import Join from "./screens/join/Join";
import { loginUser, newUser } from "./services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory()

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/')
  };

  const handleJoin = async (formData) => {
    const userData = await newUser(formData)
    setCurrentUser(userData)
    history.push('/')
  }

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/join">
            <Join handleJoin={handleJoin} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
