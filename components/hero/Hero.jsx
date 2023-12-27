"use client";
import { Image, Show } from "@chakra-ui/react";
import "react-awesome-slider/dist/styles.css";
import AwesomeSlider from "react-awesome-slider";

const imageUrls = [
  "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/desk%20c/1.png",
  "https://github.com/RafayKhan177/Raw-Images/blob/main/3.png?raw=true",
  "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/DDAl-Bashir%20Welfare%20excels%20in%20disaster%20management%2C%20swiftly%20responding%20to%20crises%20with%20effective%20relief%20e.png",
  "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/5.png",
];

const mobileImageUrls = [
  "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/mobo%20c/1.png",
  "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/4.png",
  "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/6.png",
  "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/Mobo1AL-BASHIR%20WEL%20ARE.png",
];

const Hero = () => {
  const renderSliderItem = (url, h) => (
    <Image
      key={url}
      data-src={url}
      src={url}
      alt="hero-image"
      style={{
        width: "100%",
        height: h,
        // objectFit: "contain",
      }}
    />
  );

  return (
    <section style={{ marginBottom: "3rem" }}>
      <Show breakpoint="(min-width: 1000px)">
        <AwesomeSlider style={{ height: "70vh" }}>
          {imageUrls.map((url) => renderSliderItem(url, "70vh"))}
        </AwesomeSlider>
      </Show>
      <Show breakpoint="(max-width: 1000px)">
        <AwesomeSlider style={{ height: "51vh" }}>
          {mobileImageUrls.map((url) => renderSliderItem(url, "51vh"))}
        </AwesomeSlider>
      </Show>
    </section>
  );
};

export default Hero;
