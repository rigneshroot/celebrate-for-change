// data/charities.ts

export type Category = 'Environment' | 'Education' | 'Elderly Support';

export interface Charity {
  name: string;
  url: string;
  category: Category;
  description?: string;
  image?: string;
}

export const charitiesUSA: Charity[] = [
  {
    name: "The Ocean Cleanup",
    category: "Environment",
    url: "https://theoceancleanup.com/donate/",
    image: "/images/charities/ocean_cleanup.png",
    description: "Developing advanced technologies to rid the world's oceans of plastic."
  },
  {
    name: "Planet Wild",
    category: "Environment",
    url: "https://planetwild.com/gift/learn-more",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop",
    description: "Funding high-impact nature restoration projects to protect global biodiversity."
  },
  {
    name: "Plastic Fischer",
    category: "Environment",
    url: "https://shop.plasticfischer.com/products/plastic-certificate",
    image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=2070&auto=format&fit=crop",
    description: "Stopping plastic pollution in rivers before it reaches our oceans."
  },
  {
    name: "Donors Choose",
    category: "Education",
    url: "https://www.donorschoose.org/",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
    description: "Helping teachers get the resources they need for their students to thrive."
  },
  {
    name: "Teach For America",
    category: "Education",
    url: "https://www.teachforamerica.org/donate",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop",
    description: "Expanding educational opportunities in underserved communities."
  },
  {
    name: "Meals on Wheels America",
    category: "Elderly Support",
    url: "https://www.mealsonwheelsamerica.org/donate/",
    image: "/images/charities/meals_on_wheels.png",
    description: "Supporting the health and dignity of seniors through nutrition."
  },
];

export const charitiesIndia: Charity[] = [
  {
    name: "Roundglass Foundation",
    category: "Environment",
    url: "https://roundglassfoundation.org/donate/",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    description: "Building sustainable and vibrant rural communities through reforestation."
  },
  {
    name: "Pratham",
    category: "Education",
    url: "https://www.pratham.org/donation/",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop",
    description: "Improving the quality of education for millions of children."
  },
  {
    name: "HelpAge India",
    category: "Elderly Support",
    url: "https://www.helpageindia.org/donate/",
    image: "/images/charities/helpage_india.png",
    description: "Advocating for the rights and well-being of disadvantaged older persons."
  },
];

export const charitiesUK: Charity[] = [
  {
    name: "WWF UK",
    category: "Environment",
    url: "https://www.wwf.org.uk/donate",
    image: "https://images.unsplash.com/photo-1550358864-518f202c02ba?q=80&w=2070&auto=format&fit=crop",
    description: "Sustaining the natural world and protecting endangered species for a vibrant, wild future."
  },
  {
    name: "Teach First",
    category: "Education",
    url: "https://www.teachfirst.org.uk/donate",
    image: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=2070&auto=format&fit=crop",
    description: "Empowering children through exceptional education and quality teaching."
  },
  {
    name: "Age UK",
    category: "Elderly Support",
    url: "https://www.ageuk.org.uk/get-involved/donate/",
    image: "/images/charities/age_uk.png",
    description: "Ensuring dignity, companionship, and expert support for potential-filled later lives."
  },
];