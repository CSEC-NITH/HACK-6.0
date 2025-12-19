import { useState, useEffect } from 'react';


const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { image: '/assets/img1.jpg', alt: 'NIT Hamirpur Hackathon - Innovation' },
    { image: '/assets/img2.jpg', alt: 'NIT Hamirpur Hackathon - Technology' },
    { image: '/assets/img3.jpg', alt: 'NIT Hamirpur Hackathon - Collaboration' },
    { image: '/assets/img4.jpg', alt: 'NIT Hamirpur Hackathon - Development' },
    { image: '/assets/img5.jpg', alt: 'NIT Hamirpur Hackathon - Excellence' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full bg-[#33110E]">
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[713px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#33110E]/50 to-transparent"></div>
        
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-[#E8A87C] w-8' 
                  : 'bg-[#F2D5C4]/50 hover:bg-[#F2D5C4]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
