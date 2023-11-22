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
    label: "Customer Support",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "User Guides",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Sales Questions",
    image:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Customer Support",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
];

export { dummyCampaigns, categories };
