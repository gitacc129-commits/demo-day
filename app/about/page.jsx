export default function AboutUs() {
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            About <span className="text-indigo-600">Online Shop</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Online Shop — zamonaviy onlayn market bo‘lib, sifatli mahsulotlar va
            qulay xizmatni bir joyda taqdim etadi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Biz kimmiz
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              Online Shop — mijozlar uchun qulay, tez va ishonchli onlayn xarid
              tajribasini yaratish maqsadida tashkil etilgan platforma.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Bizning maqsadimiz
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              Sifatli mahsulotlarni eng qulay narxlarda taqdim etish va
              mijozlarimizga tezkor yetkazib berish xizmatini yo‘lga qo‘yish.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Nega aynan biz?
            </h3>
            <ul className="mt-4 space-y-3 text-gray-600 dark:text-gray-400">
              <li>✔️ Sifatli va ishonchli mahsulotlar</li>
              <li>🚚 Tez va qulay yetkazib berish</li>
              <li>💬 24/7 mijozlarni qo‘llab-quvvatlash</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
