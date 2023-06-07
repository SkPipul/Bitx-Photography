import React from "react";
import { BsShopWindow } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";

const About = () => {
  return (
      <div className="mt-20">
        <h2 className="text-5xl font-extrabold text-center mb-10">Let’s Work Together</h2>
        <div className="card w-full bg-black text-white rounded-none">
      <div className="card-body py-14">
        <div className="lg:flex items-center justify-around">
          <div className="flex items-center lg:mb-0 mb-4 md:justify-center">
            <span className="mr-2 text-xl">
              <BsShopWindow></BsShopWindow>
            </span>
            <div>
              <p className="text-sm">We are open monday-friday</p>
              <h3 className="text-2xl font-bold">7:00 am - 9:00 pm</h3>
            </div>
          </div>
          <div className="flex items-center lg:mb-0 mb-4 md:justify-center">
            <span className="mr-2 text-2xl">
              <FiPhoneCall></FiPhoneCall>
            </span>
            <div>
              <p className="text-sm">Have a question?</p>
              <h3 className="text-xl font-bold">+2544 233 2348</h3>
            </div>
          </div>
          <div className="flex items-center lg:mb-0 mb-4 md:justify-center">
            <span className="mr-2 text-2xl">
              <MdLocationPin></MdLocationPin>
            </span>
            <div>
              <p className="text-sm">Need any help? our address</p>
              <h3 className="text-xl font-bold">
                Bakalia Chittagong, Bangladesh
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
