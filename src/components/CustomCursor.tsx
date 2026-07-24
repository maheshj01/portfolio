import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
    const bigBallRef = useRef<HTMLDivElement | null>(null);
    const smallBallRef = useRef<HTMLDivElement | null>(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const bigBallPos = useRef({ x: 0, y: 0 });
    const smallBallPos = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number | null>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        // Hover handlers for interactive elements
        const handleMouseEnter = () => {
            setIsHovering(true);
        };

        const handleMouseLeave = () => {
            setIsHovering(false);
        };

        // Add listeners to hoverable elements
        const hoverableSelector = 'a, button, input[type="button"], input[type="submit"], [role="button"]';
        const hoverables = document.querySelectorAll(hoverableSelector);

        hoverables.forEach((element) => {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        });

        document.addEventListener('mousemove', handleMouseMove, { passive: true });

        // Animation loop with different speeds for each ball
        const animate = () => {
            // Big ball follows with slower easing (0.15 = similar to TweenMax duration: 0.4)
            bigBallPos.current.x += (mousePos.current.x - bigBallPos.current.x) * 0.15;
            bigBallPos.current.y += (mousePos.current.y - bigBallPos.current.y) * 0.15;

            // Small ball follows faster (0.5 = similar to TweenMax duration: 0.1)
            smallBallPos.current.x += (mousePos.current.x - smallBallPos.current.x) * 0.5;
            smallBallPos.current.y += (mousePos.current.y - smallBallPos.current.y) * 0.5;

            if (bigBallRef.current) {
                bigBallRef.current.style.transform = `translate(${bigBallPos.current.x - 15}px, ${bigBallPos.current.y - 15}px)`;
            }

            if (smallBallRef.current) {
                smallBallRef.current.style.transform = `translate(${smallBallPos.current.x - 5}px, ${smallBallPos.current.y - 5}px)`;
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animationFrameRef.current = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            hoverables.forEach((element) => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
            });
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <div className="cursor">
            <div
                ref={bigBallRef}
                className={`cursor__ball cursor__ball--big ${isHovering ? 'cursor__ball--hover' : ''}`}
            >
                <svg height="30" width="30">
                    <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
                </svg>
            </div>

            <div
                ref={smallBallRef}
                className="cursor__ball cursor__ball--small"
            >
                <svg height="10" width="10">
                    <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
                </svg>
            </div>
        </div>
    );
}

export default CustomCursor;
