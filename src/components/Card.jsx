import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { product_title, price, product_image,product_id } = item;
  return (
    <div className="card bg-gray-800 h-full shadow-xl p-2 rounded-xl">
      <figure className="h-48 overflow-hidden bg-white rounded-xl mx-4 my-2">
        <img
          src={product_image}
          alt="Shoes"
          className="w-full h-full object-contain p-2"
        />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title">{product_title}</h2>
        <p className="text-gray-400">Price: {price}</p>
        <div className="card-actions">
          <Link to={`/gadget/${product_id}`} className="border-1 py-2 px-3 text-[#9538E2] border-[#9538E2] rounded-full">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
