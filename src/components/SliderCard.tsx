"use client";
import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import styled from "styled-components";

// Define styled-components
const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 35em;
  display: flex;
  align-items: center;
`;

const Card = styled.div`
  width: 20em;
  height: 90%;
  background-color: #fff;
  border-radius: 2em;
  box-shadow: 0 0 2em rgba(0, 0, 0, 0.2);
  padding: 2em 1em;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 2em;
`;

const CardImage = styled.div`
  width: 10em;
  height: 10em;
  border-radius: 50%;
  border: 5px solid #9176ff;
  padding: 3px;
  margin-bottom: 2em;
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CardTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  position: relative;
  top: 0.2em;
`;

const CardName = styled.span`
  color: #9176ff;
`;

const CardText = styled.p`
  text-align: center;
  font-size: 1.1rem;
  margin: 1em 0;
`;

const CardButton = styled.button`
  background-color: #9176ff;
  color: #fff;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  border: none;
  padding: 0.5em;
  border-radius: 0.5em;
  margin-top: 0.5em;
  cursor: pointer;
`;

interface CardProps {
  image: string;
  title: string;
  name: string;
  description: string;
}

const CardItem: React.FC<CardProps> = ({ image, title, name, description }) => (
  <Card className="swiper-slide">
    <CardImage>
      <img src={image} alt="card image" />
    </CardImage>

    <CardContent>
      <CardTitle>{title}</CardTitle>
      <CardName>{name}</CardName>
      <CardText>{description}</CardText>
      <CardButton>View More</CardButton>
    </CardContent>
  </Card>
);

const CardSlider: React.FC = () => {
  useEffect(() => {
    new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }, []);

  return (
    <Section className="swiper mySwiper">
      <Wrapper className="swiper-wrapper">
        <CardItem
          image="images/user1.jpg"
          title="Web Designer"
          name="Vanessa Martinez"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore provident non tempora odio est sunt, ipsum"
        />
        <CardItem
          image="images/user2.jpg"
          title="UI Designer"
          name="Sarah Bowen"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore provident non tempora odio est sunt, ipsum"
        />
        <CardItem
          image="images/user3.jpg"
          title="Web Developer"
          name="David Murphy"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore provident non tempora odio est sunt, ipsum"
        />
        <CardItem
          image="images/user4.jpg"
          title="Mobile Designer"
          name="Kelsey West"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore provident non tempora odio est sunt, ipsum"
        />
      </Wrapper>
    </Section>
  );
};

export default CardSlider;
