"use client";

import { Image, Show } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const imageUrls = [
  "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/desk%20c/1.png",
  "https://github.com/RafayKhan177/Raw-Images/blob/main/3.png?raw=true",
  "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/DDAl-Bashir%20Welfare%20excels%20in%20disaster%20management%2C%20swiftly%20responding%20to%20crises%20with%20effective%20relief%20e.png",
  "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/5.png",
];

const mobileImageUrls = [
  "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/Mobo1AL-BASHIR%20WEL%20ARE.png",
  "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/mobo%20c/1.png",
  "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/mobo%20c/2.png",
  "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/4.png",
];

const Hero = () => {
  const renderCarouselItem = (url, h) => (
    <div key={url}>
      <Image
        src={url}
        alt="hero-image"
        width={900}
        height={1500}
        style={{
          width: "100vw",
          height: h,
          maxHeight: "80vh",
        }}
      />
    </div>
  );

  return (
    <>
      <Show breakpoint="(min-width: 1000px)">
        <Carousel autoPlay infiniteLoop>
          {imageUrls.map((url) => renderCarouselItem(url, "70vh"))}
        </Carousel>
      </Show>

      <Show breakpoint="(max-width: 1000px)">
        <Carousel autoPlay infiniteLoop>
          {mobileImageUrls.map((url) => renderCarouselItem(url, "50vh"))}
        </Carousel>
      </Show>
    </>
  );
};

export default Hero;
