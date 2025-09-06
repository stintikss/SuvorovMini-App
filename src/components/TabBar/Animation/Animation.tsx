import { animate, type Variants } from "framer-motion";

export const TabBar: Variants = {
    hidden: {},
    animate: {
        transition: {
            staggerChildren: 0.13,
            delayChildren: 0.1
        }
    }
}

export const ItemInTabBar: Variants = {
    hidden: {
        opacity: 0,
        y: 16
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 30
        }
    }
}

export const MoreMenuButton: Variants = {
    hidden: {
        opacity: 0,
        y: 10,
        scale: 0.95
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 500,
            damping: 30,
            staggerChildren: 0.05,
            delayChildren: 0.1
        }
    },
    exit: {
        opacity: 0,
        y: 10,
        scale: 0.95,
        transition: {
            duration: 0.2,
            ease: "easeInOut"
        }
    }
}

export const MenuItem: Variants = {
    hidden: {
        opacity: 0,
        x: -10
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 25
        }
    },
    exit: {
        opacity: 0,
        x: -10,
        transition: {
            duration: 0.15
        }
    }
}