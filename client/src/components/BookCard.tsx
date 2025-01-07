import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BookCardProps {
  id : string;
  title: string;
  description: string;
  image: string;
  features: string;
  price: number;
  author:string;
  rating: number;
  pageCount: number;
}

const BookCard: React.FC<BookCardProps> = ({id, title, description, image, features, price, author, rating }) => {
  const navigate = useNavigate();

  const handleToNavigatePage = () => {
    navigate(`/book/${id}`);
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:bg-gray-200 transition duration-500 hover:scale-110" onClick={handleToNavigatePage}>
      <img className="w-full h-48 object-fit" src={image} alt={title} />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700 text-sm mb-2">{description}</p>
        <p className="text-gray-600 text-xs mb-4">{features}</p>
        <p className="text-gray-800 text-lg mb-2">Price: ₹{price}</p>
        <p className="text-gray-700 text-sm mb-2">Author: {author}</p>
        <p className="text-gray-900 text-xs mb-4">Rating: {rating}</p> 
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Buy Button
        </button>
      </div>
    </div>
  );
};

export default BookCard;
