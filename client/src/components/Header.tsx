import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold px-3">eCommerce Site</h1>
        <div className="space-x-4 px-2">
          <Link to="/" className="hover:underline">Home  |</Link>          
          <Link to="/cart" className="hover:underline">Cart  |</Link>
          <Link to="/checkout" className="hover:underline">Checkout  |</Link>
          <Link to="/my-orders" className="hover:underline">My Orders</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
