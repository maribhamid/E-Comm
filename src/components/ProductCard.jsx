import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const stars = Array(5).fill(0).map((_, i) => (
    <FaStar key={i} className={`text-xl ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`} />
  ));

  return (
    <div className="relative bg-white rounded-lg shadow-lg p-4 text-center transition-transform transform hover:scale-105 hover:border-blue-500 border-6 border-transparent">
      {product.isHot && <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">HOT</div>}
      <img src={product.image} alt={product.name} className="flex w-[328px] h-[428px] mb-4 rounded-md sm:justify-center sm:items-center"  />
      <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
      <div className="flex justify-center mb-2">{stars}</div>
      <div className="flex justify-center items-baseline space-x-2">
        <span className="text-lg sm:text-xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
        <span className="text-xs sm:text-sm text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span>
        <span className="text-xs sm:text-sm font-semibold text-red-500">{product.discount}</span>
      </div>
    </div>
  );
};

export default ProductCard;