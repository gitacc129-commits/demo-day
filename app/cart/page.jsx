"use client";
import { useCart } from "../CartContext/page";
import sh from "../shop/shop.module.css";

export default function CartPage() {
  const { cart } = useCart();

  function order() {
    alert("Buyurtma Muvafaqqiyatli amalga oshirildi ✅");
  }

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Cart is empty 🛒</h2>;
  }

  return (
    <div className={sh.ll}>
      {cart.map((item, index) => {
        if (!item) return null;

        return (
          <div key={index} className={sh.card}>
            <img className={sh.img} src={item.image} alt="" />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <h1>{item.price}</h1>

            <button onClick={order} className={sh.btn}>
              Order now
            </button>
          </div>
        );
      })}
    </div>
  );
}
