import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CourseItem from "../courseItem/courseItem";
import "./style.css";
import { clearCart } from "../../slice/cartSlice";

const CourseList = () => {
  const { cartItems, quantity, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  return (
    <>
      {quantity < 1 ? (
        <section className="cart">
          <header>
            <h2>My Cart</h2>
            <h4>My Cart is empty</h4>
          </header>
        </section>
      ) : (
        <section className="cart">
          <header>
            <h2>My Cart</h2>
            <div>
              {cartItems.map((item) => (
                <CourseItem key={item.id} {...item} />
              ))}
            </div>
            <footer>
              <hr />
              <div>
                <h4>
                  Total Price <span>{total} TL</span>
                </h4>
              </div>
              <button
                className="clearButton"
                onClick={() => dispatch(clearCart())}
              >
                clear
              </button>
            </footer>
          </header>
        </section>
      )}
    </>
  );
};

export default CourseList;
