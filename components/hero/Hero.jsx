"use client";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Image } from "@chakra-ui/react";
// import Image from "next/image";

export default function Hero() {
  const img1 =
    "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/WhatsApp%20Image%202023-12-25%20at%2017.26.53_30ba4100.jpg";
  const img2 =
    "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/WhatsApp%20Image%202023-12-25%20at%2017.28.30_a063dad9.jpg";

  return (
    <Carousel>
      <div>
        <Image
          src={img1}
          alt="hero-image"
          width={900}
          height={900}
          style={{ width: "100vw", height: "auto", maxHeight: "70vh" }}
        />
      </div>
      <div>
        <Image
          src={img2}
          alt="hero-image"
          width={900}
          height={900}
          style={{ width: "100vw", height: "auto", maxHeight: "70vh" }}
        />
      </div>
      <div>
        <Image
          src={"/hero.jpg"}
          alt="hero-image"
          width={900}
          height={900}
          style={{ width: "100vw", height: "auto", maxHeight: "70vh" }}
        />
      </div>
    </Carousel>
  );
}
