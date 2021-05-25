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
        <Route exact path={['/home', '/']} component ={Home} />
        <Route path="/about/:userName" component ={About} />
        <Route path="/about" component ={About} />
        <Route path="/users" component ={Users} />                >
      </Switch> 
    </BrowserRouter>
  );
}

export default App;
