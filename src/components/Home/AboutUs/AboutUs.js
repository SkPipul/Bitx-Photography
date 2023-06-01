import React from "react";
import img1 from "../../../assets/About-1.webp";

const AboutUs = () => {
  return (
    <div className="border-t-2 border-black mt-20">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 px-10 mt-10">
      <div className="mt-28">
        <h3 className="text-5xl font-bold mb-10">We Live For Passion</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et do sunt explicabo. Nemo enim
          ipsam et dolore magnam aliquam quaerat voluptatem.
          <br/>
          Lorem ipsum dolor
          sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et do sunt explicabo. Nemo enim ipsam et dolore
          magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <div>
        <img className="w-full" src={img1} alt=""></img>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
