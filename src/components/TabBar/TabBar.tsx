import type { TabBarProps, TabBarKey } from "../../types/types"
import { useState } from "react"

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
    { key: 'Social', label: 'Настройки' },
]

export function TabBar({ activeTab, onChange, onMenuToggle }: TabBarProps) {

    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const handleMenuToggle = (isOpen: boolean) => {
        setMenuOpen(isOpen);
        onMenuToggle?.(isOpen);
    }

    return (
        <div className="w-full p-4">
            <div className="flex justify-center
                bg-indigo-100/70 px-1.5 py-1 backdrop-blur-2xl rounded-xl max-h-13
            ">
                {tabs.map((tab, idx) => (
                    <div key={tab.key} className="flex items-center">
                        <button
                            onClick={() => onChange(tab.key)}
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
                    </div>
                ))}

                <div className="relative">
                    <button
                        onClick={() => handleMenuToggle(!menuOpen)}
                        className="flex items-center justify-center gap-1
                            bg-blue-600/70 h-full rounded-lg w-30 text-white font-medium
                        "
                    >
                        Больше
                        <svg className={`
                            w-5 h-5 transition-transform 
                            ${menuOpen ? 'rotate-180' : 'rotate-0'}`} 
                            fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    
                    {menuOpen && (
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-20 
                            min-w-[120px] bg-white/95 rounded-lg shadow-lg py-2 
                            flex flex-col items-center">
                            {menu.map((tab, idx) => (
                                <div
                                    key={tab.key}
                                >
                                     <button
                                        onClick={() => {
                                            onChange(tab.key);
                                            handleMenuToggle(false);
                                        }}
                                        className="w-full px-4 py-2 text-[#2A2F4A] hover:bg-indigo-100/80 text-center transition-colors flex justify-center"
                                    >
                                        {tab.label}
                                    </button>

                                    {idx !== menu.length - 1 && (
                                        <hr className="mx-2 my-1 border-gray-200/60" />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}