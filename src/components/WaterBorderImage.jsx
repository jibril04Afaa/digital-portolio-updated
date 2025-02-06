const WaterBorderImage = ({ imageSrc, altText }) => {
  return (
    <div className="relative w-full h-full">
      {/* SVG Filter */}
      <svg className="hidden">
        <defs>
          <filter id="water">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.02 0.15" 
              numOctaves="3" 
              result="noise" 
              seed="1"
            >
              <animate 
                attributeName="baseFrequency" 
                dur="10s" 
                values="0.02 0.15;0.015 0.11;0.02 0.15" 
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="noise" 
              scale="15" 
            />
          </filter>
        </defs>
      </svg>

      {/* Main container */}
      <div className="relative group">
        {/* Animated border */}
        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600"
             style={{ filter: 'url(#water)' }}>
        </div>
        
        {/* Image */}
        <div className="relative rounded-full p-1 bg-white dark:bg-gray-900">
          <img 
            src={imageSrc} 
            alt={altText} 
            className="rounded-full w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WaterBorderImage; 