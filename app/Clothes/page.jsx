"use client";

import { useCart } from "../CartContext/page";
import cs from "./clothes.module.css";
import { useEffect, useState } from "react";

function Contact() {
  const [clothes, setClothes] = useState([]);
  const { addToCart } = useCart();

  async function getClothes() {
    const res = await fetch("https://b738f4d79f1c934b.mokky.dev/Clothes");
    const data = await res.json();
    setClothes(data);
  }

  useEffect(() => {
    getClothes();
  }, []);

  return (
    <div className={cs.ll}>
      {clothes.map((item) => (
        <div key={item.id} className={cs.card}>
          <img className={cs.im} src={item.image} alt="" />
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <h3>{item.price}</h3>

          <button onClick={() => addToCart(item)} className={cs.btn}>
            Order
          </button>
        </div>
      ))}
    </div>
  );
}

export default Contact;
