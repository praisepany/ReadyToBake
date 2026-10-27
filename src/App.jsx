import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import MenuDetails from './pages/MenuDetails';
import LogIn from './pages/LogIn';
import Cart from './pages/Cart';

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
