"use client";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Image } from "@chakra-ui/react";
// import Image from "next/image";

export default function Hero() {
  const img1 =
    "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/WhatsApp%20Image%202023-12-25%20at%2019.50.50_527cb3b7.jpg";
  // const img2 =
  //   "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/WhatsApp%20Image%202023-12-25%20at%2017.28.30_a063dad9.jpg";
  const img3 =
    "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/WhatsApp%20Image%202023-12-25%20at%2018.29.36_01839d04.jpg";
  const img4 =
    "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/WhatsApp%20Image%202023-12-24%20at%2018.36.59_6241d33c.jpg";

  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div>
        <Image
          src={img4}
          alt="hero-image"
          width={900}
          height={1500}
          style={{ width: "100vw", height: "55vh",objectFit:'cover', maxHeight: "70vh" }}
        />
      </div>

      <div>
        <Image
          src={img3}
          alt="hero-image"
          width={900}
          height={1500}
          style={{ width: "100vw", height: "55vh",objectFit:'cover', maxHeight: "70vh" }}
        />
      </div>
      <div>
        <Image
          src={img1}
          alt="hero-image"
          width={900}
          height={1500}
          style={{ width: "100vw", height: "55vh",objectFit:'cover', maxHeight: "70vh" }}
        />
      </div>
    </Carousel>
  );
}
