const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content - Takes 2/3 width on desktop */}
        <main className="lg:w-2/3">
          <div className="space-y-6 text-[#33110E]">
            <p className="font-bold text-lg text-[#5A2A25]">For accommodation and other queries, contact</p>
            
            <div className="space-y-1">
              <p>NIT Hamirpur</p>
              <p>Hamirpur, Himachal Pradesh</p>
              <p>177 005, India</p>
            </div>

            <hr className="border-[#5A2A25]" />

            <div>
              <a
                href="mailto:hackathon@nith.ac.in"
                className="text-[#5A2A25] hover:text-[#E8A87C] transition-colors"
              >
                hackathon@nith.ac.in
              </a>
            </div>
          </div>
        </main>

        {/* Sidebar - Takes 1/3 width on desktop */}
        <aside className="lg:w-1/3">
          <div className="lg:sticky lg:top-24">
            <div className="bg-[#3E1714] text-white p-8 rounded-lg shadow-lg border border-[#5A2A25]">
              <h3 className="text-[#E8A87C] text-base font-semibold mb-2">
                HACKATHON ON MOBILE DEVICE and Application Security
              </h3>
              <p className="text-[#E8A87C] text-base font-semibold mb-4">March 2026</p>
              <p className="text-sm text-[#F2D5C4]">
                Contact:
                <br />
                <a
                  href="mailto:hackathon@nith.ac.in"
                  className="hover:text-[#E8A87C] transition-colors"
                >
                  hackathon@nith.ac.in
                </a>
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Contact;
