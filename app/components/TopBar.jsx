


const TopBar = () => {
  return (
    <div className="hidden lg:block bg-[#33110E] text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-3 text-sm">
          <div className="flex items-start">
            {/* <svg className="w-4 h-4 text-[#E3AFA0] mt-0.5 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg> */}
            <div className="text-center">
              <span className="text-[#E3AFA0]">hackathon@nith.ac.in</span>
              <br />
              <span className="text-[#F2D5C4]">
                HACKATHON ON MOBILE DEVICE AND APPLICATION SECURITY | March 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
