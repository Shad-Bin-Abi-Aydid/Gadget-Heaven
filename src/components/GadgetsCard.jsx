import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLoaderData,
  useParams,
} from "react-router-dom";
import Category from "./Category";
import Card from "./Card";

const GadgetsCard = () => {
  const data = useLoaderData();
  const { categoryId } = useParams();
  const [allData, setAllData] = useState(data);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("./category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  useEffect(() => {
    if (!categoryId) {
      setAllData(data);
    }else if(categoryId === "all"){
      setAllData(data.slice(0,9));
    }else {
      const categoryWiseData = [...data].filter(
        (item) => item.category_id === categoryId
      );
      setAllData(categoryWiseData);
    }
  }, [data, categoryId]);

  return (
    <>
      <h1 className="text-center text-3xl font-bold my-5">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* showing category */}
        <div className="text-center flex flex-col bg-gray-800 mx-7 rounded-xl w-fit self-start py-5">
          <NavLink
            to="/category/all"
            onClick={()=>setAllData(data.slice(0,5))}
            className={({ isActive }) =>
              `btn bg-gray-600 mx-16 my-3 p-2 rounded-xl ${
                isActive ? "text-warning" : "hover:text-warning"
              }`
            }
          >
            All Product
          </NavLink>

          {category.map((item) => (
            <Category key={item.id} item={item}></Category>
          ))}
        </div>

        {/* Showing Cards */}
        <div className="col-span-3 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {allData.length <= 0 ? (
              <h1 className="text-4xl font-bold text-red-600 text-center col-span-full mt-20">
                No Product Found
              </h1>
            ) : (
              allData.map((item) => (
                <Card key={item.product_id} item={item}></Card>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GadgetsCard;
