import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { clearFromCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const CheckoutPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveOrderToLocalStorage = () => {
    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    const newOrders = [...existingOrders, ...cartItems];
    localStorage.setItem('orders', JSON.stringify(newOrders));
  };
  

  const handlePlaceOrder = () => {
    saveOrderToLocalStorage();
    alert('Order placed successfully!');
    dispatch(clearFromCart());
    navigate('/my-orders');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between mb-4">
                <span>{item.title} (x{item.quantity})</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <hr />
            <div className="flex justify-between mt-4 text-lg font-bold">
              <span>Total:</span>
              <span>
                $
                {cartItems
                  .reduce((total, item) => total + item.price * item.quantity, 0)
                  .toFixed(2)}
              </span>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
