import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { RootState } from '../redux/store';



const BookDetails: React.FC = () => {
  const { id } = useParams();

  const book =  useSelector((state : RootState) => state.books.books.find(book => book._id === id));

  const dipatch = useDispatch();
  const navigate = useNavigate();

  if (!book) {
    return <p className="text-center mt-10">Book not found.</p>;
  }
  const handleAddToCart = () => {
    dipatch(addToCart({id : book._id , title: book.title , price : book.price , quantity : 1})
  )
  }

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/checkout');
    alert('to be implemented');
  }
  return (
    <div className="container mx-auto px-4 py-8">
    <div className="flex flex-col md:flex-row items-center md:items-start">
      <img src={book.image} alt={book.title} className="w-64 h-80 object-cover mb-6 md:mb-0 md:mr-8" />
      <div>
        <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
        <p className="text-gray-700 mb-4">{book.description}</p>
        <p className="text-gray-500 mb-4">{book.features}</p>
        <p className="text-lg font-bold mb-4">${book.price.toFixed(2)}</p>
        <button
          onClick={handleAddToCart}
          className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded mr-4"
        >
          Add to Cart
        </button>
        <button
          onClick={handleBuyNow}
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Buy Now
        </button>
      </div>
    </div>
  </div>
);
};

export default BookDetails;
