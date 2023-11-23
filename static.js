const dummyCampaigns = [
  {
    _id: "60a1e36b716d743b5f8ec6b3",
    name: "Save the Forests",
    description: "Help us protect and preserve the world's forests.",
    goalAmount: 50000,
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-12-31"),
    cause: "Environmental Conservation",
    image: "https://example.com/save-the-forests.jpg",
    donationProgress: 30,
  },
  {
    _id: "60a1e36b716d743b5f8ec6b4",
    name: "Children's Education Fund",
    description: "Support education for underprivileged children.",
    goalAmount: 20000,
    startDate: new Date("2023-02-15"),
    endDate: new Date("2023-11-30"),
    cause: "Education",
    image: "https://example.com/children-education-fund.jpg",
    donationProgress: 15,
  },
  {
    _id: "60a1e36b716d743b5f8ec6b5",
    name: "Clean Water Initiative",
    description: "Provide access to clean and safe drinking water.",
    goalAmount: 100000,
    startDate: new Date("2023-03-10"),
    endDate: new Date("2023-09-30"),
    cause: "Water Sanitation",
    image: "https://example.com/clean-water-initiative.jpg",
    donationProgress: 60,
  },
  // Add more campaigns as needed
];

const categories = [
  {
    label: "Children to get education",
    image:
      "https://images.unsplash.com/photo-1610500795224-fb86b02926d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    label: "Bring Electric and Light",
    image:
      "https://htmldemo.net/grant-foundation/grant-foundation/img/couses/couses-two.jpg",
  },
  {
    label: "Water carrier items",
    image:
      "https://htmldemo.net/grant-foundation/grant-foundation/img/couses/couses-three.jpg",
  },
];

export { dummyCampaigns, categories };
