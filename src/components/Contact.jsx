export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center border-t border-gray-800">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="mb-6 text-lg text-gray-300">Let’s build something amazing together 🚀</p>
      <div className="space-y-4">
        <a href="mailto:vijayhatte@gmail.com" className="block text-red-500 hover:underline">
          📧 vijayhatte@gmail.com
        </a>
        <p className="text-gray-400">📞 +91 8956791634</p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/VijayHatte" target="_blank" className="px-4 py-2 bg-gray-800 border border-red-500 rounded-lg hover:bg-gray-700">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/vijay-hatte-670300222/" target="_blank" className="px-4 py-2 bg-gray-800 border border-red-500 rounded-lg hover:bg-gray-700">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
