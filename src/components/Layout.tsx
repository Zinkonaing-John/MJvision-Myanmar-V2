import React from "react";

// For src/assets folder (make sure the images are in this folder)

// OR for public/images folder (no need for import)
const images = [
  "/images/Home1.jpg", // Use this if images are in the public/images folder
  "/images/Home2.jpg",
  "/images/Home3.jpg",
  "/images/Home6.jpg",
];

const ImageTextLayout = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p-6">
      {/* Image 1 */}
      <div className="relative">
        <img
          src={images[0]}
          alt="Image 1"
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-left items-left bg-black bg-opacity-50 text-white p-4 rounded-lg">
          <h3 className="text-2xl font-bold">Title 1</h3>
          <h4 className="text-xl mb-2">Subtitle 1</h4>
          <p className="text-sm text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      {/* Image 2 */}
      {/* <div className="relative">
        <img
          src={images[1]}
          alt="Image 2"
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-left items-left bg-black bg-opacity-50 text-white p-4 rounded-lg">
          <h3 className="text-2xl font-bold">Title 2</h3>
          <h4 className="text-xl mb-2">Subtitle 2</h4>
          <p className="text-sm text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div> */}

      {/* Image 3 */}
      <div className="relative">
        <img
          src={images[2]}
          alt="Image 3"
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-left items-left bg-black bg-opacity-50 text-white p-4 rounded-lg">
          <h3 className="text-2xl font-bold">Title 3</h3>
          <h4 className="text-xl mb-2">Subtitle 3</h4>
          <p className="text-sm text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      {/* Image 4 */}
      <div className="relative">
        <img
          src={images[3]}
          alt="Image 4"
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-left items-left bg-black bg-opacity-50 text-white p-4 rounded-lg">
          <h3 className="text-2xl font-bold">Title 4</h3>
          <h4 className="text-xl mb-2">Subtitle 4</h4>
          <p className="text-sm text-left ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageTextLayout;
