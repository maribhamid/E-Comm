import banner from '../assets/products/banner.png';

const HeroBanner = () => {
  return (
    <div className=" bg-[#40BFFF] text-white p-6 sm:p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">Adidas Men Running</h2>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-2">Sneakers</h3>
        <p className="text-xs sm:text-sm md:text-base mb-4">
          Performance and design. Taken right to the edge.
        </p>
        <button className="bg-white text-blue-500 font-bold py-2 px-4 sm:px-6 rounded-full text-sm hover:bg-gray-100 transition-colors duration-200 hover:scale-115 hover:font-extrabold hover:cursor-pointer">
          SHOP NOW
        </button>
      </div>
      <div className="w-full md:w-auto mt-4 md:mt-0">
        <img
          src={banner}
          alt="Adidas Men Running Sneakers"
          className=" w-150  md:max-w-none hover:scale-120 transition-transform duration-300 rotate-y-180"
        />
      </div>
    </div>
  );
};

export default HeroBanner;