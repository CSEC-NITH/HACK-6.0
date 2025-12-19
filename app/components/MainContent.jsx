const MainContent = () => {
  const objectives = [
    "Enhance Awareness: Educate participants on mobile device security threats and best practices.",
    "Encourage Innovation: Foster innovative solutions to counter mobile security vulnerabilities.",
    "Skill Development: Provide a platform for participants to enhance their technical skills in mobile security and ethical hacking",
    "Industry Collaboration: Facilitate knowledge exchange between academia, industry experts, and cybersecurity professionals",
    "Prototype Development: Encourage the creation of proof-of-concept solutions that can be further developed into robust security applications.",
  ];

  const phases = [
    {
      title: "Phase 1: Registration",
      description: "Call for participation through portal.",
    },
    {
      title: "Phase 2: Evaluation 1",
      description:
        "Presentation for Shortlisting top 40-50 teams based on innovation and feasibility of solutions. (Online)",
    },
    {
      title: "Phase 3: Prototype Development Evaluation 2",
      description:
        "Teams develop prototypes with mentorship support. Mid-term evaluation shortlists top 20-30 teams. (Online) (Presentations and DEMO)",
    },
    {
      title: "Phase 4: Final Evaluation & Presentation",
      description:
        "Finalists present working solutions before a panel of judges, which undergoes continuous evaluation. Winners are selected. (NIT Hamirpur) (20-30 Teams)",
    },
  ];

  const timeline = [
    { event: "Grand Challenge Launch", date: "15th January 2026" },
    {
      event: "Last Date for Registration of Team and submission of idea",
      date: "15th February 2026",
    },
    { event: "First Round of Evaluation", date: "February 2026" },
    {
      event: "Last date for Submission after the First Round of Evaluation",
      date: "Late February 2026",
    },
    { event: "Second Round of Evaluation (Demo/PoC)", date: "Early March 2026" },
    {
      event: "Last Date of Submission of Final Product (After Second Evaluation)",
      date: "10th March 2026",
    },
    { event: "Result for Grand Finale Teams", date: "12th March 2026" },
    { event: "Grand Finale", date: "14-15 March 2026" },
    { event: "Awards Ceremony", date: "15th March 2026" },
  ];

  return (
    <div className="space-y-12">
      {/* About Hackathon Section */}
      <section>
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <h3 className="text-2xl font-semibold text-[#5A2A25] mr-8">
              About Hackathon
            </h3>
            <div className="flex-1 border-b-2 border-[#5A2A25]"></div>
          </div>
        </div>

        <div className="space-y-4 text-base text-[#33110E]">
          <p className="text-justify leading-relaxed">
            Hackathon Under Information Security Education Awareness (ISEA) on
            theme Mobile Device and Application Security at NIT Hamirpur. The
            main objective is to identify Talent, Innovative Ideas and
            Technological Solutions and to establish linkages with Individuals,
            Industry, Start-ups and Educational Institutions.
          </p>

          <p className="text-justify leading-relaxed">
            <strong>Information Security Education and Awareness (ISEA)</strong>{" "}
            is an initiative of Ministry of Electronics and Information
            Technology (MeitY), Government of India for generating human
            resources in the area of Information Security and creating general
            awareness on Cyber Hygiene/Cyber Security among the masses.
          </p>

          <div className="mt-6">
            <p className="font-bold mb-3">Hackathon Objectives</p>
            <ul className="space-y-2">
              {objectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#E8A87C] mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="3" />
                  </svg>
                  <span className="text-justify">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline and Structure Section */}
      <section>
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <h3 className="text-2xl font-semibold text-[#5A2A25] mr-8">
              Hackathon Timeline and Structure:
            </h3>
            <div className="flex-1 border-b-2 border-[#5A2A25]"></div>
          </div>
        </div>

        <div className="space-y-4 text-base text-[#33110E]">
          <p>
            The hackathon will be conducted over a period of 4 months with three
            rounds of evaluation.
          </p>

          <ul className="space-y-4">
            {phases.map((phase, index) => (
              <li key={index} className="flex items-start border-b border-[#E3AFA0]/30 pb-4">
                <svg
                  className="w-5 h-5 text-[#E8A87C] mr-3 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="10" cy="10" r="3" />
                </svg>
                <div>
                  <span className="font-bold text-lg">{phase.title} - </span>
                  <span>{phase.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Timeline Table Section */}
      <section>
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <h3 className="text-2xl font-semibold text-[#5A2A25] mr-8">
              Timeline:
            </h3>
            <div className="flex-1 border-b-2 border-[#5A2A25]"></div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <tbody>
              {timeline.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-[#F5D7C8]/20" : "bg-white"
                  } border-b border-[#E3AFA0]/30`}
                >
                  <td className="px-4 py-3 text-[#33110E]">{item.event}</td>
                  <td className="px-4 py-3 text-[#5A2A25] font-medium">
                    {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* About NIT Hamirpur Section */}
      <section>
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <h3 className="text-2xl font-semibold text-[#5A2A25] mr-8">
              About NIT Hamirpur
            </h3>
            <div className="flex-1 border-b-2 border-[#5A2A25]"></div>
          </div>
        </div>

        <div className="text-base text-[#33110E]">
          <p className="text-justify leading-relaxed">
            Established in 1986, National Institute of Technology Hamirpur is an
            institute of national importance dedicated to excellence in
            education, research, and innovation. Located in the picturesque
            Himalayan region of Himachal Pradesh, the institute offers
            state-of-the-art infrastructure and a vibrant academic environment.
            With a strong focus on interdisciplinary research and industry
            collaboration, NIT Hamirpur is committed to addressing global
            challenges. Hosting this workshop reflects its mission to foster
            knowledge exchange and technological advancements in the Cyber
            Security and Mobile Security Domain.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
