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
            duration: 0.5,
            staggerChildren: 0.15,
            delayChildren: 0.30,
        }
    }
}

export const NameBlock: Variants = {
    hidden: {
        y: -50
    },
    animate: {
        y: 0,
        transition: {
            ease: 'easeInOut',
            duration: 0.5,
        }
    }
}

export const Avatar: Variants = {
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

export const TextAvatar: Variants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 120,
            damping: 14,
            mass: 0.8,
            duration: 2,
            delay: 1.3
        }
    }
}

export const Button: Variants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 120,
            damping: 14,
            mass: 0.8,
            staggerChildren: 0.3,
            delayChildren: 1.5
        }
    }
}