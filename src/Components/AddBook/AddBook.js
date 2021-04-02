import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Admin from '../Admin/Admin';
import './AddBook.css'

const AddBook = () => {
const { register, handleSubmit} = useForm();
const [imageURL,setImageURL] =useState(null)


  const onSubmit = data => {
      const bookData = {
          bookName: data.bookName,
        authorName: data.authorName,
        price: data.price,
          imageURL: imageURL,
      };
      const url =`https://pacific-caverns-44622.herokuapp.com/addBook`
      
      fetch(url,{
          method: 'POST',
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(bookData)
      })
      .then(res => console.log('server side data',res))
    };
const handleImageUpload = (book) =>{
    console.log(book.target.files[0])
    const imageData = new FormData();
    imageData.set('key','64dc9f0fb998de0a45bd77ce67abdcdc')
    imageData.append('image',book.target.files[0])

    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
}

    return (
        
        <div className="justify-content-center">
            <Admin></Admin>
            <h1 className="main">Add Book</h1>
        <form className="main" onSubmit={handleSubmit(onSubmit)}>
      <input name="bookName" defaultValue="Enter Name" ref={register} />
      <br/>
      <input name="authorName" defaultValue="Enter Name" ref={register} />
      <br/>
      <input name="price" defaultValue="Enter Price" ref={register}  />
      <br/>
      <input name="exampleRequired" type="file" onChange={handleImageUpload} />
      <br/>
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddBook;