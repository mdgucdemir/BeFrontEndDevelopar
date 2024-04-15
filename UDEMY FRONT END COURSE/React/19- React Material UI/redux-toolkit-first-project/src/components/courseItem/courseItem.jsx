import React from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import "./style.css";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../../slice/cartSlice";

const CourseItem = ({ id, title, price, img, quantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="cartItem">
      <img src={img} alt={title} className="cartImg" />
      <div className="cartInfo">
        <h4>{title}</h4>
        <h4>{price} TL</h4>
        <div>
          <button
            className="cartQuantityButton"
            onClick={() => {
              dispatch(increase(id));
            }}
          >
            <BsChevronUp />
          </button>
          <p className="cartQuantity">{quantity}</p>
          <button
            className="cartQuantityButton"
            onClick={() => {
              dispatch(decrease(id));
            }}
          >
            <BsChevronDown />
          </button>
        </div>
        <button
          className="cartDeleteButton"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CourseItem;
