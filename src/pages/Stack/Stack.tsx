import { TabBar } from "../../components/TabBar/TabBar";
import type { TabBarProps } from "../../types/types";
import { motion } from "framer-motion";
import { Beta } from "../../components/Beta/Beta";
import { StackTech } from "./component/constants";
import * as Anim from './Animation/Animation'

function Stack({ activeTab, onChange, sizeDevice }: TabBarProps) {
    return (
        <div className="bg-gradient-to-br from-[#1a2337] via-[#283761] to-[#4d5985]
            w-screen h-screen flex flex-col
        ">

            <div
                className="w-full flex justify-center text-center py-5"
            >
                <h1 
                    style={{ fontFamily: 'Unbounded, sans-serif' }}
                    className="text-center
                        text-violet-400 text-2xl font-semibold
                        text-shadow-[2px_2px_4px_rgba(26,11,46,0.8)]
                    "
                >
                    <span className="block">МОЙ СТЕК</span>
                    <span className="block">ФУЛЛСТЕКА</span>
                </h1>
            </div>

            <div 
                className="flex flex-1 overflow-y-scroll w-full justify-center"
                style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none"
                }}
            >
                <style>
                    {`
                        div::-webkit-scrollbar {
                            display: none;
                        }
                    `}
                </style>

                <div> 
                    {StackTech.map((section, sectionIndex) => (
                        <motion.div
                            key={sectionIndex}
                            className="flex items-center justify-center flex-col gap-4
                                bg-[rgba(59,130,246,0.10)] backdrop-blur-md rounded-xl p-4 mt-1 mb-10
                                border border-[rgba(59,131,246,0.21)]
                                shadow-[0_4px_5px_0_rgba(96,165,250,0.25),0_1.5px_8px_0_rgba(139,92,246,0.18),0_0.5px_1.5px_0_rgba(236,72,153,0.10)]
                            "
                            style={{ fontFamily: 'Unbounded, sans-serif' }}
                            variants={Anim.CommonBlock}
                            initial='hidden'
                            animate='animate'
                        >
                            <motion.div 
                                className="text-xl font-semibold text-blue-200 mb-2
                                    flex flex-col items-center gap-2
                                "
                                variants={Anim.CommonBlock}
                            >
                                {section.nameTech.toUpperCase()}
                                <motion.div className="border border-[#738cc5] w-14" variants={Anim.borderTextBottom} initial='hidden' animate='animate' />
                            </motion.div>
                            <motion.div 
                                className="grid grid-cols-2 gap-5"
                                variants={Anim.CommonBlock}
                            >
                                {section.technologies.map((tech, techIndex) => (
                                    <motion.div
                                        key={techIndex}
                                        className="w-27 h-26 border-2 border-[#60a5fa] rounded-xl
                                            flex items-center justify-center flex-col gap-2
                                            px-2 transition-all duration-300 ease-in-out
                                            bg-gradient-to-br from-[rgba(59,130,246,0.15)] to-[rgba(96,165,250,0.15)]
                                        "
                                        variants={Anim.CommonBlock}
                                        whileHover={{ scale: 1.05, boxShadow: '0 8px 24px 0 rgba(59,130,246,0.18)' }}
                                    >
                                        <div>
                                            <tech.icon />
                                        </div>
                                        <span className="text-blue-100 font-medium text-[13px] text-center">{tech.name}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

            </div>

            <motion.div
                className="flex flex-col gap-1 justify-end py-2 mt-4"
            >
                <TabBar 
                    activeTab={activeTab} 
                    onChange={onChange}
                />
                <div
                    className={`w-full flex px-8 ${sizeDevice?.device ? 'justify-end' : 'justify-center'}`}
                >
                    <Beta />
                </div>
            </motion.div>
        </div>
    )
}

export default Stack
