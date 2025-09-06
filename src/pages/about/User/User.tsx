import { useEffect, useState } from "react";

export function UserData() {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {

        const userData = (window as any)?.Telegram?.WebApp?.initDataUnsafe?.user

        if(userData) {
            setUser(userData)
        }
        
    }, []);

    if (!user) {
        return <div>Нет данных о пользователе</div>;
    }

    return (
        <div>
            <p>Имя: {user.first_name}</p>
            <p>Фамилия: {user.last_name}</p>
            <p>Username: {user.username}</p>
            <p>ID: {user.id}</p>
        </div>
    );
}