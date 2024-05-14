"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedPlaceholders({
                                         placeholders,
                                     }: {
    placeholders: string[];
}) {
    const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

    useEffect(() => {
        const startAnimation = () => {
            const interval = setInterval(() => {
                setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
            }, 1500);
            return () => clearInterval(interval);
        };

        startAnimation();
    }, [placeholders.length]);

    return (
        <AnimatePresence mode="wait">
            <motion.p
                key={`current-placeholder-${currentPlaceholder}`}
                initial={{ y: 5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -5, opacity: 0 }}
                transition={{ duration: 0.5, ease: "linear" }}
                className="text-red-600 pl-4"
            >
                {placeholders[currentPlaceholder]}
            </motion.p>
        </AnimatePresence>
    );
}
