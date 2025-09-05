import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useState } from "react";

const letters = "DevTrip Frontend".split("");

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.3,
        },
    },
    exit: {
        opacity: 0,
        transition: { when: "afterChildren", staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const letterVariants: Variants = {
    hidden: { y: 60, opacity: 0, rotate: -20 },
    visible: {
        y: 0,
        opacity: 1,
        rotate: 0,
        transition: { type: "spring" as const, stiffness: 500, damping: 30 }
    },
    exit: { y: -60, opacity: 0, rotate: 20, transition: { duration: 0.4 } }
};

function Screen() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShow(false), 3200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className="w-screen max-w-screen h-screen max-h-screen flex items-center justify-center
                bg-gradient-to-br from-[#434656] via-[#3F4C8E] to-[#2A2F4A]
            "
        >
            <AnimatePresence>
                {show && (
                    <motion.div
                        className="flex space-x-1"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {letters.map((char, idx) => (
                            <motion.span
                                key={idx}
                                variants={letterVariants}
                                className="text-5xl md:text-7xl font-extrabold tracking-wide"
                                style={{
                                    fontFamily: "'Montserrat', 'Inter', 'Segoe UI', Arial, sans-serif",
                                    color: "white",
                                    textShadow: "0 2px 16px #3F4C8E, 0 1px 0 #222"
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Screen