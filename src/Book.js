import React from 'react'
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


export default Book
