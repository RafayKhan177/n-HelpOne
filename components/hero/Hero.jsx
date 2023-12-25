"use client";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default function Hero() {
  return (
    <Carousel>
      <div>
        <Image
          src={"/hero.jpg"}
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
