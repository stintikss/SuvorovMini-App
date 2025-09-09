import { useState } from "react";
import Home from "../../pages/Home/Home";
import About from "../../pages/about/About";
import Stack from "../../pages/Stack/Stack";
import { useDevice } from "./Device";

export function Router() {
    
    const [activeTab, setActiveTab] = useState<string>('stack');
    const sizeDevice = useDevice();

    return (
        <div>
            {activeTab === 'home' && <Home activeTab={activeTab} onChange={setActiveTab} sizeDevice={{device: sizeDevice}}/>}
            {activeTab === 'about' && <About activeTab={activeTab} onChange={setActiveTab} sizeDevice={{device: sizeDevice}}/>}
            {activeTab === 'stack' && <Stack activeTab={activeTab} onChange={setActiveTab} sizeDevice={{device: sizeDevice}}/>}
        </div>
    );
}