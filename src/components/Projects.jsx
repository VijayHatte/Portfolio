const projects = [
  {
    title: "KrishiGPT",
    description: "AI-powered smart farming advisor with crop disease detection, weather tips, and multilingual assistant.",
    tech: "React, Django, AI/ML, NLP",
    github: "https://github.com/VijayHatte/KrishiGPT",
    live: "#"
  },
  {
    title: "Microservices-Task Management Tool",
    description: "Full-stack tool with tasks, roles, Kanban board, analytics & notifications.",
    tech: "React, Django, PostgreSQL",
    github: "https://github.com/VijayHatte/Microservices",
  },
  {
    title: "Multilingual-Image-Captioning",
    description: "Generates detailed captions using BLIP-2 model with multilingual support.",
    tech: "Django, Transformers, React",
    github: "https://github.com/VijayHatte/Multilingual-Image-Captioning",
  },
  {
    title: "MAIA – Multimodal Automated Interpretability Agent",
    description: "An explainable AI tool for teachers to visualize, interpret, and understand model decisions using multimodal data.",
    tech: "React, Django, SHAP, NLP, Visualization",
    github: "https://github.com/VijayHatte/MAIA-multimodal-automated-interpretability-agent",
    
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, idx) => (
          <div key={idx} className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-red-500 transition">
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <p className="text-gray-400 mb-4">{p.desc}</p>
            <a href={p.link} target="_blank" className="text-red-500 hover:underline">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
