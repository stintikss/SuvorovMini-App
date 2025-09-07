import { useEffect, useState } from "react";
import type { TelegramUser, UserDataProps } from '../../types/types'
import { motion } from "framer-motion";

function generateRandomId(): number {
    return Math.floor(100000 + Math.random() * 900000);
}

export function UserData({ onLoadingChange }: UserDataProps) {
    const [user, setUser] = useState<TelegramUser | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [showFirst, setShowFirst] = useState<boolean>(true)

    useEffect(() => {
        onLoadingChange?.(loading);
    }, [loading, onLoadingChange]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

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
                    first_name: 'Не определенно',
                    last_name: 'Undefined',
                    username: '@undefined_user',
                    language_code: 'ru',
                    is_premium: 'Неопределенно',
                    photo_url: 'https://via.placeholder.com/150/4F46E5/FFFFFF?text=TG'
                });
            }
        }
    }, []);


    const display = showFirst ? 
            `${user?.first_name} ${user?.last_name}`
        :
            (
                <a
                    href={`https://t.me/${user?.username?.replace(/^@/, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                    {user?.username}
                </a>
            )

    return (
        <div className="flex items-center gap-2">
            <motion.div>
                {user?.photo_url ? (
                    <img 
                        src={user.photo_url} 
                        alt="Аватар пользователя"
                        className="w-7 h-7 rounded-full border-2 border-white/30 object-cover"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                    />
                ) : null}
                <div className={`w-7 h-7 rounded-full border-2 border-white/30 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-md font-bold ${user?.photo_url ? 'hidden' : ''}`}>
                    {user?.first_name?.charAt(0)?.toUpperCase() || '?'}
                </div>
            </motion.div>
            
            <span
                onClick={() => setShowFirst(prev => !prev)}
                className="text-white/95 text-sm"
            >
                {display}
            </span>
        </div>
    );
}