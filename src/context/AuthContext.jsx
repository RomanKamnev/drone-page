import { createContext, useState } from "react";

// Создаём контекст, который будет хранить токен и функции login/logout
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    // Состояние для хранения JWT-токена (из localStorage, если есть)
    const [token, setToken] = useState(localStorage.getItem("jwt") || null);

    // Функция для входа в систему
    const login = (jwt) => {
        localStorage.setItem("jwt", jwt); // Сохраняем токен в localStorage
        setToken(jwt); // Обновляем состояние
    };

    // Функция для выхода из системы
    const logout = () => {
        localStorage.removeItem("jwt"); // Удаляем токен из localStorage
        setToken(null); // Обновляем состояние
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children} {/* Этот провайдер позволяет другим компонентам использовать токен */}
        </AuthContext.Provider>
    );
};
