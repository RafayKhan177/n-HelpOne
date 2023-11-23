import {
  Faq,
  Categories,
  Hero,
  EmailBanner,
  PageHeader,
  About,
} from "../components/Index";
import { categories } from "../static";

export default function page() {
  return (
    <div>
      <PageHeader text="In a world of uncertainty, your generosity is a beacon of hope." />
      <Hero />

      <PageHeader text="Our Causes" color="#edf6f9" />
      <Categories categories={categories} />

      <About />
      {/* <PageHeader text="WORK"  color="#1d3557" /> */}
      <Faq />

      {/* <PageHeader text="WORK"  color="#e5989b" /> */}
      <EmailBanner />
    </div>
  );
}
