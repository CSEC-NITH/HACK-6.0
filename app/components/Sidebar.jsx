const Sidebar = () => {
  const updates = [
    "Registration is open.",
    "The hackathon will be conducted over a period of 4 months with three rounds of evaluation.",
  ];

  return (
    <div className="space-y-6">
      {/* News and Updates Widget */}
      <div className="bg-[#3E1714] text-white p-8 rounded-lg shadow-lg border border-[#5A2A25]">
        <h3 className="text-[#E8A87C] text-base font-semibold mb-4">
          News and Updates
        </h3>
        <div className="space-y-4">
          {updates.map((update, index) => (
            <div key={index}>
              <p className="text-sm leading-relaxed text-[#F2D5C4]">{update}</p>
              {index < updates.length - 1 && (
                <hr className="border-[#5A2A25] my-4" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Info Widget */}
      <div className="bg-[#3E1714] text-white p-8 rounded-lg shadow-lg border border-[#5A2A25]">
        <h3 className="text-[#E8A87C] text-base font-semibold mb-2">
          HACKATHON ON MOBILE DEVICE and Application Security
        </h3>
        <p className="text-[#E8A87C] text-base font-semibold mb-4">
          March 2026
        </p>
        <p className="text-sm text-[#F2D5C4]">
          Contact:
          <br />
          <a href="mailto:hackathon@nith.ac.in" className="hover:text-[#E8A87C] transition-colors">
            hackathon@nith.ac.in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
