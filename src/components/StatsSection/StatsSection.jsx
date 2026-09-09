const StatsSection = () => {
  return (
    <div className="md:w-full md:h-[200px] bg-linear-to-r from-[#4f39f6] to-[#9514fa] mt-[20px] md:mt-[40px] lg:mt-[60px] flex items-center">
      <div className="w-full mx-auto text-white md:flex justify-between md:px-[100px] lg:px-[200px] ">
        <div className=" md:border-r-1 border-[#fff] md:px-[80px]">
          <h2 className="font-extrabold text-center text-[40px] ">50K+</h2>
          <h3 className="text-center font-normal text-[24px] mt-[12px]">
            Active Users
          </h3>
        </div>
        <div className=" md:border-r-1 border-[#fff] md:px-[80px]">
          <h2 className="font-extrabold text-center text-[40px] ">200+</h2>
          <h3 className="text-center font-normal text-[24px] mt-[12px]">
            Premium Tools
          </h3>
        </div>
        <div className="md:px-[80px]">
          <h2 className="font-extrabold text-center md:text-[40px]  ">4.9</h2>
          <h3 className="text-center font-medium text-[24px] mt-[12px]">
            Rating
          </h3>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
