function Footer() {
  return (
    <footer className="bg-[#F9FAFF] border-t border-gray-200 py-12 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-[#6366F1]">
            Ananda X
          </h3>

          <p className="text-[#6B7280] mt-4">
            Discover powerful digital templates and tools
            designed for creators and entrepreneurs.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-[#1F2937] mb-4">
            Quick Links
          </h4>

          <ul className="space-y-2 text-[#6B7280]">
            <li className="hover:text-[#6366F1] cursor-pointer">Home</li>
            <li className="hover:text-[#6366F1] cursor-pointer">Categories</li>
            <li className="hover:text-[#6366F1] cursor-pointer">Features</li>
            <li className="hover:text-[#6366F1] cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-[#1F2937] mb-4">
            Stay Connected
          </h4>

          <p className="text-[#6B7280]">
            Follow us for updates and new digital products.
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-[#6B7280] text-sm mt-12">
        © 2026 Ananda X. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;