"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

interface CardProps {
  title: string;
  name: string;
  image: string;
  description: string;
}

const cards: CardProps[] = [
  {
    title: "Web Designer",
    name: "Vanessa Martinez",
    image: "/images/user1.jpg",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    title: "UI Designer",
    name: "Sarah Bowen",
    image: "/images/user2.jpg",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    title: "Web Developer",
    name: "David Murphy",
    image: "/images/user3.jpg",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    title: "Mobile Designer",
    name: "Kelsey West",
    image: "/images/user4.jpg",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
];

const CardSlider: React.FC = () => {
  return (
    <div className="pt-20 flex justify-center items-center h-[80vh] bg-gray-100">
      {" "}
      {/* Added padding-top */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        slidesPerView={3} // Display 3 slides at once
        centeredSlides={false} // Disable centered slides
        spaceBetween={10} // Reduce spacing between slides
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="w-72 h-[80%] bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center m-2">
              <div className="w-36 h-36 rounded-full border-4 border-purple-500 mb-4">
                <img
                  src={card.image}
                  alt="card image"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium">{card.title}</h3>
                <span className="text-purple-500">{card.name}</span>
                <p className="text-center text-base mt-3 text-gray-600">
                  {card.description}
                </p>
                <button className="bg-purple-500 text-white text-sm font-semibold uppercase px-4 py-2 rounded mt-3">
                  View More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
