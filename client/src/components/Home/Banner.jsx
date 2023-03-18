import React from "react";
import { bannerData } from "../../constants/Data";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { styled } from "@mui/material";

const Image = styled("img")({
  width: "100vw",
  height: "280px",
});

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  return (
    <Carousel
      responsive={responsive}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
      infinite={true}
      swipeable={false}
      draggable={false}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      slidesToSlide={1}
    >
      {bannerData.map((e) => {
        return <Image src={e.url} alt="Banner" />;
      })}
    </Carousel>
  );
};

export default Banner;
