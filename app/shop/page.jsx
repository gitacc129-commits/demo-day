"use client";
import React, { useEffect, useState } from "react";
import sh from "./shop.module.css";

function Shop() {
  const [shoes, setShoes] = useState([]);

  function touched() {
    alert("Buyurtma Muvafaqqiyatli amalga oshirildi ✅");
  }

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
      {shoes.map((shoes) => (
        <div key={shoes.id} className={sh.card}>
          <img className={sh.img} src={shoes.image} alt="" />
          <h1>{shoes.title}</h1>
          <p>{shoes.description}</p>
          <h1>{shoes.price}</h1>
          <button onClick={touched} className={sh.btn}>
            Buy now
          </button>
        </div>
      ))}
    </div>
  );
}

export default Shop;
