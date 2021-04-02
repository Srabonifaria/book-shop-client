import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';


const Book = ({book}) => {
    const [order,setOrder] =useContext(UserContext)

     const history = useHistory()


    const handleBuyNow = (id) => {
        fetch(`https://pacific-caverns-44622.herokuapp.com/books/${id}`)
        .then(res => res.json())
        .then(data =>{
            setOrder(data[0])
            history.push('/checkout')
        })
       
    }
    return (
        <div className="col-md-3">
        <img style={{height: '300px'}} src={book.imageURL} alt=""/>
        <h3>{book.name}</h3>
        <p><small>{book.author}</small></p>
       <h5>{book.price} <Button className="info" onClick={()=>handleBuyNow(book._id)}>Buy Now</Button></h5>      
    </div>
    );
};

export default Book;