import React from 'react';
import { motion } from 'framer-motion';

export const Reveal = ({ children, className = "", delay = 0, duration = 0.5, y = 20 }) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};
