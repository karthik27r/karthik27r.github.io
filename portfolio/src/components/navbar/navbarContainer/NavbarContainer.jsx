import React, { useRef, useEffect, useState } from 'react';
import './NavbarContainerStyle.css';
import NavElements from '../navbarElements/NavbarElements';
import { cn } from '../../../utils/cn.ts';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { getMousePosition } from '../../../scripts/mousePosition.jsx';

function Navbar({ currentPath }) {
  const navbarRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [isFixed, setIsFixed] = useState(false);
  const [initial, setInitial] = useState(true);
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

      if (scrollYProgress.get() < 0 || initial) {
        setVisible(true);
        setIsFixed(false);
        setInitial(false);
      } else if (currentPath !== '/') {
        if (direction < 0) {
          setVisible(true);
          setIsFixed(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const navbarHeight = navbarRef.current ? navbarRef.current.clientHeight : 0;

  return (
    <div className={`navbar-wrapper ${currentPath === '/' ? 'center-navbar' : ''}`}>
      <div
        className={cn('navbar-spacer', { hidden: !isFixed && currentPath !== '/' })}
        style={{ height: isFixed ? navbarHeight : 0 }}
      />
      <div className='navbar-position' style={{ opacity: currentPath === '/' ? 1 : visible ? 1 : 0 }}>
        <AnimatePresence mode='wait'>
          <motion.div
            ref={navbarRef}
            initial={{
              opacity: 0,
              y: currentPath === '/' ? 500 : 0,
            }}
            animate={{
              y: currentPath === '/' ? 350 : 0, 
              opacity: visible ? 1 : 0,
            }}
            transition={{
              duration: 0.5,
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