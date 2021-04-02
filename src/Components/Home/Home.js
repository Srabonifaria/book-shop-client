import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Book from '../Book/Book';



const Home = () => {
    const [books,setBooks] = useState([])
    
    useEffect(() => {
        fetch('https://pacific-caverns-44622.herokuapp.com/books')
        .then(res => res.json())
        .then(data =>setBooks(data))
    },[])
    document.title="Home"

    return (
        <div className="row">
        {
            books.length === 0 && <Spinner animation="border" variant="info" />
        }
        {
            books.map(book =><Book book={book}></Book>)
        }
    </div>
    );
};

export default Home;