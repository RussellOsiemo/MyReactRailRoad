import React from 'react';
import ReactDom from 'react-dom';


//capitalize the first letter of the name of the function
//css 
import './index.css';
const firstbook = {
   Image :"https://images-na.ssl-images-amazon.com/images/I/91JV0+3BRGL._AC_UL160_SR160,160_.jpg ",
  Title : 'DUNE : AUDIOBOOK',
  Author:'Frank Herbert'
}
const secondbook = {
   Image :"https://images-na.ssl-images-amazon.com/images/I/81PNeyIYVfL._AC_UL160_SR160,160_.jpg",
  Title : 'Greenlights',
  Author:'Matthew McConaughey'
}

function BookList(){
return( <section className="booklist">
   <Book Image ={firstbook.Image} Title = {firstbook.Title} Author ={firstbook.Author} />
   <Book Image ={secondbook.Image} Title = {secondbook.Title} Author ={secondbook.Author} />
   <Book />
   <Book />
   
</section>
);
}
const Book = (props) =>{
   console.log(props)
  return <article className='book'>
     <img src={props.Image} alt="" />
   <h1>{props.Title}</h1>
   <h4>{props.Author}</h4>
   <p>{props.job}</p>
   
   </article>
  
};
// const Image = () => 
// const Title = () => 
// const Author = () => 
//renders a function Greeting to div.root on index.html
ReactDom.render(<BookList />,document.getElementById('root'));