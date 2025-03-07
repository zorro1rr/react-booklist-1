import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import bookImg from '../images/book.png';
import BookIcon from './BookIcon';
import Rating from './Rating';

const List = ({ listName, booksInList }) => {
  const books = booksInList.map((book, idx) => {
    return (
      <Fragment>
        <div className="border-b border-gray-200 border-solid">
          </div>
          <div className="p-6 flex items-center">
            <div className="w-16 mr-6"><img className="object-cover w-full" src={bookImg} alt={book.title} /></div>
            <div className="w-full text-sm">
              <span className="font-medium">{book.title}</span>
              <br />
              <span className="text-gray-500">{book.author}</span>
            </div>
            <Rating placeholderRating="4/5"/>
          </div>
      </Fragment>
      
    );
  });

  return (
    <div className="w-full bg-white rounded-bl-md rounded-br-md shadow-md">
      <div className="border-b border-red-300 border-solid" >
        <div className="p-6 flex justify-between items-center">
          <h3 className="font-medium text-xl" >{listName}</h3>
          <div className="flex items-center gap-2">
            add book <Link to="/add-book" className="rounded-full bg-white shadow-md border-solid border-gray-200"><BookIcon/></Link>
          </div>
        </div>
      </div>
      <div className="">{books}</div>
    </div>
  );
};

export default List;
