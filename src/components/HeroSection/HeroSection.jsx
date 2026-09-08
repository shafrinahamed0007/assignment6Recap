import bannerImage from "../../assets/banner.png";
import playButton from "../../assets/play.png"

const HeroSection = () => {
  return (
    <div className="lg:flex  gap-5 justify-between  lg:mt-[65px]">
      {/* content section */}
      <div className="mb-5 lg:w-[70%]">
        {/* title section */}
        <div className="py-2 px-4 rounded-[20px] bg-[#e1e7ff]  flex gap-[5px] lg:w-[294px]   ">
          <div className="w-[15px] h-[15px] bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full mt-[3px]"></div>
          <h3 className="text-center font-medium text-[16px] bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">
            NEW: AI-Powed Tools Available
          </h3>
        </div>

        {/* Header text section */}
        <div className="my-4">
          <h2 className="font-extrabold text-4xl lg:text-[72px] text-[##101727]">
            Supercharge Your Digital WorkFlow
          </h2>
          <p className="text-[#627382]  mt-[8px] text-[18px]">
            Access premium AI tools, design assets, templates, and productivity <br />
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
        </div>

        {/* Group Button Section */}
        <div className="grid md:flex gap-4 ">
            <button className="btn  bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-white py-3 px-4">Explore Products</button>
            <button className="btn rounded-full border border-1 border-purple-500 bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent py-3 px-4"><img src={playButton} /> Explore Products</button>
            

        </div>
      </div>

      {/* image section */}
      <div>
        <img className="lg:w-[500px] lg:h-[590px]" src={bannerImage} />
      </div>
    </div>
  );
};

export default HeroSection;
