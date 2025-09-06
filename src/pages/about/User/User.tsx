import { useEffect, useState } from "react";

interface TelegramUser {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
}

declare global {
    interface Window {
        Telegram?: {
            WebApp?: {
                initDataUnsafe?: {
                    user?: TelegramUser;
                };
            };
        };
    }
}

export function UserData() {
    const [userName, setUserName] = useState<string>('');

    useEffect(() => {
        // Безопасная проверка на существование Telegram WebApp
        const user = window.Telegram?.WebApp?.initDataUnsafe?.user;
        
        if (user) {
            const name = user.first_name + (user.last_name ? ` ${user.last_name}` : '');
            setUserName(name || 'Пользователь');
        }
    }, []);

    if (!userName) {
        return null; // Не показываем ничего, если данных нет
    }

    return (
        <div className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
            <span className="text-stone-100 text-sm">👋 </span>
            <span className="text-indigo-300 font-medium text-sm">{userName}</span>
        </div>
    );
}