import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Orders from './Components/Orders/Orders';
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import Header from './Components/Header/Header';
import AddBook from './Components/AddBook/AddBook';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Book from './Components/Book/Book';
import Checkout from './Components/Checkout/Checkout';
import Manage from './Components/Manage/Manage';


export const UserContext =createContext();

function App() {

  const [loggedInUser,setLoggedInUser] = useState({})
  const [order,setOrder] =useState()

  return (
    <UserContext.Provider value={[
      loggedInUser,setLoggedInUser,order,setOrder]} className="App">
    <Router>
      <Header></Header>
    <div>
      <Switch>
        
        <Route path="/books">
          <Book />
        </Route>
        <PrivateRoute path="/admin">
          <Admin />
        </PrivateRoute>
        <Route path="/addBook">
          <AddBook />
        </Route>
        <Route path="/manage">
          <Manage />
        </Route>
        <PrivateRoute path="/checkout">
          <Checkout/>
          </PrivateRoute>
        <Route path="/login">
          <Login/>
          </Route>
          <Route path="/home">
          <Home />
          </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <PrivateRoute path="/orders">
          <Orders />
        </PrivateRoute>
      </Switch>
    </div>
  </Router>
  </UserContext.Provider>
  );
}

export default App;
