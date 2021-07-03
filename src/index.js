import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 //setup var

const fisrtBook = {
  img: "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/mp_941f4c8a279ad61206347ab715257244.jpg",
  title: 'O perigo de uma história única',
  author: 'Chimamanda Ngozi Adichie',
};

const secondBook = {
  img: "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/d43ecf3b8188e024e1b7611a4f1d371451aeac85.jpg",
  title: 'Americanah',
  author: 'Chimamanda Ngozi Adichie',
};

function BookList() {
  return (
    <section className="booklist">
      <Book 
        img={fisrtBook.img} 
        title={fisrtBook.title} 
        author={fisrtBook.author} 
        >
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       </p>
      </Book>
      
      <Book 
        img={secondBook.img} 
        title={secondBook.title} 
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  const {img, title, author, Children} = props;
  return (
    <article className="book">
      <img 
        src={img}
        alt=' '/>
      <h1>{title}</h1>
      <h4>{author}</h4>
      {Children}
    </article>
  );
};

ReactDOM.render(<BookList />,document.getElementById('root'));