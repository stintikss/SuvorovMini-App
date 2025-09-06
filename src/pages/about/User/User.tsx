import { useEffect, useState } from "react";

interface TelegramUser {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    is_premium?: boolean;
}

export function UserData() {
    const [user, setUser] = useState<TelegramUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Проверяем, что мы в Telegram Mini App
        if (window.Telegram?.WebApp) {
            const tg = window.Telegram.WebApp;
            
            // Получаем данные пользователя
            const userData = tg.initDataUnsafe?.user;
            
            if (userData) {
                setUser(userData);
            } else {
                // Если данные недоступны, используем тестовые
                setUser({
                    id: 123456789,
                    first_name: "Тестовый",
                    last_name: "Пользователь",
                    username: "test_user",
                    language_code: "ru",
                    is_premium: false
                });
            }
        } else {
            // Для разработки вне Telegram
            setUser({
                id: 123456789,
                first_name: "Разработчик",
                last_name: "Тест",
                username: "dev_user",
                language_code: "ru",
                is_premium: true
            });
        }
        
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <div className="text-white text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
                <p className="mt-2">Загрузка...</p>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="text-red-300 text-center">
                <p>Не удалось получить данные пользователя</p>
            </div>
        );
    }

    return (
        <div className="bg-white/10 rounded-xl p-4 mb-4 mx-4">
            <h3 className="text-white text-lg font-semibold mb-3 text-center">
                👤 Данные пользователя
            </h3>
            
            <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                    <span className="text-gray-300">ID:</span>
                    <span className="text-white font-mono">{user.id}</span>
                </div>
                
                <div className="flex justify-between">
                    <span className="text-gray-300">Имя:</span>
                    <span className="text-white">
                        {user.first_name} {user.last_name || ''}
                    </span>
                </div>
                
                {user.username && (
                    <div className="flex justify-between">
                        <span className="text-gray-300">Username:</span>
                        <span className="text-blue-300">@{user.username}</span>
                    </div>
                )}
                
                {user.language_code && (
                    <div className="flex justify-between">
                        <span className="text-gray-300">Язык:</span>
                        <span className="text-white">{user.language_code.toUpperCase()}</span>
                    </div>
                )}
                
                <div className="flex justify-between">
                    <span className="text-gray-300">Premium:</span>
                    <span className={user.is_premium ? "text-yellow-400" : "text-gray-400"}>
                        {user.is_premium ? "⭐ Да" : "❌ Нет"}
                    </span>
                </div>
            </div>
        </div>
    );
}