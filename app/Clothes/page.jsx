"use client";

import cs from "./clothes.module.css";

import { useEffect, useState } from "react";

function Contact() {
  const [clothes, setClothes] = useState([]);

  function touched() {
    alert("Buyurtma Muvafaqqiyatli amalga oshirildi ✅");
  }

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
      {clothes.map((clothes) => (
        <div key={clothes.id} className={cs.card}>
          <img className={cs.im} src={clothes.image} alt="" />
          <h1>{clothes.title}</h1>
          <h1>{clothes.description}</h1>
          <h3>{clothes.price}</h3>
          <button onClick={touched} className={cs.btn}>
            Buy now
          </button>
        </div>
      ))}
    </div>
  );
}

export default Contact;
