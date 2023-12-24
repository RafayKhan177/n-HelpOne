const dummyCampaigns = [
  {
    id: "60a1e36b716d743b5f8ec6b3",
    description: "Help us protect and preserve the world's forests.",
    currentAmount: 50000,
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-12-31"),
    cause: "Environmental Conservation",
  },
  {
    id: "60a1e36b716d743b5f8ec6b4",
    description: "Support education for underprivileged children.",
    currentAmount: 20000,
    startDate: new Date("2023-02-15"),
    endDate: new Date("2023-11-30"),
    cause: "Education",
  },
  {
    id: "60a1e36b716d743b5f8ec6b5",
    cause: "Clean Water Initiative",
    description: "Provide access to clean and safe drinking water.",
    currentAmount: 100000,
    startDate: new Date("2023-03-10"),
    endDate: new Date("2023-09-30"),
  },
  {
    id: "60a1e36b716d743b5f8ec6b3",
    cause: "Save the Forests",
    description: "Help us protect and preserve the world's forests.",
    currentAmount: 50000,
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-12-31"),

    image:
      "https://images.unsplash.com/photo-1610500795224-fb86b02926d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "60a1e36b716d743b5f8ec6b4",
    cause: "Children's Education Fund",
    description: "Support education for underprivileged children.",
    currentAmount: 20000,
    startDate: new Date("2023-02-15"),
    endDate: new Date("2023-11-30"),
    image:
      "https://htmldemo.net/grant-foundation/grant-foundation/img/couses/couses-two.jpg",
  },
  {
    id: "60a1e36b716d743b5f8ec6b5",
    cause: "Clean Water Initiative",
    description: "Provide access to clean and safe drinking water.",
    currentAmount: 100000,
    startDate: new Date("2023-03-10"),
    endDate: new Date("2023-09-30"),
    cause: "Water Sanitation",
    image:
      "https://htmldemo.net/grant-foundation/grant-foundation/img/couses/couses-three.jpg",
  },
];

const accounts = [
  {
    bank: "Bank Al Habib",
    title: "JDC WELFARE ORGANIZATION",
    account_number: "1031-0081-011633-01-2",
    branch_address: "Main Water Pump Branch, Karachi",
    iban: "PK11BAHL1031008101163301",
    swift_code: "BAHL PKKA",
  },
  {
    bank: "Silk Bank",
    title: "JDC WELFARE FOUNDATION PAKISTAN",
    account_number: "0043 2010079357",
    branch_address: "PECHS Branch, Karachi",
    iban: "PK83SAUD0000432010079357",
    swift_code: "SAUDPKKA",
  },
  {
    bank: "Habib Metro Bank",
    title: "JDC WELFARE FOUNDATION OF PAKISTAN",
    account_number: "6014420301714180277",
    branch_address: "Main Water Pump Branch, Karachi",
    iban: "PK49MPBL0144067140180277",
    swift_code: "MPBLPKKA0144",
  },
  {
    bank: "United Bank Limited",
    title: "JDC WELFARE FOUNDATION OF PAKISTAN",
    branch_code: "1301",
    account_number: "273879738",
    branch_address: "Superhighway branch, Karachi",
    iban: "PK36 UNIL 0109 0002 7387 9738",
  },
  {
    bank: "Bank Al Falah Limited",
    title: "JDC WELFARE ORGANIZATION",
    account_number: "07581007341422",
    iban: "PK24ALFH0758001007341422",
    branch_address: "Nazimabad branch, Karachi",
    swift_code: "ALFHPKKA",
  },
  {
    bank: "Meezan Bank Limited",
    title: "JDC WELFARE FOUNDATION OF PAKISTAN",
    account_number: "01060105477134",
    iban: "PK14MEZN0001060105477134",
    swift_code: "MEZNPKKA",
  },
  {
    bank: "Mobilink (Jazz Cash)",
    title: "JDC WELFARE ORGANIZATION",
    account_number: "130265383",
  },
  {
    bank: "Soneri Bank Limited",
    title: "JDC WELFARE FOUNDATION OF PAKISTAN",
    account_number: "20009846701",
    iban: "PK45SONE0008220009846701",
  },
  {
    bank: "Bank Islami",
    title: "JDC WELFARE ORGANIZATION",
    account_number: "102700616540366",
    iban: "PK74BKIP0102700616540366",
    swift_code: "BKIPPKKA",
  },
  {
    bank: "Bank Alfalah Islamic",
    title: "JDC WELFARE ORGANIZATION",
    account_number: "5529-5001609082",
    branch_code: "5529",
    branch_address: "IBG North Nazimabad",
  },
];

const user = {
  username: "john_doe",
  email: "john.doe@example.com",
  fullName: "John Doe",
  bio: "Passionate about making a positive impact!",
  role: "Administrator",
};

const img =
  "https://img.freepik.com/free-photo/front-view-people-celebrating-christmas_23-2150977060.jpg?t=st=1703342271~exp=1703345871~hmac=30ae2a00240ff09a36456420d6bba6d444477941eeeed851732da8fc85d578eb&w=740";
const img2 =
  "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1703409300~exp=1703409900~hmac=037e84c5b806de83d69295aba605f9275839bc4cfa5d4020c1ff5c00cca74617";

const authorData = [
  {
    authorName: "John Doe",
    bio: "A passionate writer",

    authorName: "Jane Doe",
    bio: "Another passionate writer",
    img: [{ image: img }, { image: img }, { image: img }],
    vid: [
      { video: "https://www.youtube.com/embed/dpu2fCo5n50" },
      { video: "https://www.youtube.com/embed/dpu2fCo5n50" },
      { video: "https://www.youtube.com/embed/dpu2fCo5n50" },
    ],
  },
  {
    authorName: "John Doe",
    bio: "A passionate writer",

    authorName: "Jane Doe",
    bio: "Another passionate writer",
    img: [{ image: img }, { image: img }, { image: img }],
    vid: [
      { video: "https://www.youtube.com/embed/dpu2fCo5n50" },
      { video: "https://www.youtube.com/embed/dpu2fCo5n50" },
      { video: "https://www.youtube.com/embed/dpu2fCo5n50" },
    ],
  },
  {
    authorName: "John Doe",
    bio: "A passionate writer",

    authorName: "Jane Doe",
    bio: "Another passionate writer",
    img: [{ image: img }, { image: img }, { image: img }],
    vid: [
      { video: "https://www.youtube.com/embed/dpu2fCo5n50" },
      { video: "https://www.youtube.com/embed/dpu2fCo5n50" },
      { video: "https://www.youtube.com/embed/dpu2fCo5n50" },
    ],
  },
];

const projectsData = [
  {
    projectName: "Jane Doe",
    disc: "Another passionate writer",
    img: [{ image: img }, { image: img }, { image: img }],
    vid: [
      { video: "https://www.youtube.com/embed/dpu2fCo5n50" },
      { video: "https://www.youtube.com/embed/dpu2fCo5n50" },
      { video: "https://www.youtube.com/embed/dpu2fCo5n50" },
    ],
  },
  {
    projectName: "Jane Doe",
    disc: "Another passionate writer",
    img: [{ image: img }, { image: img }, { image: img }],
    vid: [
      { video: "https://www.youtube.com/embed/dpu2fCo5n50" },
      { video: "https://www.youtube.com/embed/dpu2fCo5n50" },
      { video: "https://www.youtube.com/embed/dpu2fCo5n50" },
    ],
  },
  {
    projectName: "Jane Doe",
    disc: "Another passionate writer",
    img: [{ image: img }, { image: img }, { image: img }],
    vid: [
      { video: "https://www.youtube.com/embed/dpu2fCo5n50" },
      { video: "https://www.youtube.com/embed/dpu2fCo5n50" },
      { video: "https://www.youtube.com/embed/dpu2fCo5n50" },
    ],
  },
  {
    projectName: "Jane Doe",
    disc: "Another passionate writer",
    img: [{ image: img }, { image: img }, { image: img }],
    vid: [
      { video: "https://www.youtube.com/embed/dpu2fCo5n50" },
      { video: "https://www.youtube.com/embed/dpu2fCo5n50" },
      { video: "https://www.youtube.com/embed/dpu2fCo5n50" },
    ],
  },
  {
    projectName: "Jane Doe",
    disc: "Another passionate writer",
    img: [{ image: img }, { image: img }, { image: img }],
    vid: [
      { video: "https://www.youtube.com/embed/dpu2fCo5n50" },
      { video: "https://www.youtube.com/embed/dpu2fCo5n50" },
      { video: "https://www.youtube.com/embed/dpu2fCo5n50" },
    ],
  },
];

export { dummyCampaigns, accounts, user, authorData, projectsData };
