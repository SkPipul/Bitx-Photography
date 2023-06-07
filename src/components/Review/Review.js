import React from "react";
import { AiFillStar } from "react-icons/ai";

const Review = () => {
  return (
    <div className="px-10 mt-20">
        <h2 className="text-5xl font-extrabold text-center mb-10">Reviews</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        <div className="bg-black md:px-14 px-10 py-8 rounded-sm">
          <div className="flex items-center justify-between">
            <span className="flex items-center">
              <img
                className="rounded-full w-10"
                src="https://victorthemes.com/themes/rouen/wp-content/uploads/2020/10/Team-01.jpg"
                alt=""
              />
              <h4 className="font-bold ml-2 text-white">Carol Barnes</h4>
            </span>
            <span className="flex text-yellow-600">
              <AiFillStar className="text-xl" />
              <AiFillStar className="text-xl" />
              <AiFillStar className="text-xl" />
              <AiFillStar className="text-xl" />
              <AiFillStar className="text-xl" />
            </span>
          </div>
          <div>
            <p className="mt-4 text-white">
              It is a great website for learning Photography skills. I loved
              this website very much
            </p>
          </div>
        </div>
        <div className="bg-black md:px-14 px-10 py-8 rounded-sm">
          <div className="flex items-center justify-between">
            <span className="flex items-center">
              <img
                className="rounded-full w-10"
                src="https://victorthemes.com/themes/rouen/wp-content/uploads/2020/10/Team-01.jpg"
                alt=""
              />
              <h4 className="font-bold ml-2 text-white">Carol Barnes</h4>
            </span>
            <span className="flex text-yellow-600">
              <AiFillStar className="text-xl" />
              <AiFillStar className="text-xl" />
              <AiFillStar className="text-xl" />
              <AiFillStar className="text-xl" />
              <AiFillStar className="text-xl" />
            </span>
          </div>
          <div>
            <p className="mt-4 text-white">
              It is a great website for learning Photography skills. I loved
              this website very much
            </p>
          </div>
        </div>
        <div className="bg-black md:px-14 px-10 py-8 rounded-sm">
          <div className="flex items-center justify-between">
            <span className="flex items-center">
              <img
                className="rounded-full w-10"
                src="https://victorthemes.com/themes/rouen/wp-content/uploads/2020/10/Team-01.jpg"
                alt=""
              />
              <h4 className="font-bold ml-2 text-white">Carol Barnes</h4>
            </span>
            <span className="flex text-yellow-600">
              <AiFillStar className="text-xl" />
              <AiFillStar className="text-xl" />
              <AiFillStar className="text-xl" />
              <AiFillStar className="text-xl" />
              <AiFillStar className="text-xl" />
            </span>
          </div>
          <div>
            <p className="mt-4 text-white">
              It is a great website for learning Photography skills. I loved
              this website very much
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
