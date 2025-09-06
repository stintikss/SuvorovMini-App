import { useEffect, useState } from "react";
import type { TelegramUser, UserDataProps } from '../../../types/types'

function generateRandomId(): number {
    return Math.floor(100000 + Math.random() * 900000);
}

export function UserData({ onLoadingChange }: UserDataProps) {
    const [user, setUser] = useState<TelegramUser | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        onLoadingChange?.(loading);
    }, [loading, onLoadingChange]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (window.Telegram?.WebApp) {
            const tg = window.Telegram.WebApp;
            const userData = tg.initDataUnsafe?.user;

            if (userData) {
                setUser(userData);
            } else {
                setUser({
                    id: generateRandomId(),
                    first_name: 'Неопределенно',
                    last_name: 'Неопределенно',
                    username: 'undefined_user',
                    language_code: 'ru',
                    is_premium: 'Неопределенно',
                    photo_url: 'https://via.placeholder.com/150/4F46E5/FFFFFF?text=TG'
                });
            }
        } else {
            // Для разработки вне Telegram
            setUser({
                id: generateRandomId(),
                first_name: 'Разработчик',
                last_name: 'Тест',
                username: 'dev_user',
                language_code: 'ru',
                is_premium: true,
                photo_url: 'https://via.placeholder.com/150/10B981/FFFFFF?text=DEV'
            });
        }
    }, []);

    if (loading) {
        return (
            <div className="text-white text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
                <p className="mt-2">Загрузка данных пользователя...</p>
            </div>
        );
    }

    return (
        <div className="bg-white/10 rounded-xl p-4 mb-4 mx-4">
            <h3 className="text-white text-lg font-semibold mb-3 text-center">
                👤 Данные пользователя
            </h3>
            
            {/* Аватарка пользователя */}
            <div className="flex justify-center mb-4">
                {user?.photo_url ? (
                    <img 
                        src={user.photo_url} 
                        alt="Аватар пользователя"
                        className="w-20 h-20 rounded-full border-2 border-white/30 object-cover"
                        onError={(e) => {
                            // Если аватарка не загрузилась, показываем дефолтную
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                    />
                ) : null}
                <div className={`w-20 h-20 rounded-full border-2 border-white/30 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold ${user?.photo_url ? 'hidden' : ''}`}>
                    {user?.first_name?.charAt(0)?.toUpperCase() || '?'}
                </div>
            </div>
            
            <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                    <span className="text-gray-300">ID:</span>
                    <span className="text-white font-mono">{user?.id}</span>
                </div>
                
                <div className="flex justify-between">
                    <span className="text-gray-300">Имя:</span>
                    <span className="text-white">
                        {user?.first_name} {user?.last_name || ''}
                    </span>
                </div>
                
                {user?.username && (
                    <div className="flex justify-between">
                        <span className="text-gray-300">Username:</span>
                        <span className="text-blue-300">@{user.username}</span>
                    </div>
                )}
                
                {user?.language_code && (
                    <div className="flex justify-between">
                        <span className="text-gray-300">Язык:</span>
                        <span className="text-white">{user.language_code.toUpperCase()}</span>
                    </div>
                )}
                
                <div className="flex justify-between">
                    <span className="text-gray-300">Premium:</span>
                    <span className="text-yellow-400">
                        {user?.is_premium}
                    </span>
                </div>
            </div>
        </div>
    );
}