import "./App.css";
import { Switch, Route, useHistory} from "react-router-dom";
import { useState, useEffect } from "react";
import { loginUser, newUser, removeToken, verifyUser } from "./services/auth";
import Layout from "./components/layouts/Layout";
import Login from "./screens/login/Login";
import Join from "./screens/join/Join";
import MainContainer from "./components/containers/MainContainer";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory()
  
  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser()
    setCurrentUser(userData)
  }
    handleVerify()
  }, [])

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

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('authToken')
    removeToken()
    history.push('/')
  }


  return (
    <div className="App">
      <Layout
        currentUser={currentUser}
        handleLogout={handleLogout}
      >
        <Switch>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/join">
            <Join handleJoin={handleJoin} />
          </Route>
          <Route path="/">
            <MainContainer />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
