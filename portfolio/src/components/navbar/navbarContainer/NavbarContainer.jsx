import React, { useRef, useEffect, useState } from 'react';
import './NavbarContainerStyle.css';
import NavElements from '../navbarElements/NavbarElements';
import { cn } from '../../../utils/cn.ts';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';

function Navbar() {
  const navbarRef = useRef(null); 
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [isFixed, setIsFixed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (navbarRef.current) {
        const rect = navbarRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove); 

    return () => {
      window.removeEventListener('mousemove', handleMouseMove); 
    };
  }, [navbarRef.current]); 

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      const direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.1) {
        setVisible(true);
        setIsFixed(false); // Show when near the top
      } else {
        if (direction < 0) {
          setVisible(true);
          setIsFixed(true); // Show when scrolling up
        } else {
          setVisible(false); // Hide when scrolling down
        }
      }
    }
  });

  return (
    <div className='navbar-position'>
      <AnimatePresence mode='wait'>
        <motion.div
          ref={navbarRef}
          initial={{
            opacity: 1,
            y: 0,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          style={{
            '--x': `${mousePosition.x}%`,
            '--y': `${mousePosition.y}%`,
          }} 
          className={cn('navbar-container', isFixed ? 'fixed-navbar' : 'relative-navbar')}
        >
          <NavElements />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
