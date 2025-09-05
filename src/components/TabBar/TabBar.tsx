import type { TabBarProps, TabBarKey } from "../../types/types"
import { useState } from "react"

const tabs: {key: TabBarKey, label: string}[] = [
    { key: 'home', label: 'Главная' },
    { key: 'about', label: 'Кто я' },
]

const menu: { key: TabBarKey, label: string }[] = [
    { key: 'tra', label: 'Отзывы' }
]

export function TabBar({ activeTab, onChange }: TabBarProps) {

    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    return (
        <div className="w-full p-4">
            <div className="flex justify-center
                bg-indigo-100/70 px-1.5 py-1 backdrop-blur-2xl rounded-xl
            ">
                {tabs.map((tab, idx) => (
                    <div key={tab.key} className="flex items-center">
                        <button
                            onClick={() => onChange(tab.key)}
                            className={`px-4 py-2 rounded-lg transition-colors ${
                                activeTab === tab.key 
                                    ? 'bg-white text-[#2A2F4A]' 
                                    : 'bg-transparent text-white border border-white/30 hover:bg-white/10'
                            }`}
                        >
                            {tab.label}
                        </button>
                        {idx !== tabs.length - 1 && (
                            <span className="mx-2 h-6 w-px bg-white/40" />
                        )}
                    </div>
                ))}

                <div className="relative">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex items-center gap-1"
                    >
                        Больше
                        <svg className={`w-5 h-5 transition-transform ${menuOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    
                    {menuOpen && (
                        <div className="absolute left-1/3 -translate-x-1/2 bottom-full mb-2 z-20 min-w-[120px] bg-white/95 rounded-lg shadow-lg py-2 flex flex-col items-stretch">
                            {menu.map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => {
                                        onChange(tab.key);
                                        setMenuOpen(false);
                                    }}
                                    className="px-4 py-2 text-[#2A2F4A] hover:bg-indigo-100/80 text-left transition-colors"
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}