export const Teaching = () => {
  const courses = [
    {
      role: "Teaching Assistant",
      course: "CSE 2431: Operating Systems",
      term: "Ohio State University — Spring 2026",
    },
    {
      role: "Teaching Assistant",
      course: "CSE 6521: Advanced Survey of Artificial Intelligence",
      term: "Ohio State University — Autumn 2025",
    },
    {
      role: "Teaching Assistant",
      course: "CSE 3521: Survey of Artificial Intelligence I",
      term: "Ohio State University — Fall 2024 - Spring 2025",
    },
    {
      role: "Teaching Assistant",
      course: "CSE 1222: Programming in C++",
      term: "Ohio State University — Spring 2024",
    },
    {
      role: "Lecturer",
      course: "CSE 2451: Advanced Programming in C",
      term: "Ohio State University — Autumn 2022 - Spring 2023",
      //description:
      //  "Delivered two guest lectures on deep learning fundamentals and neural network architectures.",
    },
  ];

  return (
    <section id="teaching" className="mb-12">
      <h2 className="text-2xl font-bold mb-6 border-b border-white/30 pb-2">
        Teaching
      </h2>
      <ul className="space-y-2">
        {courses.map((c, i) => (
          <li key={i}>
            <p className="text-sm font-semibold">
              {c.role} — <span className="text-blue-300">{c.course}</span>
            </p>
            <p className="text-xs text-white/60 italic mb-1">{c.term}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
