import React from 'react';

const Heading = ({title, subTitle}) => {
    return (
        <div className="text-center space-y-5 bg-[#9538E2] pb-52">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-400">
          {subTitle}
        </p>
      </div>
    );
};

export default Heading;