import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 
function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const author = 'The College Board';
const Book = () => {
  const title = 'Official SAT Study Guide 2020 Edition';
  return (
    <article className="book">
      <img 
        src="https://images-na.ssl-images-amazon.com/images/I/41wBo8-XN7L._AC_SX368_.jpg" 
        alt=' '/>
      <h1>{title}</h1>
      <h4>{author}</h4>     
    </article>
  );
};

ReactDOM.render(<BookList />,document.getElementById('root'));