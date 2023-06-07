import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import img1 from "../../../assets/galler-1.jpg";
import img2 from "../../../assets/gallery-2.jpg";
import img3 from "../../../assets/gallery-3.jpg";
import img4 from "../../../assets/gallery-4.jpg";
import img6 from "../../../assets/gallery-6.jpg";
import img8 from "../../../assets/gallery-8.jpg";

const Gallery = () => {
  return (
    <div className="mt-10 lg:px-0 px-10">
      <h3 className="text-center font-extrabold text-5xl mb-12">Our Samples</h3>
      <div className="lg:flex ">
        <PhotoProvider>
          <PhotoView src={img1}>
            <img
              src={img1}
              className="lg:w-[400px] w-full cursor-pointer lg:border-4 lg:my-4"
              alt=""
            ></img>
          </PhotoView>
        </PhotoProvider>

        <div className="border-4">
          <PhotoProvider>
            <PhotoView src={img2}>
              <img src={img2} className="lg:w-[320px] w-full cursor-pointer" alt=""></img>
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView src={img3}>
              <img src={img3} className="lg:w-[320px] w-full cursor-pointer" alt=""></img>
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="border-4">
          <PhotoProvider>
            <PhotoView src={img6}>
              <img src={img6} className="lg:w-[320px] w-full cursor-pointer" alt=""></img>
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView src={img8}>
              <img src={img8} className="lg:w-[320px] w-full cursor-pointer" alt=""></img>
            </PhotoView>
          </PhotoProvider>
        </div>
        <PhotoProvider>
          <PhotoView src={img4}>
            <img
              className="lg:w-[400px] w-full cursor-pointer lg:border-4 lg:my-4"
              src={img4}
              alt=""
            ></img>
          </PhotoView>
        </PhotoProvider>
      </div>
    </div>
  );
};

export default Gallery;
