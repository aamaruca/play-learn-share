import './App.css';
import Layout from './components/layouts/Layout'
import { Switch, Route } from 'react-router-dom'
import Login from './screens/login/Login';
import Home from './screens/home/Home';
import Join from './screens/join/Join';


function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/login'>
            <Login />
            </Route>
            <Route path='/join'>
            <Join />
            </Route>
          <Route path='/'>
            <Home />
          </Route>

        </Switch>
      </Layout>
    </div>
  );
}

export default App;
