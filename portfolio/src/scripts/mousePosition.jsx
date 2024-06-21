export function getMousePosition(elementRef, event, unit) {
    if (!elementRef.current) return null;

    const element = elementRef.current;
    const rect = element.getBoundingClientRect();

    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    if (unit === 'percent') {
        x = (x / rect.width) * 100;
        y = (y / rect.height) * 100;
    }

    return { x, y };
}
