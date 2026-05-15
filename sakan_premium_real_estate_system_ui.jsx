export default function SakanPremium() {
  const properties = [
    {
      title: "شقة كاش في التجمع الخامس",
      price: "2,950,000 ج",
      area: "135 م²",
      location: "القاهرة الجديدة",
      status: "فرصة حقيقية",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "فيلا جاهزة للسكن",
      price: "8,500,000 ج",
      area: "320 م²",
      location: "الشيخ زايد",
      status: "أقل من السوق",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "دوبلكس استثماري",
      price: "4,200,000 ج",
      area: "210 م²",
      location: "العاصمة الإدارية",
      status: "استثمار قوي",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-[#07111f] text-white overflow-hidden">
      {/* NAVBAR */}
      <nav className="w-full flex items-center justify-between px-6 md:px-12 py-5 border-b border-white/10 backdrop-blur-lg sticky top-0 z-50 bg-[#07111f]/80">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-black font-black text-xl shadow-2xl">
            س
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight">سكن</h1>
            <p className="text-xs text-white/60">عقارات كاش .. فرص حقيقية</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#" className="hover:text-white transition">الرئيسية</a>
          <a href="#" className="hover:text-white transition">الفرص</a>
          <a href="#" className="hover:text-white transition">الاستثمار</a>
          <a href="#" className="hover:text-white transition">تواصل</a>
        </div>

        <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-2 rounded-xl font-bold transition shadow-lg shadow-yellow-500/20">
          ابدأ الآن
        </button>
      </nav>

      {/* HERO */}
      <section className="relative px-6 md:px-12 py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,193,7,0.15),transparent_30%)]"></div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-yellow-400 mb-6">
              🔥 منصة العقارات الكاش الأولى
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              ابحث عن
              <span className="text-yellow-400"> الفرصة </span>
              قبل أي شخص
            </h1>

            <p className="text-lg text-white/70 leading-8 mb-8 max-w-xl">
              سكن يجمع لك أفضل العقارات الكاش والفرص الحقيقية فقط.
              بدون إعلانات مزعجة أو أسعار وهمية.
            </p>

            {/* SEARCH */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-4 shadow-2xl">
              <div className="grid md:grid-cols-4 gap-3">
                <input
                  placeholder="المنطقة"
                  className="bg-[#0b1729] border border-white/10 rounded-2xl px-4 py-4 outline-none"
                />

                <input
                  placeholder="الميزانية"
                  className="bg-[#0b1729] border border-white/10 rounded-2xl px-4 py-4 outline-none"
                />

                <select className="bg-[#0b1729] border border-white/10 rounded-2xl px-4 py-4 outline-none text-white/70">
                  <option>شقة</option>
                  <option>فيلا</option>
                  <option>دوبلكس</option>
                </select>

                <button className="bg-yellow-500 hover:bg-yellow-400 transition text-black font-black rounded-2xl px-5 py-4 shadow-xl shadow-yellow-500/20">
                  اكتشف الفرص
                </button>
              </div>
            </div>

            <div className="flex items-center gap-8 mt-10 text-white/70">
              <div>
                <h3 className="text-3xl font-black text-white">1200+</h3>
                <p>فرصة عقارية</p>
              </div>
              <div>
                <h3 className="text-3xl font-black text-white">94%</h3>
                <p>أسعار موثوقة</p>
              </div>
              <div>
                <h3 className="text-3xl font-black text-white">24/7</h3>
                <p>تنبيهات فورية</p>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative">
            <div className="absolute -top-8 -right-8 w-52 h-52 bg-yellow-500/20 blur-3xl rounded-full"></div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-3xl rounded-[40px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
              <img
                src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1400&auto=format&fit=crop"
                className="w-full h-[420px] object-cover"
              />

              <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h2 className="text-2xl font-black">فيلا لقطة</h2>
                    <p className="text-white/60">الشيخ زايد</p>
                  </div>

                  <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl font-bold text-sm border border-green-500/20">
                    فرصة حقيقية
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center mb-6">
                  <div className="bg-white/5 rounded-2xl py-4">
                    <h3 className="font-black text-xl">320</h3>
                    <p className="text-white/50 text-sm">متر</p>
                  </div>
                  <div className="bg-white/5 rounded-2xl py-4">
                    <h3 className="font-black text-xl">4</h3>
                    <p className="text-white/50 text-sm">غرف</p>
                  </div>
                  <div className="bg-white/5 rounded-2xl py-4">
                    <h3 className="font-black text-xl">2</h3>
                    <p className="text-white/50 text-sm">حمام</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/50 text-sm">السعر</p>
                    <h3 className="text-3xl font-black text-yellow-400">8.5M</h3>
                  </div>

                  <button className="bg-yellow-500 hover:bg-yellow-400 transition text-black px-6 py-3 rounded-2xl font-black shadow-lg shadow-yellow-500/20">
                    عرض التفاصيل
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-400 font-bold mb-4">لماذا سكن ؟</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              منصة تبسط العقارات
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              لا مزيد من الفوضى والإعلانات الوهمية.
              فقط فرص عقارية تستحق وقتك.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300">
              <div className="text-5xl mb-5">🏠</div>
              <h3 className="text-2xl font-black mb-3">عقارات كاش فقط</h3>
              <p className="text-white/60 leading-8">
                نعرض الوحدات الجاهزة للبيع الفوري فقط بدون تقسيط معقد.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300">
              <div className="text-5xl mb-5">📊</div>
              <h3 className="text-2xl font-black mb-3">تقييم ذكي للسعر</h3>
              <p className="text-white/60 leading-8">
                نحدد إذا كان العقار فرصة حقيقية أو أعلى من سعر السوق.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300">
              <div className="text-5xl mb-5">⚡</div>
              <h3 className="text-2xl font-black mb-3">تنبيهات فورية</h3>
              <p className="text-white/60 leading-8">
                وصلك أول ما تنزل فرصة مناسبة لميزانيتك ومنطقتك.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTIES */}
      <section className="px-6 md:px-12 py-20 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-yellow-400 font-bold mb-3">أفضل الفرص</p>
              <h2 className="text-4xl font-black">عقارات مختارة بعناية</h2>
            </div>

            <button className="hidden md:block border border-white/10 hover:border-yellow-400 px-6 py-3 rounded-2xl transition">
              عرض الكل
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {properties.map((property, index) => (
              <div
                key={index}
                className="group bg-[#0b1729] border border-white/10 rounded-[32px] overflow-hidden hover:border-yellow-400/40 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={property.image}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="absolute top-4 right-4 bg-yellow-500 text-black text-sm font-black px-4 py-2 rounded-full">
                    {property.status}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-black">{property.title}</h3>
                  </div>

                  <p className="text-white/50 mb-5">📍 {property.location}</p>

                  <div className="flex items-center justify-between text-white/70 mb-6">
                    <span>{property.area}</span>
                    <span>{property.price}</span>
                  </div>

                  <button className="w-full bg-white/5 hover:bg-yellow-500 hover:text-black transition py-4 rounded-2xl font-black border border-white/10">
                    مشاهدة التفاصيل
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-28">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-[40px] p-10 md:p-16 text-black relative overflow-hidden shadow-[0_30px_80px_rgba(255,193,7,0.25)]">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              لا تضيع وقتك في آلاف الإعلانات
            </h2>

            <p className="text-black/70 text-xl mb-10 max-w-2xl mx-auto leading-9">
              اشترك الآن ليصلك أول تنبيه بأي فرصة عقارية كاش مناسبة لك.
            </p>

            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 bg-white rounded-2xl px-6 py-5 outline-none text-lg"
              />

              <button className="bg-black hover:bg-[#07111f] text-white px-8 py-5 rounded-2xl font-black transition">
                اشترك الآن
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 md:px-12 py-8 text-center text-white/40">
        © 2026 سكن — جميع الحقوق محفوظة
      </footer>
    </div>
  );
}
