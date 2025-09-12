import { type Variants } from "framer-motion";

export const TopButton: Variants = {
    hidden: {
        opacity: 0,
        top: 50,
    },
    animate: {
        opacity: 1,
        top: 0,
        transition: {
            ease: 'easeInOut',
            duration: 1,
            staggerChildren: 0.15,
            delayChildren: 0.30,
        }
    }
}

export const BottomButton: Variants = {
    hidden: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            ease: 'easeInOut',
            duration: 1,
            delay: 1,
            staggerChildren: 0.15,
            delayChildren: 0.30,
        }
    }
}

export const Stripe: Variants = {
    hidden: {
        opacity: 0,
        scaleX: 0.5
    },
    animate: {
        opacity: 1,
        scaleX: 1,
        transition: {
            ease: 'easeInOut',
            duration: 1.5,
            delay: 1.5,
        }
    }
}