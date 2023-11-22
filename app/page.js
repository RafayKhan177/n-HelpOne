"use client";

import { Faq, Categories, Carousel } from "../components/Index";
import { categories } from "../static";

export default function page() {
  return (
    <div>
      <Carousel />
      <Categories categories={categories} />
      <Faq />
    </div>
  );
}
