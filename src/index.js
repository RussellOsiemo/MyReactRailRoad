import React from 'react';
import ReactDom from 'react-dom';


//capitalize the first letter of the name of the function
//css 
import './index.css';
const books = [
{id:1,
    Image: "https://images-na.ssl-images-amazon.com/images/I/91JV0+3BRGL._AC_UL160_SR160,160_.jpg ",
    Title: 'DUNE : AUDIOBOOK',
    Author: 'Frank Herbert'
},
{id:2,
    Image: "https://images-na.ssl-images-amazon.com/images/I/81PNeyIYVfL._AC_UL160_SR160,160_.jpg",
    Title: 'Greenlights',
    Author: 'Matthew McConaughey'
}
,
{ id:3,
    Image: "https://images-na.ssl-images-amazon.com/images/I/81X+TLMA8oL._AC_UL160_SR160,160_.jpg",
    Title: 'The Sandman : Act II',
    Author: 'Neil Gaiman'
}
];
function BookList() {
    return ( < section className = "booklist" >
        {books.map((book) => {
            return <Book key={book.id} {...book}></Book> 
         })}
        </section>
    );
}
const Book = ({Image,Title,Author}) => {
    // Events(Attribute,EventHandler)
    //onClick,onMouserOver
    const clickHandler = () =>{
        alert ('Hello World');
    }
    const compleExample = (Author)=>{
       alert(Author);

    }
       return (<article className = 'book' onMouseOver={()=>{
         console.log(Title)
       }} >
        <img src = { Image }alt = "" />
        <h1 onClick={() => console.log(Title)}> { Title } </h1> 
        <h4 > { Author } </h4>
        <button type="button" onClick={clickHandler}>Reference Example</button>
        <button type="button" onClick={()=>compleExample(Author)}>complex Example</button>
        </article>
    )};

//renders a function Greeting to div.root on index.html
ReactDom.render( < BookList/> , document.getElementById('root'));