import { TabBar } from "../../components/TabBar/TabBar";
import type { TabBarProps } from "../../types/types";
import { motion } from "framer-motion";
import { Beta } from "../../components/Beta/Beta";
import { UserData } from "./User/User";
import { useState, useEffect } from "react";

function About({ activeTab, onChange, sizeDevice }: TabBarProps) {
    const [userLoading, setUserLoading] = useState<boolean>(true);

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
            <div className="flex-1 flex flex-col justify-center px-4">
                <UserData onLoadingChange={handleLoadingChange} />
                
            </div>

            <motion.div
                className="flex flex-col gap-1 flex-1 justify-end py-2"
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

export default About