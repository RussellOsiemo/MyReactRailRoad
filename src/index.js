import React from 'react';
import ReactDom from 'react-dom';


//capitalize the first letter of the name of the function
//css 
import './index.css';
//import array from books.js we dont need to add extension if its js file
import {books} from './books'
import Book from './Book'
import{greeting} from './testing/testing'
function BookList() {
    console.log(greeting);
    return ( < section className = "booklist" >
        {books.map((book) => {
            return <Book key={book.id} {...book}></Book> 
         })}
        </section>
    );
}
//component

//renders a function Greeting to div.root on index.html
ReactDom.render( < BookList/> , document.getElementById('root'));