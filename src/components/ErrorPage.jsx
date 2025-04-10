import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
      <p className="text-xl mt-2">Something went wrong.</p>
      <p className="text-gray-500 mt-1">
        {error?.statusText || error?.message}
      </p>
      <Link
        to="/"
        className="inline-block mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
