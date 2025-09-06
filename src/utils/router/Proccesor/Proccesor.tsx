import { Router } from "../Router";
import Screen from "../../../pages/Screen/Screen";
import { useState, useEffect } from "react";

export function ProccesorRouter() {
    const [showScreen, setShowScreen] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowScreen(false);
        }, 4400);
        return () => clearTimeout(timer);
    }, []);

    return showScreen ? <Screen /> : <Router />;
}