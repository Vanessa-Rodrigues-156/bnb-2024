import { url } from 'inspector';
import React,{useState} from 'react';

import { ReactTyped, Typed } from "react-typed";
// Import the 'Typed' component correctly

const HeroSection = () => {
  return (
    
      <div className="h-screen w-full flex flex-row md:flex-col lg:flex-col">
        
          <ReactTyped
            strings={["WELCOME!", "PICK YOUR POISON", "ARE YOU READY?"]}
            typeSpeed={60}
            backSpeed={30}
            showCursor={false}
            backDelay={2000}
            loop
            className="text-4xl md:text-5xl font-squid font-bold flex justify-center text-white"
          />
      </div>
  );
};

export default HeroSection;
/*
<div className="hero-section bg-gradient-to-r from-indigo-600 to-blue-500 text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our</h1>

        <ReactTyped
          strings={[
            "Here you can find anything",
            "Search for products",
            "Search for categories",
            "Search for brands",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
          className="text-3xl md:text-5xl font-bold text-yellow-300"
        />
        <p className="mt-6 text-xl md:text-2xl max-w-2xl mx-auto">
          Empowering businesses with cutting-edge technology and creative
          strategies.
        </p>
        <div className="mt-8">
          <a
            href="#learn-more"
            className="bg-white text-indigo-600 font-bold py-3 px-6 rounded-full text-lg hover:bg-yellow-300 hover:text-indigo-700 transition duration-300">
            Learn More
          </a>
        </div>

        <div>
          <button onClick={() => typed?.start()}>Start</button>
          <button onClick={() => typed?.stop()}>Stop</button>
          <button onClick={() => typed?.toggle()}>Toggle</button>
          <button onClick={() => typed?.destroy()}>Destroy</button>
          <button onClick={() => typed?.reset()}>Reset</button>
          <ReactTyped
            typedRef={setTyped}
            strings={["Here you can find anything"]}
            typeSpeed={40}
          />
        </div>
      </div>
    </div>
*/