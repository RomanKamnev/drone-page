import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const AuthComponent = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { token, login, logout } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // todo allow get request
            // const response = await axios.request({
            //     method: "GET",
            //     url: "http://localhost:8080/api/auth/get-token",
            //     data: {
            //         username: username,
            //         password: password
            //     },
            // });

            const response = await axios.post("http://localhost:8080/api/auth/get-token", {
                username,
                password,
            });

            const jwt = response.data.token;
            console.log(jwt);
            login(jwt);
        } catch (error) {
            console.error("Ошибка входа:", error);
        }
    };

    //todo кнопка не активна при сжатии окна браузера
    return (
        <div>
            {token ? (
                <div>
                    <p>Вы вошли в систему</p>
                    <button onClick={logout}>Выйти</button>
                </div>
            ) : (
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <button type="submit">Войти</button>
                </form>
            )}
        </div>
    );
};

export default AuthComponent;
