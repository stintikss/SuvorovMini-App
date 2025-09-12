import { useState } from "react";
import Home from "../../pages/Home/Home";
import About from "../../pages/about/About";
import Stack from "../../pages/Stack/Stack";
import Social from "../../pages/socialNetworks/Social";
import Services from "../../pages/services/Services/Services";
import Reviews from "../../pages/services/Reviews/Reviews";
import { useDevice } from "./Device";

export function Router() {
    
    const [activeTab, setActiveTab] = useState<string>('home');
    const sizeDevice = useDevice();

    return (
        <div>
            {activeTab === 'home' && <Home activeTab={activeTab} onChange={setActiveTab} sizeDevice={{device: sizeDevice}}/>}
            {activeTab === 'about' && <About activeTab={activeTab} onChange={setActiveTab} sizeDevice={{device: sizeDevice}}/>}
            {activeTab === 'stack' && <Stack activeTab={activeTab} onChange={setActiveTab} sizeDevice={{device: sizeDevice}}/>}
            {activeTab === 'socialNetworks' && <Social activeTab={activeTab} onChange={setActiveTab} sizeDevice={{device: sizeDevice}}/>}
            {activeTab === 'services' && <Services activeTab={activeTab} onChange={setActiveTab} sizeDevice={{device: sizeDevice}}/>}
            {activeTab === 'Reviews' && <Reviews activeTab={activeTab} onChange={setActiveTab} sizeDevice={{device: sizeDevice}}/>}
        </div>
    );
}