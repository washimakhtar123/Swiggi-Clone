import React from "react";

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: "50% Off on Your First Order",
      description: "Use code FIRST50 at checkout and enjoy a 50% discount on your first order!",
      image: "https://via.placeholder.com/300x150",
    },
    {
      id: 2,
      title: "Buy 1 Get 1 Free",
      description: "Order any pizza and get another one absolutely free. Limited time offer!",
      image: "https://via.placeholder.com/300x150",
    },
    {
      id: 3,
      title: "Free Dessert on Orders Above $20",
      description: "Treat yourself! Get a free dessert on orders over $20.",
      image: "https://via.placeholder.com/300x150",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Exclusive Offers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">{offer.title}</h2>
              <p className="text-gray-600 mt-2">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Offers;