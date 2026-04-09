function Features() {

  const features = [
    {
      title: "Beautiful Templates",
      desc: "Modern templates designed for creators and businesses."
    },
    {
      title: "Instant Download",
      desc: "Access your digital products immediately."
    },
    {
      title: "Easy Customization",
      desc: "Edit templates quickly and launch your ideas."
    }
  ];

  return (
    <section className="bg-[#F9FAFF] py-24 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-10 rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-2"
          >
            <h3 className="text-xl font-semibold text-[#1F2937] mb-4">
              {feature.title}
            </h3>

            <p className="text-[#6B7280]">
              {feature.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Features;