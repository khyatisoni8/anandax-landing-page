function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-sm">
      
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold text-[#6366F1]">
          Ananda X
        </h1>

        <ul className="hidden md:flex gap-8 text-[#374151] font-medium">
          <li className="hover:text-[#6366F1] cursor-pointer transition">
            Home
          </li>
          <li className="hover:text-[#6366F1] cursor-pointer transition">
            Categories
          </li>
          <li className="hover:text-[#6366F1] cursor-pointer transition">
            Features
          </li>
          <li className="hover:text-[#6366F1] cursor-pointer transition">
            Contact
          </li>
        </ul>

        <button className="bg-[#6366F1] text-white px-5 py-2 rounded-full hover:bg-[#4F46E5] transition">
          Get Started
        </button>

      </div>

    </header>
  );
}

export default Navbar;