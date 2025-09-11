import { TabBar } from "../../components/TabBar/TabBar";
import type { TabBarProps } from "../../types/types";
import { Beta } from "../../components/Beta/Beta";
// import * as Component from './component/components'
import { motion } from "framer-motion";
// import * as Anim from './Animation/Animation'

function Services({ activeTab, onChange, sizeDevice }: TabBarProps) {
    return (
        <div
            className="w-screen max-w-screen h-screen max-h-screen flex flex-col items-center
            bg-gradient-to-br from-[#1a2337] via-[#283761] to-[#4d5985] isolate
        "
        >

            <div
                className="flex flex-1"
            >

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