import { TabBar } from "../../components/TabBar/TabBar";
import type { TabBarProps } from "../../types/types";
import { motion } from "framer-motion";
import { Beta } from "../../components/Beta/Beta";
import { UserData } from "../../components/User/User";
import { useState, useEffect } from "react";
import * as Constants from './component/constants'
import * as Anim from './Animation/Animation'


function About({ activeTab, onChange, sizeDevice }: TabBarProps) {
    const [userLoading, setUserLoading] = useState<boolean>(false);

    const handleLoadingChange = (loading: boolean) => {
        setUserLoading(loading);
    };

    useEffect(() => {
        console.log(userLoading);
    }, [userLoading]);


    return (
        <div
            className="w-screen max-w-screen h-screen max-h-screen flex flex-col justify-between items-center
                bg-gradient-to-br from-[#1a2337] via-[#283761] to-[#4d5985]
            "
        >
            <motion.div 
                className="flex flex-col flex-1 w-full h-full"
            >
                <motion.div className={`flex justify-start
                    px-4 h-13 items-end w-full mb-2 py-3
                    `}
                    variants={Anim.CommonBlock}
                >
                    <UserData onLoadingChange={handleLoadingChange} />
                </motion.div>
            
                <motion.div
                    className="flex flex-col w-screen overflow-y-scroll px-12 items-center"
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none"
                    }}
                    variants={Anim.CommonBlock}
                >
                    <style>
                        {`
                            div::-webkit-scrollbar {
                                display: none;
                            }
                        `}
                    </style>
                    <div
                        className="flex flex-col items-center w-full mt-4 gap-8 mb-10"
                    >
                        <img 
                            src="/Channel.jpg" 
                            alt="" 
                            className="object-contain w-30 h-auto 
                                rounded-full border-3 border-solid border-violet-600/70
                                shadow-[0_8px_32px_#8b5cf666,0_0_0_8px_#8b5cf61a,inset_0_0_0_1px_#ffffff1a]
                            "
                            style={{ imageRendering: "auto" }}
                            loading="lazy"
                            draggable={false}
                        />
                        <div
                            className="flex flex-col gap-5"
                        >
                            <h3
                                style={{ fontFamily: 'Unbounded, sans-serif' }}
                                className="text-center md:inline-block 
                                    text-violet-400 text-2xl font-semibold
                                    text-shadow-[2px_2px_4px_rgba(26,11,46,0.8)]
                                "
                            >
                                <span className="block md:inline">DEVTRIP</span>
                                <span className="block md:inline md:ml-2">FRONTEND</span>
                            </h3>
                            
                            <div className="flex flex-wrap gap-2 w-full justify-center px-5">
                                {Constants.AboutMeHeader.map((item) => (
                                    <span
                                        key={item.key}
                                        className='rounded-xl px-2 py-0.5 font-semibold text-sm'
                                        style={{background: item.bg, color: item.color}}
                                    >
                                        {item.description}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-center justify-center gap-4 mb-8">
                        <button
                            style={{ 
                                background: 'linear-gradient(135deg,#8b5cf6,#a855f7)', 
                                fontFamily: 'Unbounded, sans-serif',
                                width: '100%'
                            }}
                            className="rounded-xl h-14
                            shadow-[0_4px_16px_#8b5cf6] max-w-64 min-w-56
                            text-white font-semibold text-base
                            mb-2
                            "
                            onClick={() => onChange?.('stack')}
                        >
                            МОЙ СТЕК
                        </button>
                        <div className="w-full flex flex-col items-center gap-3">
                            {Constants.ButtonBottom.map((button) => (
                                <button
                                    key={button.key}
                                    onClick={() => onChange?.(button.change)}
                                    style={{ 
                                        background: '#5f5bb5',
                                        fontFamily: 'Unbounded, sans-serif',
                                        width: '100%',
                                        color: '#fff'
                                    }}
                                    className="rounded-xl h-12
                                    shadow-[1px_2px_8px_#312e81] max-w-64 min-w-56
                                    text-white font-medium text-base
                                    "
                                >
                                    {button.title}
                                </button>
                            ))}
                        </div>
                    </div>
  
                </motion.div>
                <div className="flex flex-col gap-1 flex-1 justify-end py-2">
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
            </motion.div>
        </div>
    )
}

export default About