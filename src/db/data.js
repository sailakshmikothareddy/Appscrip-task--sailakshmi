
import React from 'react';
import { AiFillStar } from "react-icons/ai";
import FrontPic from '../assets/icons/Front Pic.svg';
import FrontPic1 from '../assets/icons/Front Pic (1).svg';
import Ring from '../assets/icons/ring.svg';
import Cap from '../assets/icons/cap.svg';
import Rectangle from '../assets/icons/Rectangle 29438.svg';
import CatRight from '../assets/icons/catRight.svg';
import Bag from '../assets/icons/bag.svg';
import BlackBag from '../assets/icons/blackbag.svg';
import Bag11 from '../assets/icons/bag11.svg';
import ZebraBag from '../assets/icons/zebrabag.svg';
import blueBag from '../assets/icons/bluebag.svg';
import YellowRight from '../assets/icons/yellowright.svg';






const data = [
  {
    // img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
    img: FrontPic,
    title: "Nike Air Monarch IV",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "white",
    category: "sneakers",
    pricing:'Sign in or Create an account to see pricing'
  },
  {
    img: FrontPic1,
    title: "Nike Air Vapormax Plus",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "red",
    category: "sneakers",
  },

  {
    img:Ring,
    title: "Nike Waffle One Sneaker",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "green",
    category: "sneakers",
  },
  {
    img: Cap,
    title: "Nike Running Shoe",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Adidas",
    color: "black",
    category: "sneakers",
  },
  {
    img: Rectangle,
    title: "Flat Slip On Pumps",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Vans",
    color: "green",
    category: "flats",
  },
  {
    img: CatRight,
    title: "Knit Ballet Flat",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Adidas",
    color: "black",
    category: "flats",
  },

  {
    img: Bag,
    title: "Loafer Flats",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Vans",
    color: "white",
    category: "flats",
  },

  {
    img: BlackBag,
    title: "Nike Zoom Freak",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "green",
    category: "sneakers",
  },

  {
    img: Bag11,
    title: "Nike Men's Sneaker",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Adidas",
    color: "blue",
    category: "sneakers",
  },

  {
    img: ZebraBag,
    title: "PUMA BLACK-OCE",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Puma",
    color: "green",
    category: "sneakers",
  },
  {
    img: blueBag,
    title: "Pacer Future Sneaker",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Puma",
    color: "red",
    category: "sneakers",
  },
  {
    img: YellowRight,
    title: "Unisex-Adult Super",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Puma",
    color: "black",
    category: "sneakers",
  },
  {
    img:Ring,
    title: "Roma Basic Sneaker",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Puma",
    color: "white",
    category: "sneakers",
  },
  {
    img: FrontPic1,
    title: "Pacer Future Doubleknit",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Puma",
    color: "black",
    category: "sneakers",
  },

  {
    img: Cap,
    title: "Fusion Evo Golf Shoe",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "100",
    company: "Puma",
    color: "green",
    category: "sneakers",
  },
  {
    img:Bag11,
    title: "Rainbow Chex Skate",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "100",
    company: "Vans",
    color: "red",
    category: "flats",
  },
  {
    img: Rectangle,
    title: "Low-Top Trainers",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "100",
    company: "Vans",
    color: "white",
    category: "sandals",
  },
  {
    img: YellowRight,
    title: "Vans Unisex Low-Top",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "100",
    company: "Vans",
    color: "blue",
    category: "sandals",
  },
 
];

export default data;
