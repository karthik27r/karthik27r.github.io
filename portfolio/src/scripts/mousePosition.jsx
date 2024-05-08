{/* Use to calculate the position of mouse within an element */}

export function getMousePosition(elementRef, unit) {

    const requestUnit = unit === 'pixel'? 'px': '%';

    if (!elementRef.current) return; 

    const element = elementRef.current;

    const handleMouseMove = (e) => {
        const rect = element.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        element.style.setProperty('--x', `${x}${requestUnit}`);
        element.style.setProperty('--y', `${y}${requestUnit}`);
    };

    element.addEventListener('mousemove', handleMouseMove);

    return () => {
        element.removeEventListener('mousemove', handleMouseMove);
    };
}
