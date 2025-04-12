import React from "react";

const Category = ({ item }) => {
  return (
    <>
      <button className="btn bg-gray-600 mx-16 my-3 p-2 rounded-xl">
        {item.category_name}
      </button>
    </>
  );
};

export default Category;
