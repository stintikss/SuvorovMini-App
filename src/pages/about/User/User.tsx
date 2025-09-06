import { useEffect, useState } from "react";

export function UserData() {
    const [userName, setUserName] = useState<string>('');

    useEffect(() => {
        const user = window.Telegram?.WebApp?.initDataUnsafe?.user;
        if (user) {
            const name = user.first_name + (user.last_name ? ` ${user.last_name}` : '');
            setUserName(name);
        }
    }, []);

    if (!userName) {
        return null; // или loading state
    }

    return (
        <div className="px-4 py-2 bg-white/10 rounded-full">
            <span className="text-stone-100">👋 Привет, </span>
            <span className="text-indigo-300 font-medium">{userName}</span>
        </div>
    );
}