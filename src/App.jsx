import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Menu from "./Menu";
import MenuDetails from './MenuDetails';
import LogIn from './LogIn';
import Cart from './Cart';

function App() {

  return (
    <>
      <div className='App min-h-screen bg-[#F9E5C7]'>
        <Router>
          <Navbar/>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/menus">
                <Menu />
              </Route>
              <Route exact path="/menus/:id">
                <MenuDetails />
              </Route>
              <Route exact path="/login">
                <LogIn />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
            </Switch>
          </div>
        </Router>

      </div>
    </>
  );
}

export default App
