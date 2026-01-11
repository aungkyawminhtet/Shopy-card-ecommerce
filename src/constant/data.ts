//for desktop images
import des1 from "../assets/images/image-baklava-desktop.jpg";
import des2 from "../assets/images/image-brownie-desktop.jpg";
import des3 from "../assets/images/image-cake-desktop.jpg";
import des4 from "../assets/images/image-creme-brulee-desktop.jpg";
import des5 from "../assets/images/image-macaron-desktop.jpg";
import des6 from "../assets/images/image-meringue-desktop.jpg";
import des7 from "../assets/images/image-panna-cotta-desktop.jpg";
import des8 from "../assets/images/image-waffle-desktop.jpg";
import des9 from "../assets/images/image-tiramisu-desktop.jpg";

//for mobile images
import mob1 from "../assets/images/image-baklava-mobile.jpg";
import mob2 from "../assets/images/image-brownie-mobile.jpg";
import mob3 from "../assets/images/image-cake-mobile.jpg";
import mob4 from "../assets/images/image-creme-brulee-mobile.jpg";
import mob5 from "../assets/images/image-macaron-mobile.jpg";
import mob6 from "../assets/images/image-meringue-mobile.jpg";
import mob7 from "../assets/images/image-panna-cotta-mobile.jpg";
import mob8 from "../assets/images/image-waffle-mobile.jpg";
import mob9 from "../assets/images/image-tiramisu-mobile.jpg";

export interface DataType {
  id: number;
  name: string;
  price: string;
  alt: string;
  subname: string;
  desImg: string;
  mobImg: string;
  selected?: boolean;
  itemsCount: number;
}

export const Data: DataType[] = [
  {
    id: 1,
    name: "Pistacho Baklava",
    subname: "Baklava",
    price: "4.99$",
    desImg: des1,
    mobImg: mob1,
    alt: "Baklava Image",
    selected: false,
    itemsCount: 1,
  },
  {
    id: 2,
    name: "Chocolate Brownie",
    subname: "Brownie",
    price: "3.99$",
    desImg: des2,
    mobImg: mob2,
    alt: "Brownie Image",
    selected: false,
    itemsCount: 1,
  },
  {
    id: 3,
    name: "Red Velvet Cake",
    subname: "Cake",
    price: "5.99$",
    desImg: des3,
    mobImg: mob3,
    alt: "Red Velvet Cake Image",
    selected: false,
    itemsCount: 1,
  },
  {
    id: 4,
    name: "Crème Brûlée",
    subname: "Creme Brulee",
    price: "6.99$",
    desImg: des4,
    mobImg: mob4,
    alt: "Creme Brulee Image",
    selected: false,
    itemsCount: 1,
  },
  {
    id: 5,
    name: "French Macarons",
    subname: "Macaron",
    price: "4.49$",
    desImg: des5,
    mobImg: mob5,
    alt: "French Macarons Image",
    selected: false,
    itemsCount: 1,
  },
  {
    id: 6,
    name: "Lemon Meringue Pie",
    subname: "Meringue",
    price: "5.49$",
    desImg: des6,
    mobImg: mob6,
    alt: "Lemon Meringue Pie Image",
    selected: false,
    itemsCount: 1,
  },
  {
    id: 7,
    name: "Strawberry Panna Cotta",
    subname: "Panna Cotta",
    price: "4.99$",
    desImg: des7,
    mobImg: mob7,
    alt: "Strawberry Panna Cotta Image",
    selected: false,
    itemsCount: 1,
  },
  {
    id: 8,
    name: "Belgian Waffles",
    subname: "Waffle",
    price: "3.99$",
    desImg: des8,
    mobImg: mob8,
    alt: "Belgian Waffles Image",
    selected: false,
    itemsCount: 1,
  },
  {
    id: 9,
    name: "Classic Tiramisu",
    subname: "Tiramisu",
    price: "5.99$",
    desImg: des9,
    mobImg: mob9,
    alt: "Classic Tiramisu Image",
    selected: false,
    itemsCount: 1,
  },
];
