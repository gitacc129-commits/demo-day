"use client";
import React, { useEffect, useState } from "react";
import sh from "./shop.module.css";
import { useCart } from "../../CartContext/page";

function Shop() {
  const [shoes, setShoes] = useState([]);
  const { addToCart } = useCart();

  async function getShoes() {
    const res = await fetch("https://b738f4d79f1c934b.mokky.dev/demop");
    const data = await res.json();
    setShoes(data);
  }

  useEffect(() => {
    getShoes();
  }, []);

  return (
    <div className={sh.ll}>
      {shoes.map((item) => (
        <div key={item.id} className={sh.card}>
          <img className={sh.img} src={item.image} alt="" />
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <h1>{item.price}</h1>

          <button className={sh.btn} onClick={() => addToCart(item)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Shop;
