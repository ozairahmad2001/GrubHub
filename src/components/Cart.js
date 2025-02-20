import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItems";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }
  console.log(cartItems);
  console.log(cartItems.length);
  return (
    <div>
      <h1 className="font-bold text-3xl"> Cart - {cartItems.length}</h1>
      <button className="bg-green-100 p-2 m-5" onClick={()=>handleClearCart()}>Clear Cart</button>
      <div className="flex flex-wrap">
      {cartItems.map((item)=>(
      <FoodItem key={item.id} {...item} />
      ))}
      </div>
    </div>
  );
};
export default Cart;
