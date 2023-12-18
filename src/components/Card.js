import React from 'react';
import { BsFillBagFill } from "react-icons/bs";
import Heart from '../assets/icons/heart.svg';
import Heart1 from '../assets/icons/heart1.svg';

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          {/* <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section> */}
          <section className="card-price">
            <div className="price">
              {/* <del>{prevPrice}</del> {newPrice} */}
            Sign in or Create an account to see pricing
            </div>
            <div className="bag">
              {title==="Nike Waffle One Sneaker"?
              <img src={Heart1}  />
              :<img src={Heart} className="bag-icon" />
        }
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
