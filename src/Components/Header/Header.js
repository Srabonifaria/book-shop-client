import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../icons/Logo.png'
import './Header.css'

const Header = () => {
const history = useHistory()
const handleLogIn = () =>{
    history.push('/login');
}
    return (
   <div className="Header">
            <nav className="nav justify-content-center">
                <img src={logo} alt=""/>
               <Link className="text" to="/home">Home</Link>
                <Link className="text" to="/orders">Orders</Link> 
                <Link className="text" to="/admin">Admin</Link>
                <Link className="text" to="/deals">Deals</Link>
                <button onClick={handleLogIn} className="btn btn-primary">Log in</button>
                </nav>
        </div>
    );
};

export default Header;