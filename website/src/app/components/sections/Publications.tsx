export const Publications = () => {
  const pubs = [
    {
      title:
        "Enhancing Ring Vaccination with Risk-based Prioritization: A Case Study of the 2014 West Africa Ebola Outbreak",
      authors:
        "<b>Dinh Song An Nguyen</b>, Marie-Laure Charpignon, Kathryn L. Schaber, Rebecca S. Levine, Christophe Sandi, Maimuna S. Majumder, Andrew Perrault",
      venue: "(under review)",
      link: "#",
    },
    {
      title:
        "Using Reinforcement Learning for Multi-Objective Cluster-Level Optimization of Non-Pharmaceutical Interventions for Infectious Disease",
      authors:
        "Xueqiao Peng, Jiaqi Xu, Xi Chen, <b>Dinh Song An Nguyen</b>, Andrew Perrault",
      venue: "ML4H, 2023",
      link: "https://proceedings.mlr.press/v225/peng23a.html",
    },
    {
      title:
        "Risk-Based Ring Vaccination: A Strategy for Pandemic Control and Vaccine Allocation",
      authors:
        "<b>Dinh Song An Nguyen</b>, Marie-Laure Charpignon, Kathryn L. Schaber, Maimuna S. Majumder, Andrew Perrault",
      venue: "epiDAMIK workshop at KDD, 2023",
      link: "https://openreview.net/forum?id=N0qlvDjnEv",
    },
  ];

  return (
    <section id="publications" className="mb-12">
      <h2 className="text-2xl font-bold mb-6 border-b border-white/30 pb-2">
        Publications
      </h2>
      <ul className="space-y-6">
        {pubs.map((pub, i) => (
          <li key={i}>
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:underline font-semibold"
            >
              {pub.title}
            </a>
            <p className="text-sm text-white/80 mt-1" dangerouslySetInnerHTML={{ __html: pub.authors }} />
            <p className="text-sm text-white/60 italic">{pub.venue}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
