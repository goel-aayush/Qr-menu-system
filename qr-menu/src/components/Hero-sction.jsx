import React from 'react';
import qrmenu from '../Assets/menu2.png'
const HeroSection = () => {
  return (
    <section className="hero is-fullheight is-bold">
  <div className="container mx-auto pt-11">
    <div className="flex flex-wrap justify-evenly space-x-0">
      
      {/* Left Column (Text) */}
      <div className="w-full md:w-1/2 xl:w-1/3 ">
        <div className="text-3xl mb-4 antialiased">
          Make A
          <span className="text-orange-500 text-4xl font-medium antialiased"> SIMPLE ONLINE MENU in 2 CLICKS</span>
        </div>
        <p className="text-lg mb-8">
          Increase the quality and speed of your services with an online menu from QR Menu Online. Perfect for HoReCa and more!
        </p>
        
        {/* Buttons */}
        <div className="flex mb-8">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full mr-4">Try It</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full">Learn More</button>
        </div>
        
        {/* Testimonial (commented out) */}
        {/* <p className="text-sm text-gray-600">"QR Menu Online has been a game-changer for our restaurant. We've seen a significant increase in customer satisfaction and a decrease in wait times." - Riya, Happy Customer</p> */}
      </div>
      
      {/* Right Column (Image) */}
      <div className="w-full md:w-auto xl:w-auto ">
        <img src={qrmenu} alt="img" className="w-96 h-96  " />
      </div>
      
    </div>
  </div>
</section>

  );
};

export default HeroSection;