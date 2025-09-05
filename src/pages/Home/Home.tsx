import { TabBar } from "../../components/TabBar/TabBar";
import type { TabBarProps } from "../../types/types";
import { motion, AnimatePresence } from "framer-motion";
import { AnimationHeadingName, wordVariants, spaceVariants } from "./Animation/Animation";

function Home({ activeTab, onChange }: TabBarProps) {
    return (
        <div
            className="w-screen max-w-screen h-screen max-h-screen flex flex-col items-center
                bg-gradient-to-br from-[#434656] via-[#3F4C8E] to-[#2A2F4A]
            "
        >
            <motion.div 
                className="flex justify-center h-50 max-h-100 w-screen
                    p-7 text-stone-50 tracking-[0.2rem] font-medium text-3xl
                "
                style={{ fontFamily: 'Nata Sans, sans-serif' }}
                variants={AnimationHeadingName}
                initial='hidden'
                animate='animate'
            >
                <motion.span
                    variants={wordVariants}
                >
                    DevTrip
                </motion.span>
                <motion.span 
                    variants={spaceVariants}
                />
                <motion.span
                    variants={wordVariants}
                >
                    Frontend
                </motion.span>
            </motion.div>
            
            
            <motion.div>
                <TabBar activeTab={activeTab} onChange={onChange} />
            </motion.div>
        </div>
    )
}

export default Home