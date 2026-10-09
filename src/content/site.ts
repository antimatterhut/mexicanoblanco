// All business content and copy for the site lives here.
// Placeholder strings are marked [PLACEHOLDER] with a // TODO: comment above them.

export const SITE_URL = "https://mexicanoblanco.com";

// Empty string = not selling yet. When set, OrderButton opens it in a new tab.
export const SHOP_URL = "";

export const business = {
  name: "Mexicano Blanco",
  // TODO: real tagline from owner
  tagline: "[PLACEHOLDER] Tagline goes here",
  // TODO: real short description from owner
  shortDescription:
    "[PLACEHOLDER] A short description of Mexicano Blanco and its salsas goes here.",
  // TODO: real contact email from owner
  email: "hello@example.com",
  // TODO: real Instagram handle from owner
  instagramHandle: "@placeholder",
  // TODO: real Instagram URL from owner
  instagramUrl: "https://www.instagram.com/placeholder",
};

export const socialLinks: { label: string; href: string }[] = [
  { label: "Instagram", href: business.instagramUrl },
];

export type Salsa = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heat: 1 | 2 | 3 | 4 | 5;
  ingredients: string[];
  image: { src: string; alt: string };
  shopPath?: string;
};

// TODO: real salsas (names, taglines, descriptions, heat, ingredients, photos) from owner
export const salsas: Salsa[] = [
  {
    slug: "placeholder-mild",
    name: "[PLACEHOLDER] Salsa One",
    tagline: "[PLACEHOLDER] A one-line tagline for the mild salsa.",
    description:
      "[PLACEHOLDER] A longer description of the mild salsa: flavor, texture, and how people like to eat it.",
    heat: 1,
    ingredients: ["[PLACEHOLDER] Ingredient A", "[PLACEHOLDER] Ingredient B"],
    image: {
      src: "/images/salsa-1.svg",
      alt: "[PLACEHOLDER] Placeholder illustration standing in for a jar of the mild salsa",
    },
  },
  {
    slug: "placeholder-medium",
    name: "[PLACEHOLDER] Salsa Two",
    tagline: "[PLACEHOLDER] A one-line tagline for the medium salsa.",
    description:
      "[PLACEHOLDER] A longer description of the medium salsa: flavor, texture, and how people like to eat it.",
    heat: 3,
    ingredients: ["[PLACEHOLDER] Ingredient A", "[PLACEHOLDER] Ingredient B"],
    image: {
      src: "/images/salsa-2.svg",
      alt: "[PLACEHOLDER] Placeholder illustration standing in for a jar of the medium salsa",
    },
  },
  {
    slug: "placeholder-hot",
    name: "[PLACEHOLDER] Salsa Three",
    tagline: "[PLACEHOLDER] A one-line tagline for the hot salsa.",
    description:
      "[PLACEHOLDER] A longer description of the hot salsa: flavor, texture, and how people like to eat it.",
    heat: 5,
    ingredients: ["[PLACEHOLDER] Ingredient A", "[PLACEHOLDER] Ingredient B"],
    image: {
      src: "/images/salsa-3.svg",
      alt: "[PLACEHOLDER] Placeholder illustration standing in for a jar of the hot salsa",
    },
  },
];

export type Location = {
  name: string;
  kind: "market" | "shop" | "event";
  area?: string;
  schedule?: string;
  url?: string;
};

// TODO: real locations from owner
export const locations: Location[] = [
  {
    name: "[PLACEHOLDER] Market Name",
    kind: "market",
    area: "[PLACEHOLDER] Neighborhood or city",
    schedule: "[PLACEHOLDER] Day and time",
  },
  {
    name: "[PLACEHOLDER] Shop Name",
    kind: "shop",
    area: "[PLACEHOLDER] Neighborhood or city",
  },
];

export const homeCopy = {
  // TODO: real hero copy from owner
  heroHeadline: "[PLACEHOLDER] Hero headline goes here",
  heroSubhead:
    "[PLACEHOLDER] A sentence or two introducing the salsas and what they taste like.",
  // TODO: real selling points from owner
  whyPoints: [
    {
      title: "[PLACEHOLDER] Reason one",
      body: "[PLACEHOLDER] A sentence about the first thing that sets these salsas apart.",
    },
    {
      title: "[PLACEHOLDER] Reason two",
      body: "[PLACEHOLDER] A sentence about the second thing that sets these salsas apart.",
    },
    {
      title: "[PLACEHOLDER] Reason three",
      body: "[PLACEHOLDER] A sentence about the third thing that sets these salsas apart.",
    },
  ],
  // TODO: real story teaser from owner
  storyTeaser:
    "[PLACEHOLDER] A short teaser that leads into the full story page.",
  // TODO: real section copy from owner
  meetSalsasLabel: "Meet the salsas",
  salsasEyebrow: "[PLACEHOLDER] The lineup",
  salsasHeading: "[PLACEHOLDER] Our salsas",
  salsasIntro: "[PLACEHOLDER] A line introducing the range, from mild to hot.",
  whyEyebrow: "[PLACEHOLDER] Why us",
  whyHeading: "Why Mexicano Blanco",
  storyEyebrow: "Our story",
  storyHeading: "[PLACEHOLDER] Where it all started",
  storyButtonLabel: "Read our story",
  closingHeading: "[PLACEHOLDER] Ready to taste?",
  closingBody: "[PLACEHOLDER] A short line inviting people to try the salsas.",
};

export const storyCopy = {
  // TODO: real pull quote from owner
  pullQuote: "[PLACEHOLDER] A memorable line from the founder goes here.",
  // TODO: real story sections from owner
  sections: [
    {
      heading: "[PLACEHOLDER] Where the name came from",
      body: "[PLACEHOLDER] The story behind the name Mexicano Blanco goes here.",
    },
    {
      heading: "[PLACEHOLDER] How the recipes started",
      body: "[PLACEHOLDER] How the first recipes came about goes here.",
    },
    {
      heading: "[PLACEHOLDER] What makes the salsas different",
      body: "[PLACEHOLDER] What sets the salsas apart goes here.",
    },
  ],
};

export const heroImage = {
  src: "/images/hero.svg",
  // TODO: real hero photo and alt text from owner
  alt: "[PLACEHOLDER] Placeholder illustration standing in for the hero photo",
};

export const storyImage = {
  src: "/images/story.svg",
  // TODO: real story photo and alt text from owner
  alt: "[PLACEHOLDER] Placeholder illustration standing in for a photo of the founder",
};

export type HeatLabel = "Mild" | "Medium" | "Hot";

export function heatLabel(heat: number): HeatLabel {
  if (heat <= 2) return "Mild";
  if (heat === 3) return "Medium";
  return "Hot";
}

// Site chrome copy (navigation, button labels, a11y strings).
export const navLinks = [
  { label: "Salsas", href: "/salsas" },
  { label: "Our Story", href: "/our-story" },
  { label: "Find Us", href: "/find-us" },
];

export const uiCopy = {
  skipToContent: "Skip to content",
  orderLabel: "Order",
  comingSoonLabel: "Coming soon",
  openMenu: "Menu",
  closeMenu: "Close",
  mainNavLabel: "Main",
  footerNavLabel: "Footer",
  stubNote: "Coming in a later phase.",
  heatLabelPrefix: "Heat",
};

export const stubPages = {
  home: { title: business.name },
  salsas: { title: "Salsas" },
  ourStory: { title: "Our Story" },
  findUs: { title: "Find Us" },
};
