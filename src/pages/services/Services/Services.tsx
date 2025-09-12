import { TabBar } from "../../../components/TabBar/TabBar";
import type { TabBarProps, ButtonSecondary } from "../../../types/types";
import { Beta } from "../../../components/Beta/Beta";
import * as Component from './component/components'
import { motion } from "framer-motion";
import * as Anim from './Animation/Animation'

function Services({ activeTab, onChange, sizeDevice }: TabBarProps) {

    const ButtonClick = (button: ButtonSecondary) => {
        switch (button.key) {
            case 'consult':
                if (button.link) {
                    window.open(button.link, '_blank', 'noopener,noreferrer');
                }
                break;
            case 'reviews':
                if (button.change) onChange?.(button.change);
                break;
            default:
                console.warn(`Unknown button key: ${button.key}`);
        }
    }

    return (
        <div
            className="w-screen max-w-screen h-screen max-h-screen flex flex-col items-center
            bg-gradient-to-br from-[#1a2337] via-[#283761] to-[#4d5985] isolate
        "
        >
            <div
                className="flex flex-1 flex-col justify-start items-center gap-10 w-full pt-8 overflow-y-auto"
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
                <div
                    className="w-full flex justify-center text-center py-2 mb-5"
                >
                    <h1
                        style={{ fontFamily: 'Unbounded, sans-serif' }}
                        className="text-center md:inline-block 
                            text-violet-400 text-2xl font-semibold
                            text-shadow-[2px_2px_4px_rgba(26,11,46,0.8)]
                        "
                    >
                        {'Услуги'.toUpperCase()}
                    </h1>
                </div>
                <div
                    className="flex flex-col items-center gap-13"
                >
                    <motion.div
                        className="flex flex-col gap-7"
                        variants={Anim.TopButton}
                        initial='hidden'
                        animate='animate'
                    >
                        {Component.BUTTON_SERVICES.map((button) => (
                            <motion.button
                                key={button.key}
                                className="h-auto w-68 px-6 py-3 flex justify-start
                                    bg-[linear-gradient(135deg,#8b5cf6,#a855f7)] bg-clip-padding backdrop-blur-xl backdrop-saturate-150
                                    rounded-xl text-base text-white gap-3
                                    shadow-[0px_4px_10px_#8b5cf666]
                                "
                                style={{
                                    background: 'linear-gradient(135deg,#8b5cf6,#a855f7, #a783ff)',
                                    opacity: 0.95,
                                    fontFamily: 'Unbounded, sans-serif',
                                }}
                                variants={Anim.TopButton}
                            >
                                <span>
                                    <button.icon />
                                </span>
                                <span className="">
                                    {button.label}
                                </span>
                            </motion.button>
                        ))}
                    </motion.div>

                    <motion.div className="w-68 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" variants={Anim.Stripe} initial='hidden' animate='animate'/>

                    <motion.div
                        className="flex flex-col gap-5"
                        variants={Anim.BottomButton}
                        initial='hidden'
                        animate='animate'
                    >
                        {Component.BUTTON_SECONDARY.map((button) => (
                            <motion.button
                                key={button.key}
                                className="h-auto w-67 px-6 py-3 flex justify-center
                                    rounded-xl text-white font-medium text-sm
                                "
                                style={{ 
                                    background: 'linear-gradient(135deg, rgb(141, 91, 254), rgb(181 103 254), rgba(198, 175, 254, 0.6))', 
                                    opacity: 1,
                                    fontFamily: 'Unbounded, sans-serif',
                                }}  
                                variants={Anim.BottomButton}
                                onClick={() => ButtonClick(button)}
                            >
                                <p>
                                    {button.label.toUpperCase()}
                                </p>
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </div>

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
export default Services