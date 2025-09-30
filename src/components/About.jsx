// src/components/About.jsx
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdLanguage } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto py-20 px-6">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        {/* LEFT: AI Services (icons + labels) */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-700 shadow-md">
              <GiArtificialIntelligence className="w-7 h-7 text-red-400" />
            </div>
            <div>
              <h4 className="text-lg font-semibold">AI Applications</h4>
              <p className="text-sm text-gray-400">
                End-to-end AI systems: model design, training, deployment and monitoring.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-4 rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-700 shadow-md">
              <MdLanguage className="w-7 h-7 text-red-400" />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Natural Language Processing (NLP)</h4>
              <p className="text-sm text-gray-400">
                Text understanding, multilingual assistants, intent detection and generation.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-4 rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-700 shadow-md">
              <AiOutlineEye className="w-7 h-7 text-red-400" />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Computer Vision</h4>
              <p className="text-sm text-gray-400">
                Image/video captioning, detection, and multimodal fusion for real-world tasks.
              </p>
            </div>
            {/* <div>
              <h4 className="text-lg font-semibold">Software Aplications</h4>
              <p className="text-sm text-gray-400">
                Modern fast pace software applications and websites with AI integration.
              </p>
            </div> */}
          </div>
        </div>

        {/* RIGHT: About text + Stats (spans 2 cols on md+) */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I am a graduate in <span className="text-red-400">Artificial Intelligence and Data Science</span> with a strong foundation in building full-stack intelligent systems that integrate AI seamlessly with modern web technologies. I have hands-on experience developing scalable applications using <span className="text-red-400">React, Django, and PostgreSQL</span>, along with expertise in <span className="text-red-400">Machine Learning, NLP, Computer Vision, and Generative AI</span>. I am passionate about solving <span className="text-red-400">real-world challenges</span> through technology, from creating AI-powered tools that enhance <span className="text-red-400">education and interpretability (MAIA)</span> to building <span className="text-red-400">multilingual farming advisors (KrishiGPT)</span> that empower communities. I enjoy designing, developing, and deploying intelligent applications that are not only functional but also user-friendly and impactful. Constantly exploring emerging technologies, I focus on <span className="text-red-400">explainable AI, multimodal systems, and human–AI interaction</span>, with the goal of leveraging AI-driven solutions to make a meaningful difference in society while growing as a versatile <span className="text-red-400">full-stack AI developer</span>.
          </p>

          <div className="mt-8 flex flex-wrap gap-8 text-red-400">
            <div className="min-w-[120px]">
              <h3 className="text-2xl font-bold">15+</h3>
              <p className="text-sm text-gray-400">Projects Completed</p>
            </div>
            <div className="min-w-[120px]">
              <h3 className="text-2xl font-bold">99%</h3>
              <p className="text-sm text-gray-400">Clean Maintanable Code</p>
            </div>
            <div className="min-w-[120px]">
              <h3 className="text-2xl font-bold">10+</h3>
              <p className="text-sm text-gray-400">AI Applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
