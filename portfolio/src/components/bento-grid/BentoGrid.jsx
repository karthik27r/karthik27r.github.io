import {React, useEffect, useState, useRef} from 'react';
import { cn } from '../../utils/cn.ts';
import { getMousePosition } from '../../scripts/mousePosition';

import './BentoGridStyle.css'

export const BentoGrid = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  onClick, // Remove the redundant {onClick=onClick}
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mousePos = getMousePosition(cardRef, e, 'percent');
      if (mousePos) {
        setMousePosition({ x: mousePos.x, y: mousePos.y });
      }
    };

    if (cardRef.current) {
      cardRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [cardRef.current]);

  return (
    <div
      className={cn(
        "bento-item-card row-span-1 rounded-xl group/bento bg-bg-color-alt transition duration-200 shadow-input p-4 justify-between flex flex-col space-y-4",
        className
      )}
      ref={cardRef}
      style={{ '--x': `${mousePosition.x}px`, '--y': `${mousePosition.y}px` }}
      onClick={onClick}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
