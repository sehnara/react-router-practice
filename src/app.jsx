import './app.css';
import { BrowserRouter, Link, NavLink, Route, Switch, useHistory } from 'react-router-dom';
import About from './components/about';
import Users from './components/users';
import Home from './components/home';
import With from './components/with';
function App() {
  
  return (
    <BrowserRouter>    
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><NavLink 
                  to="/users"
                  activeStyle={{backgroudColor : 'black', color:'blue'}}
                >Users</NavLink>
            </li>
          </ul>
        </nav>
      </div> 

      <Switch>
        <Route exact path={['/home', '/']} component ={Home} />
        <Route path="/about/:userName" component ={About} />
        <Route path="/about" component ={About} />
        <Route path="/users" component ={Users} />                
      </Switch> 
    </BrowserRouter>
  );
}

export default App;
