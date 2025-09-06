import { TabBar } from "../../components/TabBar/TabBar";
import type { TabBarProps } from "../../types/types";

export function About({ activeTab, onChange }: TabBarProps) {
    return (
        <TabBar 
            activeTab={activeTab} 
            onChange={onChange} 
        />
    )
}