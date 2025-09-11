import type { Variants } from "framer-motion";

export const CommonBlock: Variants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'easeInOut',
            duration: 1,
            staggerChildren: 0.15,
            delayChildren: 0.30,
        }
    }
}