export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 bg-gray-900 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold text-white">Vijay Hatte</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="hover:text-red-500">About</a>
          <a href="#projects" className="hover:text-red-500">Projects</a>
          <a href="#contact" className="hover:text-red-500">Contact</a>
        </div>
      </div>
    </nav>
  );
}
