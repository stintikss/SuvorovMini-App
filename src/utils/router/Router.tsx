import { useState } from "react";
import Home from "../../pages/Home/Home";
import { About } from "../../pages/about/About";

export function Router() {
    
    const [activeTab, setActiveTab] = useState<string>('home');

    return (
        <div>
            {activeTab === 'home' && <Home activeTab={activeTab} onChange={setActiveTab} />}
            {activeTab === 'about' && <About activeTab={activeTab} onChange={setActiveTab} />}
        </div>
    );
}