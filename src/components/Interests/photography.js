import photo0 from "../../assets/images/photo_catalogue_0.jpg";
import photo1 from "../../assets/images/photo_catalogue_1.jpg";
import photo2 from "../../assets/images/photo_catalogue_2.jpg";
import photo3 from "../../assets/images/photo_catalogue_3.jpg";
import photo4 from "../../assets/images/photo_catalogue_4.jpg";
import photo5 from "../../assets/images/photo_catalogue_5.jpg";
import React from "react";

function Photography({ scrollPosition }) {
  const pictures = [
    photo0, photo1, photo2, photo3, photo4, photo5
  ];

  return (
    <section id="photo" className="h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-10">Capturing the moments</h1>
        <p>
          The experience may only last momentarily, but the moments are forever set in stone through my camera. This is why I love photography.
        </p>
        <div className="w-full py-16">
          TEMPORARY PLACEHOLDER FOR PHOTO CATALOGUE
          {/* <div className="flex overflow-x-auto space-x-4 px-8">
            {pictures.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-64 h-48">
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </div> */}
        </div>
        <p>
          Pictures taken with my Sony A6300 camera with Sigma lens
        </p>
      </div>
    </section>
  );
}

export default Photography;

