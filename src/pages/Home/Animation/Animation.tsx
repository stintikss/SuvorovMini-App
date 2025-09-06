import { type Variants } from "framer-motion";

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

export const borderTextTop: Variants = {
    hidden: { 
        opacity: 0, 
        background: "linear-gradient(to right, rgba(99,102,241,0), rgba(99,102,241,1) 50%, rgba(99,102,241,0) 100%)",
        borderRadius: "9999px"
    },
    animate: {
        opacity: [0.3, 0.75, 1],
        background: [
            "linear-gradient(to right, rgba(99,102,241,0), rgba(99,102,241,0.7) 50%, rgba(99,102,241,0) 100%)",
            "linear-gradient(to right, rgba(99,102,241,0), rgba(99,102,241,1) 50%, rgba(99,102,241,0) 100%)",
            "linear-gradient(to right, rgba(99,102,241,0), rgba(99,102,241,0.7) 50%, rgba(99,102,241,0) 100%)"
        ],
        borderRadius: "9999px",
        transition: {
            duration: 1,
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
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
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

export const blockWithText: Variants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.95
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

export const TextInTheBlock1: Variants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay: 0.5
        }
    }
}

export const TextInTheBlock2: Variants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay: 0.6
        }
    }
}