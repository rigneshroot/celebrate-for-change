export const categories = [
  "Environment",
  "Education",
  "Older people",
  "Child rights",
  "Food & nutrition",
] as const;
export type Category = (typeof categories)[number];
export type Region = "all" | "india" | "usa" | "uk" | "global";
export type ActionType =
  "Donation page" | "Official website" | "Gift membership" | "Certificate shop";
export interface Charity {
  id: string;
  name: string;
  category: Category;
  regions: Region[];
  worksIn: string;
  description: string;
  url: string;
  source: string;
  actionType: ActionType;
  action: string;
  note?: string;
  checked: string;
  checkNote?: string;
}
// Dates record an actual editorial source check, never a runtime timestamp.
// See review/SOURCES.md for evidence and the limits of this check.
export const charities: Charity[] = [
  {
    id: "roundglass",
    name: "Roundglass Foundation",
    category: "Environment",
    regions: ["india"],
    worksIn: "Punjab, India",
    description:
      "Works with communities in Punjab on tree planting, waste management and regenerative agriculture.",
    url: "https://roundglassfoundation.org/donate/",
    source: "https://roundglassfoundation.org/donate/",
    actionType: "Donation page",
    action: "Donate on Roundglass",
    note: "The giving page offers several initiatives. Check which programme your gift will support.",
    checked: "2026-10-21",
  },
  {
    id: "pratham",
    name: "Pratham",
    category: "Education",
    regions: ["india"],
    worksIn: "India",
    description:
      "Supports children’s foundational learning, second-chance education for girls and women, and skills training for young people.",
    url: "https://www.pratham.org/donation/",
    source: "https://www.pratham.org/donation/",
    actionType: "Donation page",
    action: "Donate on Pratham",
    checked: "2026-10-21",
  },
  {
    id: "helpage",
    name: "HelpAge India",
    category: "Older people",
    regions: ["india"],
    worksIn: "India",
    description:
      "Provides healthcare, agecare and livelihood support for older people, alongside advocacy for their rights.",
    url: "https://www.helpageindia.org/donate/",
    source: "https://www.helpageindia.org/donate/",
    actionType: "Donation page",
    action: "Donate on HelpAge India",
    note: "Giving from outside India? Read the organisation’s international-giving guidance first.",
    checked: "2026-10-21",
  },
  {
    id: "team-everest",
    name: "Team Everest",
    category: "Education",
    regions: ["india"],
    worksIn: "India",
    description:
      "Organises volunteering opportunities and student sponsorship, including scholarships to support young people’s education.",
    url: "https://www.teameverest.ngo/",
    source: "https://www.teameverest.ngo/",
    actionType: "Official website",
    action: "Visit Team Everest",
    checked: "2026-10-21",
  },
  {
    id: "cry",
    name: "CRY – Child Rights and You",
    category: "Child rights",
    regions: ["india"],
    worksIn: "India",
    description:
      "Works on children’s education, health and nutrition, and protection from child labour and child marriage.",
    url: "https://www.cry.org/",
    source: "https://www.cry.org/",
    actionType: "Official website",
    action: "Visit CRY",
    checked: "2026-10-21",
  },
  {
    id: "akshaya-patra",
    name: "The Akshaya Patra Foundation",
    category: "Food & nutrition",
    regions: ["india"],
    worksIn: "India",
    description:
      "Provides school meals for children in government and government-aided schools through the PM POSHAN programme.",
    url: "https://www.akshayapatra.org/",
    source: "https://www.akshayapatra.org/",
    actionType: "Official website",
    action: "Visit Akshaya Patra",
    checked: "2026-10-21",
  },
  {
    id: "donorschoose",
    name: "DonorsChoose",
    category: "Education",
    regions: ["usa"],
    worksIn: "United States",
    description:
      "Connects donors with requests from public school teachers for classroom materials and learning resources.",
    url: "https://www.donorschoose.org/",
    source: "https://www.donorschoose.org/",
    actionType: "Official website",
    action: "Visit DonorsChoose",
    note: "Browse classroom projects on its website to choose a request to support.",
    checked: "2026-10-21",
  },
  {
    id: "teach-for-america",
    name: "Teach For America",
    category: "Education",
    regions: ["usa"],
    worksIn: "United States",
    description:
      "Recruits and supports teachers and education leaders working to expand opportunities for children.",
    url: "https://www.teachforamerica.org/donate",
    source: "https://www.teachforamerica.org/donate",
    actionType: "Donation page",
    action: "Donate on Teach For America",
    checked: "2026-10-21",
  },
  {
    id: "meals-on-wheels",
    name: "Meals on Wheels America",
    category: "Older people",
    regions: ["usa"],
    worksIn: "United States",
    description:
      "Supports a network of local programmes that provide meals, care and connection to older adults.",
    url: "https://www.mealsonwheelsamerica.org/donate/",
    source: "https://www.mealsonwheelsamerica.org/donate/",
    actionType: "Donation page",
    action: "Donate on Meals on Wheels",
    note: "This link supports the national organisation. Check its website if you want to give to a local programme.",
    checked: "2026-10-21",
  },
  {
    id: "wwf",
    name: "WWF-UK",
    category: "Environment",
    regions: ["uk", "global"],
    worksIn: "United Kingdom and worldwide",
    description:
      "Works to protect wildlife and habitats and address threats to nature, including through policy and conservation programmes.",
    url: "https://www.wwf.org.uk/donate",
    source: "https://www.wwf.org.uk/",
    actionType: "Donation page",
    action: "Donate on WWF-UK",
    checked: "2026-10-21",
    checkNote:
      "Official information and donation landing page reviewed. The link opens a choice of giving options; payment completion was not tested.",
  },
  {
    id: "teach-first",
    name: "Teach First",
    category: "Education",
    regions: ["uk"],
    worksIn: "England",
    description:
      "Recruits and develops teachers and school leaders in schools serving disadvantaged communities.",
    url: "https://www.teachfirst.org.uk/donate",
    source: "https://www.teachfirst.org.uk/donate",
    actionType: "Donation page",
    action: "Donate on Teach First",
    checked: "2026-10-21",
  },
  {
    id: "age-uk",
    name: "Age UK",
    category: "Older people",
    regions: ["uk"],
    worksIn: "United Kingdom",
    description:
      "Supports older people through information, advice, friendship services and campaigns on later life.",
    url: "https://www.ageuk.org.uk/get-involved/donate/",
    source: "https://www.ageuk.org.uk/get-involved/donate/",
    actionType: "Donation page",
    action: "Donate on Age UK",
    checked: "2026-10-21",
  },
  {
    id: "ocean-cleanup",
    name: "The Ocean Cleanup",
    category: "Environment",
    regions: ["global"],
    worksIn: "Ocean and river projects internationally",
    description:
      "Develops and operates systems to remove plastic from the ocean and intercept it in rivers.",
    url: "https://theoceancleanup.com/donate/",
    source: "https://theoceancleanup.com/donate/",
    actionType: "Donation page",
    action: "Donate on The Ocean Cleanup",
    checked: "2026-10-21",
  },
  {
    id: "planet-wild",
    name: "Planet Wild",
    category: "Environment",
    regions: ["global"],
    worksIn: "Nature restoration projects worldwide",
    description:
      "Funds rewilding projects, including habitat restoration and species protection, through memberships.",
    url: "https://planetwild.com/gift/learn-more",
    source: "https://planetwild.com/gift/learn-more",
    actionType: "Gift membership",
    action: "Explore Planet Wild gifts",
    note: "This is a paid gift membership. Read its terms and what the recipient receives before buying.",
    checked: "2026-10-21",
  },
  {
    id: "plastic-fischer",
    name: "Plastic Fischer",
    category: "Environment",
    regions: ["india", "global"],
    worksIn: "India and Indonesia",
    description:
      "Collects plastic from rivers and riverbanks to help prevent it from reaching the ocean.",
    url: "https://shop.plasticfischer.com/products/plastic-certificate",
    source: "https://plasticfischer.com/",
    actionType: "Certificate shop",
    action: "View Plastic Fischer certificates",
    note: "This is a product purchase. Check the certificate terms and whether you are choosing a one-time purchase or subscription.",
    checked: "2026-10-21",
  },
];
export const regions: { id: Region; label: string; href: string }[] = [
  { id: "all", label: "All locations", href: "/" },
  { id: "india", label: "India", href: "/india" },
  { id: "usa", label: "United States", href: "/usa" },
  { id: "uk", label: "United Kingdom", href: "/uk" },
  { id: "global", label: "International", href: "/global" },
];
export const categorySlug = (category: string) =>
  category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-");
export const charitiesIndia = charities.filter((c) =>
  c.regions.includes("india"),
);
export const charitiesUSA = charities.filter((c) => c.regions.includes("usa"));
export const charitiesUK = charities.filter((c) => c.regions.includes("uk"));
