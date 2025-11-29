import React, { useRef, useCallback, useEffect } from 'react';

export const ScrollStack = ({ children }) => {
    const wrapperRef = useRef(null);
    const cardsRef = useRef([]);

    const handleScroll = useCallback(() => {
        if (!wrapperRef.current) return;

        const windowHeight = window.innerHeight;

        cardsRef.current.forEach((card, index) => {
            if (!card) return;

            const rect = card.getBoundingClientRect();
            const stickyTop = windowHeight * 0.15;
            const nextCard = cardsRef.current[index + 1];

            let scale = 1;
            let blur = 0;
            let brightness = 1;

            if (nextCard) {
                const nextRect = nextCard.getBoundingClientRect();
                const diff = nextRect.top - stickyTop;
                const range = 600;

                if (diff < range && diff > 0) {
                    const progress = 1 - (diff / range);
                    scale = 1 - (progress * 0.05);
                    blur = progress * 2;
                    brightness = 1 - (progress * 0.2);
                } else if (diff <= 0) {
                    scale = 0.95;
                    blur = 2;
                    brightness = 0.8;
                }
            }

            const inner = card.querySelector('.feature-card-inner');
            if (inner) {
                inner.style.transform = `scale(${scale})`;
                inner.style.filter = `blur(${blur}px) brightness(${brightness})`;
            }
        });
    }, []);

    useEffect(() => {
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, [handleScroll]);

    return (
        <div ref={wrapperRef} className="feature-stack-wrapper">
            {React.Children.map(children, (child, i) => (
                <div
                    ref={el => cardsRef.current[i] = el}
                    className="feature-card-container"
                    style={{
                        zIndex: i + 1,
                        top: `calc(15vh + ${i * 10}px)`
                    }}
                >
                    <div className="feature-card-inner">
                        {child}
                    </div>
                </div>
            ))}
        </div>
    );
};
