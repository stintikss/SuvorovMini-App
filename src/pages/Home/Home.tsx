import { TabBar } from "../../components/TabBar/TabBar";
import type { TabBarProps } from "../../types/types";
import { motion } from "framer-motion";
import { AnimationHeadingName, wordVariants, spaceVariants } from "./Animation/Animation";

function Home({ activeTab, onChange }: TabBarProps) {
    return (
        <div
            className="w-screen max-w-screen h-screen max-h-screen flex flex-col items-center
                bg-gradient-to-br from-[#1a2337] via-[#283761] to-[#4d5985]
            "
        >
            <motion.div 
                className="flex flex-col items-center h-50 max-h-100 w-screen
                    p-7 text-stone-50 tracking-[0.2rem] font-medium text-3xl
                "
                style={{ fontFamily: 'Nata Sans, sans-serif' }}
            >
                {/* <motion.div 
                    className="border border-[red] w-full"
                /> */}

                <motion.div
                    variants={AnimationHeadingName}
                    initial='hidden'
                    animate='animate'
                >
                    <motion.span
                        className="inline-block"
                        variants={wordVariants}
                    >
                        DevTrip
                    </motion.span>

                    <motion.span
                    className="inline-block"
                    variants={spaceVariants}
                    />

                    <motion.span
                        className="inline-block"
                        variants={wordVariants}
                    >
                        Frontend
                    </motion.span>
                </motion.div>
                
            </motion.div>
            
            
            <motion.div>
                <TabBar activeTab={activeTab} onChange={onChange} />
            </motion.div>
        </div>
    )
}

export default Home