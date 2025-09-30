const skills = ["Python","C++","SQL","Javascript", "React", "Django","DRF","MySQL","PostgreSQL","Data Analysis","ETL","Pandas","Numpy","Scikit-learn","Tensorflow", "AI/ML", "NLP", "Computer Vision", "Tailwind CSS"];

export default function Skills() {
  return (
    <section className="py-16 text-center border-t border-gray-800">
      <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 hover:border-red-500 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
