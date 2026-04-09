function Categories() {

  const items = [
    "Digital Planners",
    "Business Templates",
    "Social Media Kits",
    "Ebooks & Workbooks",
    "Branding Kits",
    "Productivity Tools"
  ];

  return (
    <section className="bg-white py-24 px-6">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-[#1F2937] mb-16">
          Explore Our Collections
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#6366F1] to-[#38BDF8] text-white p-10 rounded-2xl shadow hover:scale-105 transition cursor-pointer"
            >
              <h3 className="text-xl font-semibold">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Categories;