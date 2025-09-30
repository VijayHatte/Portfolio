import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-[#0d0d0d] text-white"
    >
      {/* Profile Image with Glow Ring */}
      <div className="relative mb-8">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-500 to-orange-400 blur-3xl opacity-40 animate-pulse"></div>
        <img
          src={profile}
          alt="Profile"
          className="w-44 h-44 md:w-56 md:h-56 rounded-full border-4 border-red-500 shadow-2xl relative z-10 object-cover"
        />
      </div>

      {/* Intro Text */}
      <h2 className="text-lg md:text-xl mb-2 text-gray-300 tracking-wide">
        Hello, I'm
      </h2>
      <h1 className="text-4xl md:text-6xl font-extrabold mb-3 text-red-500">
        Vijay Hatte
      </h1>
      <h3 className="text-lg md:text-2xl font-medium text-gray-300 mb-8">
        Full-Stack <span className="text-red-400">AI Developer & Data Scientist</span>
      </h3>

      {/* Buttons */}
      <div className="flex gap-5">
        <a
          href="#projects"
          className="px-6 py-3 bg-red-500 text-white rounded-xl shadow-lg hover:bg-red-600 transition-transform transform hover:scale-105"
        >
          🚀 Get a Project
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          className="px-6 py-3 bg-gray-800 border border-red-500 rounded-xl shadow-lg hover:bg-gray-700 transition-transform transform hover:scale-105"
        >
          📄 My Resume
        </a>
      </div>
    </section>
  );
}
