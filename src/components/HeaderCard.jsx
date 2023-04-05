import React from 'react';

const HeaderCard = () => {
  return (
    <div
      className="w-[7rem] h-[10rem] sm:w-[8rem] sm:h-[11rem] bg-white rounded-lg shadow-lg border flex flex-col relative bg-center bg-cover"
      style={{
        backgroundImage: `url(https://t3.ftcdn.net/jpg/03/67/46/48/240_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg)`,
      }}
      id="bg-image"
    >
      <div
        className="absolute top-2 left-2 w-9 h-9 border-4 border-blue-500 rounded-full bg-center bg-cover"
        style={{
          backgroundImage: `url(https://t3.ftcdn.net/jpg/03/67/46/48/240_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg)`,
        }}
      ></div>
      <p className="text-white absolute bottom-0 left-8">Lin Shen</p>
    </div>
  );
}

export default HeaderCard