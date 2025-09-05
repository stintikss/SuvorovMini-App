import { useState } from "react";
import Home from "../../pages/Home/Home";

export function Router() {
    
    const [activeTab, setActiveTab] = useState<string>('home');

    return (
        <div>
            {activeTab === 'home' && <Home activeTab={activeTab} onChange={setActiveTab} />}
        </div>
    );
}