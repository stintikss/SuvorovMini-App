import { TabBar } from "../../components/TabBar/TabBar";
import type { TabBarProps } from "../../types/types";
import { Beta } from "../../components/Beta/Beta";
import * as Component from './component/components'
import { motion } from "framer-motion";
import * as Anim from './Animation/Animation'

function Social({ activeTab, onChange, sizeDevice }: TabBarProps) {
    
    return (
        <div
            className="w-screen max-w-screen h-screen max-h-screen flex flex-col items-center
            bg-gradient-to-br from-[#1a2337] via-[#283761] to-[#4d5985] isolate
        "
        >

            <motion.div
                className="flex-1 flex w-full items-center justify-center flex-col gap-10"
                variants={Anim.CommonBlockExText}
                initial='hidden'
                animate='animate'
            >
                <motion.div
                    className="flex flex-col"
                    variants={Anim.Text}
                    initial='hidden'
                    animate='animate'
                >
                    <div
                        className="w-full flex justify-center text-center py-5"
                    >
                        <h1
                            style={{ fontFamily: 'Unbounded, sans-serif' }}
                            className="text-center md:inline-block 
                                text-violet-400 text-2xl font-semibold
                                text-shadow-[2px_2px_4px_rgba(26,11,46,0.8)]
                            "
                        >
                            {'Мои соц сети'.toUpperCase()}
                        </h1>
                    </div>
                </motion.div>

                <div
                    className="flex flex-col gap-5 w-55"
                >
                    {Component.SOCIAL_NETWORKS.map((social) => (
                        <motion.div
                            className="bg-[rgba(169,137,243,0.35)] border border-[rgba(176,90,251,0.56)]
                                rounded-xl p-[1rem] bg-clip-padding w-full text-base font-medium text-white
                                flex gap-[1rem]
                            "
                            style={{ backdropFilter: 'blur(64px) saturate(150%)', WebkitBackdropFilter: 'blur(24px) saturate(150%)', fontFamily: 'Unbounded, sans-serif' }}
                            key={social.label}
                            onClick={() => social.link && window.open(social.link, '_blank')}
                            variants={Anim.CommonBlockExText}
                        >
                            <span>
                                <social.icon />
                            </span>
                            <span
                                className="underline decoration-[#8b5cf6] underline-offset-4"
                            >
                                {social.label.toUpperCase()}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <div className="flex flex-col gap-1 justify-end py-2">
                <TabBar 
                    activeTab={activeTab} 
                    onChange={onChange}
                />
                <div
                    className={`w-full flex px-8 ${sizeDevice?.device ? 'justify-end' : 'justify-center'}`}
                >
                    <Beta />
                </div>
            </div>
        </div>
    )
}

export default Social