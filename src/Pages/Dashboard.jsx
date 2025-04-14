import React, { useEffect, useState } from "react";
import { getAllCartData } from "../utilities/localStroge";
import Card from "../components/Card";
import Heading from "../components/Heading";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const carts = getAllCartData();
    setProducts(carts);
  }, []);
  const totalPrice = 0;

  return (
    <div>
      <div className="text-center space-y-5 bg-[#9538E2] pb-10 mb-10">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-400">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="flex justify-center gap-5">
          <button className="border-1 px-4 py-1 rounded-full">Cart</button>
          <button className="border-1 px-4 py-1 rounded-full">Wishlist</button>
        </div>
      </div>

      {/* Carts Data */}
      <div>

        {/* Cart's info */}
        <div className="flex flex-col md:flex-row justify-between items-center p-3">
            <div>
                <h3 className="text-lg font-bold">Cart</h3>
            </div>
            <div className="flex justify-center items-center gap-5">
                <h3 className="text-lg font-bold">Total Cost: {totalPrice}</h3>
                <button className="text-purple-800 text-sm px-5 py-2 text-center me-2 mb-2 border-1  rounded-full border-purple-500">Sort by Price</button>
                <button className="text-gray-300 font-bold bg-gradient-to-b from-[#9538E2] to-[#b05df5] rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Purchase</button>
            </div>
        </div>

        {/* cart's */}
        {

        }
      </div>

      {
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {products.map((item) => (
            <Card key={item.product_id} item={item}></Card>
          ))}
        </div>
      }
    </div>
  );
};

export default Dashboard;
