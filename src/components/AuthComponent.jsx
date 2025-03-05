import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Form, Input, Button, message, Card } from "antd";
import axios from "axios";

const AuthComponent = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { token, login, logout } = useContext(AuthContext);

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/auth/get-token", {
                username,
                password,
            });

            const jwt = response.data.token;
            login(jwt);
            message.success("Вы успешно вошли в систему");
        } catch (error) {
            message.error("Ошибка входа: неверные учетные данные" + error);
        }
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "20px",
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 1000,
        }}>
            {token ? (
                <Card style={{
                    width: 300,
                    textAlign: "center",
                    background: "rgba(255, 255, 255, 0.3)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}>
                    <p>Вы вошли в систему</p>
                    <Button type="primary" danger onClick={logout}>
                        Выйти
                    </Button>
                </Card>
            ) : (
                <Card style={{
                    width: 300,
                    background: "rgba(255, 255, 255, 0.3)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}>
                    <Form layout="vertical" onFinish={handleLogin}>
                        <Form.Item label="Username" rules={[{ required: true, message: "Введите имя пользователя" }]}>
                            <Input value={username} onChange={(e) => setUsername(e.target.value)} />
                        </Form.Item>
                        <Form.Item label="Password" rules={[{ required: true, message: "Введите пароль" }]}>
                            <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Войти
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            )}
        </div>
    );
};

export default AuthComponent;
