import './app.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import About from './components/about';
import Users from './components/users';
import Home from './components/home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </nav>
      </div> 

      <Switch>
        <Route exact path={['/home', '/']}>
          <Home/>
        </Route>
        <Route path="/about/:userName">
          <About />
        </Route>
        <Route path="/users">
          <Users/>
        </Route>       
      </Switch> 
    </BrowserRouter>
  );
}

export default App;
