import React from 'react';
import ReactDom from 'react-dom';


//capitalize the first letter of the name of the function
//css 
import './index.css';
const books = [
{
    Image: "https://images-na.ssl-images-amazon.com/images/I/91JV0+3BRGL._AC_UL160_SR160,160_.jpg ",
    Title: 'DUNE : AUDIOBOOK',
    Author: 'Frank Herbert'
},
{
    Image: "https://images-na.ssl-images-amazon.com/images/I/81PNeyIYVfL._AC_UL160_SR160,160_.jpg",
    Title: 'Greenlights',
    Author: 'Matthew McConaughey'
}
];
function BookList() {
    return ( < section className = "booklist" >
        {/* to access objects in array books i need map  */}
        {books.map((book) => {
            return 'Hello';
        })}
        </section>
    );
}
//option 3 for properties(my choice)
const Book = ({ Image, Title, Author, children }) => {
    //option 1 cons        ole.log(props)
    //option 2 const {Image,Title,Author} = props
    return <article className = 'book' >
        <img src = { Image }
    alt = "" />
        <h1> { Title } </h1> 
        <h4 > { Author } </h4>


    </article>

};
// const Image = () => 
// const Title = () => 
// const Author = () => 
//renders a function Greeting to div.root on index.html
ReactDom.render( < BookList / > , document.getElementById('root'));