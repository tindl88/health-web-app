import React from 'react';

const IconMealButton: React.FC<React.SVGAttributes<Record<string, unknown>>> = ({ width = 116 }) => {
  return (
    <svg
      width={width}
      viewBox="0 0 116 134"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d="M0 33.5L58 0L116 33.5V100.5L58 134L0 100.5L0 33.5Z" fill="url(#paint0_linear_47865_57)" />
      <defs>
        <linearGradient
          id="paint0_linear_47865_57"
          x1="25.9565"
          y1="165.202"
          x2="147.019"
          y2="118.302"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFCC21" />
          <stop offset="1" stopColor="#FF963C" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default IconMealButton;
