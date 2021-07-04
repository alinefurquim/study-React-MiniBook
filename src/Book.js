import React from 'react'

const Book = ({ img, title, author }) => {
    //const {img, title, author} = props;
    const clickHandler = (e) => {
      console.log(e);
      console.log(e.target);
      alert('hello')
    };
    const complexExample = (author) => {
      console.log(author);
    };
    return (
      <article className="book" onMouseOver={() => {
  
      }}>
        <img 
          src={img}
          alt=' '/>
        <h1 onClick={() => console.log(title)}>{title}</h1>
        <h4>{author}</h4>
        <button type="button" onClick={clickHandler}>
          reference exaple
        </button>
        <button type='button' onClick={() => complexExample(author)}>
          more complex example
        </button>
      </article>
    );
  };

export default Book