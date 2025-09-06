import { animate, type Variants } from "framer-motion";

export const AvatarUser: Variants = {
    hidden: {},
    animate: {
        scale: [1, 1.05, 1],
        rotate: [
            0, 10, 0, -10, 0,
            0, 360 
        ],
        opacity: 1,
        transition: {
            scale: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
            },
            rotate: {
                times: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
                duration: 5, 
                repeat: Infinity,
                ease: 'easeInOut'
            },
            opacity: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }
}