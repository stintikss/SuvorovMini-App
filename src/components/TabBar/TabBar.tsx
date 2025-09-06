import type { TabBarProps, TabBarKey } from "../../types/types"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import * as Anim from './Animation/Animation'

const tabs: {key: TabBarKey, label: string}[] = [
    { key: 'home', label: 'Главная' },
    { key: 'about', label: 'Кто я' },
]

const menu: { key: TabBarKey, label: string }[] = [
    { key: 'MiniApp', label: 'Mini App' },
    { key: 'Reviews', label: 'Отзывы' },
    { key: 'Keys', label: 'Кейсы' },
    { key: 'Project', label: 'Проекты' },
    { key: 'Social', label: 'Соц сети' },
    { key: 'Settings', label: 'Настройки' },
]

export function TabBar({ activeTab, onChange, onMenuToggle }: TabBarProps) {

    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const handleMenuToggle = (isOpen: boolean) => {
        setMenuOpen(isOpen);
        onMenuToggle?.(isOpen);
    }

    return (
        <div className="w-full px-4">
            <motion.div className="flex justify-center
                bg-indigo-100/70 px-1.5 py-1 backdrop-blur-2xl rounded-xl max-h-13
                "
                variants={Anim.TabBar}
                initial='hidden'
                animate='animate'
            >
                    {tabs.map((tab, idx) => (
                        <motion.div 
                            key={tab.key} 
                            className="flex items-center"
                            variants={Anim.ItemInTabBar}
                        >
                            <button
                                onClick={() => onChange?.(tab.key)}
                                className={`px-4 py-2 rounded-lg transition-colors max-h-11 ${
                                    activeTab === tab.key 
                                        ? 'bg-white text-[#2A2F4A]' 
                                        : 'bg-transparent text-white border border-white/30 hover:bg-white/10'
                                }`}
                            >
                                {tab.label}
                            </button>
                            {idx !== tabs.length - 1 ? (
                                <span className="mx-2 h-6 w-px bg-white/40" />
                            ) : (
                                <span className="mx-2 h-6 w-px bg-zinc-600/50" />
                            )}
                        </motion.div>
                    ))}

                    <motion.div 
                        className="relative"
                        variants={Anim.ItemInTabBar}
                    >
                        <motion.button
                            onClick={() => handleMenuToggle(!menuOpen)}
                            className="flex items-center justify-center gap-1
                                bg-blue-600/70 h-full rounded-lg w-30 text-white font-medium
                                hover:bg-blue-600/90 transition-colors duration-200
                            "
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Больше
                            <motion.svg 
                                className="w-5 h-5" 
                                fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                                animate={{ rotate: menuOpen ? 180 : 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </motion.svg>
                        </motion.button>
                        
                        <AnimatePresence>
                            {menuOpen && (
                                <motion.div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-20 
                                    min-w-[140px] bg-white/95 backdrop-blur-sm rounded-xl shadow-xl py-2 
                                    flex flex-col items-center border border-white/20
                                    "
                                    variants={Anim.MoreMenuButton}
                                    initial='hidden'
                                    animate='animate'
                                    exit='exit'
                                >
                                    {menu.map((tab, idx) => (
                                        <motion.div
                                            key={tab.key}
                                            variants={Anim.MenuItem}
                                        >
                                            <button
                                                onClick={() => {
                                                    onChange?.(tab.key);
                                                    handleMenuToggle(false);
                                                }}
                                                className="w-full px-4 py-2.5 text-[#2A2F4A] hover:bg-indigo-100/80 
                                                    text-center transition-all duration-200 flex justify-center
                                                    hover:scale-105 active:scale-95 rounded-lg mx-1"
                                            >
                                                {tab.label}
                                            </button>

                                            {idx !== menu.length - 1 && (
                                                <hr className="mx-3 my-1 border-gray-200/40" />
                                            )}
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
        </div>
    )
}