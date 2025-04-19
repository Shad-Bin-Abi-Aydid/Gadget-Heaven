import React, { useEffect, useState } from "react";
import {
  addCartData,
  getAllCartData,
  removeAll,
  removeCarts,
} from "../utilities/localStroge";
import { MdOutlineCancel } from "react-icons/md";
import { getAllWishData, removeWish } from "../utilities/wishListStorage";
import toast from "react-hot-toast";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [disablePurchBtn, setDisablePurchBtn] = useState(false);
  const [activebtn, setActiveBtn] = useState("cart");



  useEffect(() => {
    const carts = getAllCartData();
    setProducts(carts);
    setDisablePurchBtn(carts.length === 0);
  }, []);

  useEffect(() => {
    const wishes = getAllWishData();
    setWishList(wishes);
  }, []);

  const handleWishListRemove = (id) => {
    removeWish(id);
    const wishes = getAllWishData();
    setWishList(wishes);
  };

  const handleRemove = (id) => {
    removeCarts(id);
    const carts = getAllCartData();
    setProducts(carts);
  };

  const handleSort = () => {
    const sorted = [...products].sort((a, b) => b.price - a.price);
    setProducts(sorted);
  };
  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

  const handlePurchase = () => {
    removeAll();
    const carts = getAllCartData();
    setProducts(carts);
    setDisablePurchBtn(carts.length === 0);
  };

  const handleAddtoCart = (item) => {
    const { product_id } = item;

    removeWish(product_id);
    const wishes = getAllWishData();
    setWishList(wishes);

    addCartData(item);
    const carts = getAllCartData();
    setProducts(carts);
    toast.success("Items Successfully Added to Cart!");
  };

  return (
    <div className="pb-10">
      <div className="text-center space-y-5 bg-[#9538E2] py-10 mb-10 ">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-400">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="flex justify-center gap-5">
          <NavLink
          to={`/dashboard/${"cart"}`}
            onClick={() => setActiveBtn("cart")}
            className={({ isActive }) =>
              `border-1 px-4 py-1 rounded-full ${
                isActive ? "bg-white text-[#9538E2] font-bold" : ""
              }`
            }
          >
            Cart
          </NavLink>
          <NavLink
          to={`/dashboard/${"wish"}`}
            onClick={() => setActiveBtn("wish")}
            className={({ isActive }) =>
              `border-1 px-4 py-1 rounded-full ${
                isActive ? "bg-white text-[#9538E2] font-bold" : ""
              }`
            }
          >
            Wishlist
          </NavLink>
        </div>
      </div>

      {/* Carts Data */}
      {activebtn == "cart" && (
        <div>
          <div>
            {/* Cart's info */}
            <div className="flex flex-col md:flex-row justify-between items-center p-3 gap-5">
              <div>
                <h3 className="text-2xl ml-2 font-bold">Cart</h3>
              </div>

              <div className="flex justify-center items-center gap-5">
                <h3 className="text-lg font-bold">
                  Total Cost: ${totalPrice}{" "}
                </h3>
                <button
                  onClick={() => handleSort()}
                  className="text-gray-300 font-bold text-sm px-5 py-2 text-center me-2 mb-2 border-1  rounded-full border-purple-500"
                >
                  Sort by Price
                </button>
                <button
                  disabled={disablePurchBtn}
                  onClick={() => handlePurchase()}
                  className={`font-bold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ${
                    products.length === 0
                      ? "bg-gray-400 text-white cursor-not-allowed opacity-70"
                      : "bg-gradient-to-b from-[#9538E2] to-[#b05df5] text-gray-300 hover:opacity-90"
                  }`}
                >
                  Purchase
                </button>
              </div>
            </div>

            {/* cart's */}
          </div>
          {products.map((item) => (
            <div className="flex justify-between items-center bg-gray-100 p-5 m-5 rounded-xl text-black shadow-lg">
              {/* product details */}
              <div className="flex flex-col md:flex-row justify-start gap-10">
                {/* Product image */}
                <div className="max-w-60">
                  <img
                    src={item.product_image}
                    className="w-full h-auto rounded-xl"
                    alt=""
                  />
                </div>

                {/* Product Details */}
                <div className="space-y-5">
                  <h1 className="text-2xl font-bold">{item.product_title}</h1>
                  <p className="text-lg font-semibold text-gray-700">
                    {item.description}
                  </p>
                  <p className="text-xl font-bold">Price: ${item.price}</p>
                </div>
              </div>

              {/* remove button */}
              <div
                className="text-3xl text-red-500 hover:text-4xl"
                onClick={() => handleRemove(item.product_id)}
              >
                <MdOutlineCancel />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* WishList data */}
      {activebtn == "wish" && (
        <div>
          <div>
            <h1 className="text-2xl ml-2 font-bold">WishList</h1>
          </div>

          {wishList.map((item) => (
            <div className="flex justify-between items-center bg-gray-100 p-5 m-5 rounded-xl text-black shadow-lg">
              {/* wishlist details */}
              <div className="flex flex-col md:flex-row justify-start gap-10">
                {/* wishList image */}
                <div className="max-w-60">
                  <img
                    src={item.product_image}
                    className="w-full h-auto rounded-xl"
                    alt=""
                  />
                </div>

                {/* Product Details */}
                <div className="space-y-5">
                  <h1 className="text-2xl font-bold">{item.product_title}</h1>
                  <p className="text-lg font-semibold text-gray-700">
                    {item.description}
                  </p>
                  <p className="text-xl font-bold">Price: ${item.price}</p>
                  <button
                    onClick={() => handleAddtoCart(item)}
                    className="bg-[#9538E2] px-2 py-1 text-white rounded-full"
                  >
                    Add to Card
                  </button>
                </div>
              </div>

              {/* remove button */}
              <div
                className="text-3xl text-red-500 hover:text-4xl"
                onClick={() => handleWishListRemove(item.product_id)}
              >
                <MdOutlineCancel />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
