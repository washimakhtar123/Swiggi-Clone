import React from "react";

const Cart = () => {
    //comment
  const cartItems = [
    {
      id: 1,
      name: "Apple iPhone 14",
      price: 999,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Samsung Galaxy S23",
      price: 899,
      quantity: 2,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Sony WH-1000XM5 Headphones",
      price: 399,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="bg-white p-4 shadow-lg rounded-lg">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center border-b py-4 last:border-b-0"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-lg mr-4"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-gray-800">${item.price}</p>
              <p className="text-sm text-gray-500">Total: ${item.price * item.quantity}</p>
            </div>
          </div>
        ))}
        <div className="text-right mt-4">
          <h2 className="text-xl font-bold">Grand Total: ${calculateTotal()}</h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;
