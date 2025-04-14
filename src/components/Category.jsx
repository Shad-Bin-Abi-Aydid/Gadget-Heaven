import React from "react";
import { NavLink } from "react-router-dom";

const Category = ({ item }) => {
  return (
    <>
      <NavLink
        to={`/category/${item.id}`}
        className={({ isActive }) =>
          ` bg-gray-600 mx-16 my-3 p-2 rounded-xl ${
            isActive ? "text-warning" : "hover:text-warning"
          }`
        }
      >
        {item.category_name}
      </NavLink>
    </>
  );
};

export default Category;
