import { Category } from "../../types/categories";

export const categories: Category[] = [
  {
    title: "All products",
    categoryName: "all",
    linkTo: "/products",
    categoryBar: true,
  },
  {
    title: "Home appliances",
    categoryName: "home",
    linkTo: "/products/home",
    categoryBar: true,
  },
  {
    title: "Kitchen appliances",
    categoryName: "kitchen",
    linkTo: "/products/kitchen",
    categoryBar: true,
  },
  {
    title: "Audio & video",
    categoryName: "audio-video",
    linkTo: "/products/audio-video",
    categoryBar: true,
  },
  {
    title: "Gadgets",
    categoryName: "gadgets",
    linkTo: "/products/gadgets",
    categoryBar: true,
  },
  {
    title: "Mobiles",
    categoryName: "mobiles",
    linkTo: "/products/mobiles",
    categoryBar: false,
  },
  {
    title: "New arrivals",
    categoryName: "new",
    linkTo: "/products/new",
    categoryBar: true,
  },
  {
    title: "Today's deals",
    categoryName: "today-deal",
    linkTo: "/products/today-deal",
    categoryBar: true,
  },
];
