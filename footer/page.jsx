import Link from "next/link";
import React from "react";
import ft from "./footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className={ft.footer}>
      <div className={ft.st1}>
        <h1 className={ft.on}>Online shop </h1>

        <ul className={ft.ul}>
          <p>
            <Link href="/shop">Shop</Link>
          </p>
          <p>
            {" "}
            <Link href="/Clothes">Clothes</Link>
          </p>
          <p>
            <Link href="/About">About</Link>
          </p>
        </ul>

        <ul className={ft.ul}>
          <h4>Number & Email</h4>
          <p>(+998) 99 999 99 99</p>
          <p>Tojikam bapesh@gmail.com</p>
        </ul>

        <ul className={ft.ul}>
          <h4>Location</h4>
          <p>Maksim Gorkiy</p>
          <p>Bonni tepasi</p>
        </ul>

        <ul className={ft.ul}>
          <h4>Location 2</h4>
          <p>Tojikiston</p>
          <p>Dushanbe</p>
        </ul>
      </div>
      <div className={ft.i}>
        <div className={ft.ic}>
          <a>
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/a_hakimov_/">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/abdulaziz-hakimov-925a19326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <h5 className={ft.h}>Copyright @ 2026 Agency Creative. All Right Reserved</h5>
    </footer>
  );
}

export default Footer;
