const Accommodation = () => {
  const accommodations = [
    { name: 'NIT Hamirpur Guest House', url: null },
    { name: 'NIT Hamirpur Hostels', url: null },
    { name: 'Hotel Parijat', url: 'https://www.hotelparijat.com/' },
    { name: 'Hotel Gulmarg Regency', url: 'https://www.makemytrip.com/hotels/hotel_gulmarg_regency-details-hamirpur.html' },
    { name: 'Hotel Surya', url: null },
    { name: 'Hill View Hotel Hamirpur', url: null },
    { name: 'Hotel Crown', url: null },
    { name: 'Hotel Ashoka', url: null },
  ];

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content - Takes 2/3 width on desktop */}
        <main className="lg:w-2/3">
          <div className="space-y-6 text-[#33110E]">
            <p className="font-bold text-lg text-[#5A2A25]">Accommodation Options in Hamirpur</p>

            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {accommodations.map((accommodation, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? 'bg-[#F5D7C8]/20' : 'bg-white'
                      } border-b border-[#E3AFA0]/30`}
                    >
                      <td className="px-4 py-3">
                        {accommodation.url ? (
                          <a
                            href={accommodation.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#5A2A25] hover:text-[#E8A87C] underline transition-colors"
                          >
                            {accommodation.name}
                          </a>
                        ) : (
                          <span className="underline">{accommodation.name}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-4 bg-[#F5D7C8]/30 border-l-4 border-[#E8A87C] rounded">
              <p className="text-sm text-[#33110E]">
                <strong>Note:</strong> Participants are advised to book accommodation in advance.
                For assistance with on-campus accommodation (Guest House/Hostels), please contact
                the organizing committee.
              </p>
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

export default Accommodation;
