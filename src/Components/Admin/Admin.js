import React from 'react';
import './Admin.css'
import { Link } from 'react-router-dom';
import logo from '../../icons/Logo.png'

const Admin = () => {
    document.title="Admin"
    return (
        <div className="sidenav">
             <nav className="justify-content-center nav">
                <img src={logo} alt=""/>
               <Link to="/ManageBook">Manage Books</Link>
                <Link to="/addBook">Add Book</Link> 
                <Link to="/editBook">Edit Book</Link>
                </nav>
        </div>
     
    );
};

export default Admin;