import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { GiSelfLove } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";

const GadgetDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [product, setProduct] = useState([data]);

  useEffect(() => {
    const findData = data.find((item) => item.product_id == id);
    setProduct(findData);
  }, [data, id]);

  const {
    product_image,
    product_title,
    price,
    description,
    specification,
    rating,
    availability,
  } = product;
  return (
    <div>
      <div className="text-center space-y-5 bg-[#9538E2] pb-52">
        <h1 className="text-2xl font-bold">Product Details</h1>
        <p className="text-gray-400">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
      </div>

      {/* Details Card */}
      <div className="flex flex-col md:flex-row justify-start items-center gap-10 bg-gray-700 mt-10 mx-20 p-5 rounded-xl">
        <div className="w-full max-w-[424px]">
          <img className="w-full h-auto object-contain rounded-xl" src={product_image} alt="" />
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl font-bold">{product_title}</h1>
          <p className="text-lg font-bold text-gray-300">Price: $ {price}</p>
          <p className="text-gray-400">{description}</p>
          <p className="text-lg font-bold">Specification:</p>
          {/* {
                specification.map((item,idx) => <li key={idx}>{item[idx]}</li>)
            } */}
          <p className="text-lg font-bold">Rating</p>
          <div className="flex justify-start gap-5">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="2 star"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="5 star"
              />
            </div>
            <p className="bg-gray-700 px-2 rounded-full">{rating}</p>
          </div>
          <div className="flex justify-start gap-5">
            <button className="bg-[#9538E2] font-bold px-2 py-1 rounded-full btn border-1 border-[#9538E2]">
              Add to Card <span className="text-xl"><IoCartOutline /></span>
            </button>
            <button className="border-1 border-gray-300 py-1 px-2 rounded-xl btn">
              <GiSelfLove />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
