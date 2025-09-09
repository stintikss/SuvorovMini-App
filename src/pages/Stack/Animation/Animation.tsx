import { type Variants } from "framer-motion";

export const CommonBlock: Variants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.30,
            ease: 'easeInOut',
            duration: 1.3
        }
    }
}

export const borderTextBottom: Variants = {
    hidden: {
        scaleX: 0.3,
        opacity: 0
    },
    animate: {
        scaleX: 1,
        opacity: 1,
        transition: {
            duration: 3,
            ease: 'easeInOut'
        }
    }
}