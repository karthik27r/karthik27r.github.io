import React, { useEffect, useState, useRef } from 'react';
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
        "grid md:auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

const Tag = ({ name, color, textColor }) => (
  <span
    className="inline-block px-2 py-1 text-xs font-semibold rounded-full mr-2 mb-2"
    style={{ backgroundColor: color, color: textColor }}
  >
    {name}
  </span>
);

const CarouselImage = ({ src, alt }) => (
  <div className="w-full h-56 overflow-hidden rounded-lg">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-300 group-hover/bento:scale-110"
    />
  </div>
);

export const BentoGridItem = ({
  className,
  title,
  description,
  tags,
  carousel,
  onClick,
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

  const firstCarouselImage = carousel && carousel.length > 0 ? carousel[0].carouselImage : null;

  return (
    <div
      className={cn(
        "bento-item-card row-span-1 rounded-xl group/bento bg-bg-color-alt transition duration-200 shadow-input p-4 flex flex-col space-y-4",
        className
      )}
      ref={cardRef}
      style={{ '--x': `${mousePosition.x}px`, '--y': `${mousePosition.y}px` }}
      onClick={onClick}
    >
      {firstCarouselImage && (
        <CarouselImage src={firstCarouselImage} alt={title} />
      )}
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2">
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 mb-2">
            {description}
          </div>
        </div>
        <div className="mt-auto">
          {tags && tags.map((tag, index) => (
            <Tag key={index} name={tag.name} color={tag.color} textColor={tag.textColor} />
          ))}
        </div>
      </div>
    </div>
  );
};