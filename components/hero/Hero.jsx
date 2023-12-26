"use client";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Image, Show } from "@chakra-ui/react";
import { Button } from "@mantine/core";
// import Image from "next/image";

export default function Hero() {
  const img1 =
    "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/DDAl-Bashir%20Welfare%20excels%20in%20disaster%20management%2C%20swiftly%20responding%20to%20crises%20with%20effective%20relief%20e.png";
  const img3 =
    "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/WhatsApp%20Image%202023-12-25%20at%2018.29.36_01839d04.jpg";
  const img4 =
    "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/WhatsApp%20Image%202023-12-24%20at%2018.36.59_6241d33c.jpg";
  const imgP1 =
    "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/Mobo1AL-BASHIR%20WEL%20ARE.png";

  return (
    <>
      <Show breakpoint="(min-width: 1000px)">
        <Carousel autoPlay={true} infiniteLoop={true}>
          <div>
            <Image
              src={img4}
              alt="hero-image"
              width={900}
              height={1500}
              style={{
                width: "100vw",
                height: "90vh",
                objectFit: "cover",
                maxHeight: "70vh",
              }}
            />
          </div>

          <div>
            <Image
              src={img3}
              alt="hero-image"
              width={900}
              height={1500}
              style={{
                width: "100vw",
                height: "90vh",
                objectFit: "cover",
                maxHeight: "70vh",
              }}
            />
          </div>
          <div>
            <Image
              src={img1}
              alt="hero-image"
              width={900}
              height={1500}
              style={{
                width: "100vw",
                height: "90vh",
                objectFit: "cover",
                maxHeight: "70vh",
              }}
            />
          </div>
        </Carousel>
      </Show>

      <Show breakpoint="(max-width: 1000px)">
        <Carousel autoPlay={true} infiniteLoop={true}>
          <div>
            <Image
              src={imgP1}
              alt="hero-image"
              width={900}
              height={1500}
              style={{
                width: "100vw",
                height: "53vh",
                objectFit: "cover",
                maxHeight: "70vh",
              }}
            />
          </div>
        </Carousel>
      </Show>
    </>
  );
}
