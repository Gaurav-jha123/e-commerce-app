import React, { useEffect } from 'react';
import BookCard from '../components/BookCard';
import { fetchBooksStart } from '../redux/booksSlice';
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';


const BookList: React.FC = () => {
  const dispatch = useDispatch();
  const { books , loading , error} = useSelector((state : RootState) => state.books);


  useEffect(() => {
    dispatch(fetchBooksStart());
  }, [dispatch]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Book List</h1>
      {loading && <p>Loading books...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.length > 0 ? (
          books.map(book => (
            <BookCard
              key={book._id}
              id={book._id}
              title={book.title}
              description={book.description}
              image={book.image}
              price={book.price}
              features={book.features}
              rating={book.rating}
              author = {book.author}
              pageCount={book.pageCount}
            />
          ))
        ) : (
          <p>No books available.</p>
        )}
      </div>
    </div>
  );
};

export default BookList;
