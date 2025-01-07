import React, { useEffect, useState } from 'react';

interface Order {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

const MyOrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(savedOrders);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">My Orders</h1>
      {orders.length === 0 ? (
        <p>You have no orders.</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index} className="mb-4">
              <div className="flex justify-between">
                <span>
                  {order.title} (x{order.quantity})
                </span>
                <span>${(order.price * order.quantity).toFixed(2)}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyOrdersPage;
