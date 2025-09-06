import { useEffect, useState } from "react";

type TgUser = {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    photo_url?: string;
};

declare global {
    interface Window {
        Telegram?: any;
        WebApp?: any;
    }
}

export function UserData() {
    const [user, setUser] = useState<TgUser | null>(null);

    useEffect(() => {
        // Попытка получить данные пользователя из Telegram WebApp SDK
        let tgUser: TgUser | null = null;

        // Проверяем наличие Telegram WebApp SDK
        if (window?.Telegram?.WebApp?.initDataUnsafe?.user) {
            tgUser = window.Telegram.WebApp.initDataUnsafe.user;
        } else if (window?.WebApp?.initDataUnsafe?.user) {
            tgUser = window.WebApp.initDataUnsafe.user;
        }

        if (tgUser) {
            setUser(tgUser);
        }
    }, []);

    if (!user) {
        return (
            <div className="flex flex-col items-center justify-center py-4">
                <span className="text-stone-200 text-lg">Загрузка данных пользователя...</span>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center py-4">
            {user.photo_url && (
                <img
                    src={user.photo_url}
                    alt="User avatar"
                    className="w-16 h-16 rounded-full mb-2 border-2 border-indigo-400/80 shadow"
                />
            )}
            <span className="text-stone-100 text-xl font-semibold">
                {user.first_name} {user.last_name}
            </span>
            {user.username && (
                <span className="text-indigo-300 text-sm">@{user.username}</span>
            )}
            <span className="text-stone-400 text-xs mt-1">ID: {user.id}</span>
        </div>
    );
}