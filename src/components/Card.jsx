import React from "react";

const Card = ({ item }) => {
  const { product_title, price, product_image } = item;
  return (
    <div className="card bg-gray-800 h-full shadow-xl p-2 rounded-xl">
      <figure className="h-48 overflow-hidden bg-white rounded-xl mx-4 my-2">
        <img
          src={product_image}
          alt="Shoes"
          className="w-full h-full object-contain p-2"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>Price: {price}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
