"use client";
import Link from "next/link";
import st from "./navbar.module.css";
import { React } from "react";

import { useTheme } from "@/app/ThemeContext/page";
import { useCart } from "@/app/CartContext/page";

function Navbar() {
  const { dark, toggleTheme } = useTheme();

  const { cart } = useCart();

  return (
    <div className={`${st.div} ${dark ? st.dark : ""}`}>
      <h2 className={st.on}>Online shop</h2>
      <ul className={st.nav}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/Clothes">Clothes</Link>
        </li>
        <li>
          <Link href="/About">About us</Link>
        </li>
        <Link href="/cart">🛒 Cart</Link>

        <button onClick={toggleTheme} className={st.btn}>
          {dark ? "☀️" : "🌙"}
        </button>
      </ul>
    </div>
  );
}

export default Navbar;
