import type { Variants } from "framer-motion";

export const AnimationHeadingName: Variants = {
    hidden: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0, transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
    } }
};

export const wordVariants: Variants = {
    hidden: { y: -30, opacity: 0, scale: 0.8 },
    animate: { y: 0, opacity: 1, scale: 1, transition: { 
        type: "spring", stiffness: 500, damping: 30 
    } }
};

export const spaceVariants: Variants = {
    hidden: { width: 0, opacity: 0 },
    animate: { 
        width: "1rem", 
        opacity: 1,
        transition: { 
            delay: 2,
            duration: 0.5,
            ease: "easeOut"
        }
    }
}