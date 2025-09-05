import { TabBar } from "../../components/TabBar/TabBar";
import type { TabBarProps } from "../../types/types";
import { motion } from "framer-motion";
import { AnimationHeadingName, wordVariants, spaceVariants, borderTextTop } from "./Animation/Animation";
import { useEffect, useState } from "react";
import { Beta } from "../../components/Beta/Beta";

function Home({ activeTab, onChange }: TabBarProps) {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [sizeDevice] = useState<boolean>(() => {
        return window.innerWidth >= 768 ? false : true
    });
    const [sizeMenuSettings, setSizeMenuSettings] = useState<boolean>(false)


    useEffect(() => {
        if(sizeDevice) {
            console.log('У вас телефон')
        } else {
            console.log('У вас ПК')
        }
    }, [sizeDevice]);

    useEffect(() => {
        if(sizeDevice && menuOpen) {
            setSizeMenuSettings(true)
        } else {
            setSizeMenuSettings(false)
        }
    })

    const handleMenuToggle = (isOpen: boolean) => {
        setMenuOpen(isOpen);
    };
    return (
        <div
            className="w-screen max-w-screen h-screen max-h-screen flex flex-col justify-between items-center
                bg-gradient-to-br from-[#1a2337] via-[#283761] to-[#4d5985]
            "
        >
            <motion.div 
                className="flex flex-col items-center h-50 max-h-100 w-screen max-w-95
                    p-7 text-stone-50 tracking-[0.2rem] font-medium text-3xl flex-1
                "
                style={{ fontFamily: 'Nata Sans, sans-serif' }}
            >
                <motion.div 
                    className="border-b-2 border-indigo-400/78 w-8/10 mx-auto"
                    variants={borderTextTop}
                    initial='hidden'
                    animate='animate'
                />

                <motion.div
                    className="mt-5 mb-3 flex items-center"
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

                <motion.div 
                    className="border-t-2 border-indigo-400/78 w-20/21 mx-auto"
                />
                
            </motion.div>
            
            <motion.div 
                className={`mt-8 mb-6 px-6 py-4 bg-white/10 rounded-xl shadow-lg 
                    flex flex-1 flex-col items-center justify-center
                    max-w-81 mx-auto md:max-w-100 relative
                    ${sizeMenuSettings ? 'max-h-40' : 'max-h-50'}
                `}
                animate={{y: sizeMenuSettings ? -175 : 0, opacity: 1} 
                }
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
            >
                <h1 className={`md:text-3xl font-bold text-indigo-200 
                    mb-2 text-center drop-shadow-lg
                    ${sizeMenuSettings ? 'text-lg' : 'text-2xl'}
                    `}
                >
                    Добро пожаловать в <span className="text-indigo-400">Mini-App</span>!
                </h1>
                <p className={`text-base md:text-lg 
                    text-stone-100 text-center font-medium tracking-wide
                    ${sizeMenuSettings ? 'text-sm' : 'text-base'}
                    `}
                >
                    Открой для себя возможности приложения.<br />
                    <span className="text-indigo-300">Воспользуйся панелью снизу</span> для навигации.
                </p>
                {sizeMenuSettings && (
                    <div className="h-px w-full bg-gray-200/60 absolute left-0 -bottom-2" />  
                )}
            </motion.div>
            
            
            <motion.div
                className="flex flex-col gap-1 flex-1 justify-end py-2"
            >
                <TabBar 
                    activeTab={activeTab} 
                    onChange={onChange} 
                    onMenuToggle={handleMenuToggle}
                />
                <div
                    className={`w-full flex px-8 ${sizeDevice ? 'justify-end' : 'justify-center'}`}
                >
                    <Beta />
                </div>
            </motion.div>

        </div>
    )
}

export default Home