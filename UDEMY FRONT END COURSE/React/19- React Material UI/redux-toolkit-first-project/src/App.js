import "./App.css";
import Navbar from "./components/navbar/Navbar";
import CourseList from "./components/courseList/CourseList";
import { useEffect } from "react";
import { calculateTotal } from "./slice/cartSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  return (
    <div className="App">
      <Navbar />
      <CourseList />
    </div>
  );
}

export default App;
