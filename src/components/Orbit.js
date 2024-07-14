import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs) => twMerge(clsx(inputs));

const OrbitingCircles = ({
  className,
  children,
  reverse = false,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
}) => {
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeDasharray="4 4"            

          />
        </svg>
      )}

      <div
        style={{
          '--duration': `${duration}`,
          '--radius': `${radius}`,
          '--delay': `${-delay}`,
        }}
        className={cn(
          'absolute cursor-pointer flex h-full w-full transform-gpu animate-orbit items-center justify-center rounded-full border',
          { '[animation-direction:reverse]': reverse },
          className
        )}
      >
        {children}  
      </div>
    </>
  );
};

export default OrbitingCircles;
