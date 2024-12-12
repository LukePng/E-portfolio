import React from "react";
import photo0 from "../../assets/photo_catalogue_0.jpg";
import photo1 from "../../assets/photo_catalogue_1.jpg";
import photo2 from "../../assets/photo_catalogue_2.jpg";
import photo3 from "../../assets/photo_catalogue_3.jpg";
import photo4 from "../../assets/photo_catalogue_4.jpg";
import photo5 from "../../assets/photo_catalogue_5.jpg";

function Photography({ scrollPosition }) {
  
  const pictures = [
    photo0, photo1, photo2, photo3, photo4, photo5
  ]

  return (
    <section id="home" className="h-screen bg-gray-800 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-10">Capturing the moments</h1>
        <p>
          The experience may only last momentarily, but the moments are forever set in stone through my camera. This is why I love photography.
        </p>
        <div className="m-5">
            PLACEHOLDER FOR PICTURE CATALOGUE

        </div>
        <p>
          Pictures taken with my Sony a6300 camera with Sigma lens
        </p>
      </div>
    </section>
  );
}

export default Photography;
