//TODO: Opimize this further, redundant functions exist.

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
import { getMousePosition } from '../../../scripts/mousePosition.jsx';

function Navbar() {
  const navbarRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [isFixed, setIsFixed] = useState(false);
  const [inital, setInitial] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mousePos = getMousePosition(navbarRef, e, 'percentage');
      if (mousePos) {
        setMousePosition({ x: mousePos.x, y: mousePos.y });
      }
    };

    if (navbarRef.current) {
      navbarRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (navbarRef.current) {
        navbarRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [navbarRef.current]);


  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      const direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0 || inital) {
        console.log('1');
        setVisible(true);
        setIsFixed(false);
        setInitial(false); // Show when near the top
      } else {
        if (direction < 0) {
          console.log('2');
          setVisible(true);
          setIsFixed(true); // Show when scrolling up
          
        } else {
          console.log('3');
          setVisible(false); // Hide when scrolling down
        }
      }
    }
  });



  const navbarHeight = navbarRef.current ? navbarRef.current.clientHeight : 0;

  return (
    <div className='navbar-wrapper'> 
      <div
        className={cn('navbar-spacer', { hidden: !isFixed })}
        style={{ height: isFixed ? navbarHeight : 0 }} 
      />
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
    </div>
  );
}

export default Navbar;
