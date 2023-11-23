"use client";

import { accounts } from "static";
import {
  AllBankDetails,
  CampaignDetails,
  CustomHero,
  PageHeader,
} from "../../../../components/Index";

export default function Page() {
  const campaign = {
    id: "60a1e36b716d743b5f8ec6b3",
    name: "Save the Forests",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga placeat sapiente suscipit eveniet dicta, ipsa aliquam laudantium culpa repellat nulla. Natus qui expedita nihil animi sed incidunt eum corrupti dolor velit ipsa officia eligendi, fugiat porro nulla fuga, at aut labore earum minima quidem. Non, aperiam quaerat! Voluptatum rem facilis maxime, dicta delectus soluta voluptas tempore itaque laudantium, ipsa suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic reprehenderit aliquam omnis ad! Omnis molestias hic delectus beatae quibusdam odit asperiores, saepe vero voluptatum officiis. Eaque eligendi quisquam ipsam corporis dolore quod adipisci eius exercitationem voluptate. Aliquid blanditiis debitis repellat?",
    currentAmount: 50000,
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-12-31"),
    cause: "Environmental Conservation",
    image:
      "https://images.unsplash.com/photo-1682687219573-3fd75f982217?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <section style={{ width: "100%" }}>
      <PageHeader text="In a world of uncertainty, your generosity is a beacon of hope." />
      <CustomHero />

      <CampaignDetails campaign={campaign} />

      <AllBankDetails accounts={accounts} />
    </section>
  );
}
