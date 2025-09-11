import { animate, type Variants } from "framer-motion";

export const CommonBlockExText: Variants = {
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

export const Text: Variants = {
    hidden: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            ease: 'easeInOut',
            duration: 1,
        }
    }
}