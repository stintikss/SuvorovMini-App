import type { TabBarProps, TabBarKey } from "../../types/types"

const tabs: {key: TabBarKey, label: string}[] = [
    { key: 'home', label: 'Главная' },
]

export function TabBar({ activeTab, onChange }: TabBarProps) {
    return (
        <div className="w-full p-4">
            <div className="flex gap-2 justify-center">
                {tabs.map(tab => (
                    <button
                        key={tab.key}
                        onClick={() => onChange(tab.key)}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                            activeTab === tab.key 
                                ? 'bg-white text-[#2A2F4A]' 
                                : 'bg-transparent text-white border border-white/30 hover:bg-white/10'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    )
}