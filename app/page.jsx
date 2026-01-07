"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Page() {
  const [future, setFuture] = useState([]);

  const router = useRouter();

  function goShop() {
    router.push("/shop");
  }

  async function getfuture() {
    const res = await fetch("https://b738f4d79f1c934b.mokky.dev/future");
    const data = await res.json();
    setFuture(data);
  }

  useEffect(() => {
    getfuture();
  }, []);

  return (
    <div>
      <section className="sc">
        <div className="wl">
          <div className="text">
            <h1>Discover Quality Products for Everyday Life</h1>
            <p>
              Shop the latest trends with fast delivery, secure payments, and
              trusted quality.
            </p>

            <button onClick={goShop} className="btn">
              Shop now
            </button>
          </div>

          <img
            className="img"
            src="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/5b1a9ccf-1ec8-4e62-958f-5f301b9e851f/what-are-the-best-nike-basketball-shoes.jpg"
            alt=""
          />
        </div>
      </section>

      <section>
        <div className="st2">
          <h1 className="h11">Future Products</h1>
          <div className="card-dady">
            {future.map((future) => (
              <div key={future.id} className="card">
                <img className="images" src={future.image} alt="" />
                <h2 className="fh">{future.brand}</h2>
                <p className="fp">{future.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Title */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Our Shop?
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              We provide the best shopping experience with quality products and
              reliable service.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Fast Delivery
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Quick and reliable delivery straight to your door.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Secure Payment
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Safe and trusted payment methods for every purchase.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Quality Products
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Carefully selected premium products you can trust.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                24/7 Support
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Our team is always ready to help you anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Limited Time Offer!
            </h2>
            <p className="mt-3 text-white/90">
              Get up to 20% off on selected products.
            </p>
          </div>

          <button className="mt-6 md:mt-0 bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default Page;
