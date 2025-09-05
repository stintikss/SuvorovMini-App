import { useEffect, useState } from "react";
import Screen from "../Screen";

function ProccesorScreen() {
    const [showScreen, setShowScreen] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowScreen(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showScreen && <Screen />}
        </>
    );
}

export default ProccesorScreen;
