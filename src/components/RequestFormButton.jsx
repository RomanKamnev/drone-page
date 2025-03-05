import { useState, useContext } from "react";
import { Modal, Button, Form, Input, message, Spin } from "antd";
import { AuthContext } from "../context/AuthContext";
import api from "../configs/axiosConfig";

export default function RequestFormButton() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { token } = useContext(AuthContext);
    const [form] = Form.useForm();

    const handleSubmit = async (values) => {
        setLoading(true);
        setError(null);

        try {
            const response = await api.post("/orders", values, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token ? `Bearer ${token}` : "",
                },
            });

            if (response.status === 200 || response.status === 201) {
                message.success("Заявка отправлена успешно!");
                setOpen(false);
                form.resetFields();
            } else {
                throw new Error("Ошибка отправки заявки.");
            }
        } catch (err) {
            setError(err.message || "Ошибка сети. Попробуйте позже.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "left", paddingLeft: "15px" }}>
            <Button type="primary" onClick={() => setOpen(true)}>
                Оставить заявку
            </Button>

            <Modal
                title="Оставить заявку"
                visible={open}
                onCancel={() => setOpen(false)}
                footer={null}
            >
                <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    <Form.Item
                        name="customerName"
                        label="Имя"
                        rules={[{ required: true, message: "Введите ваше имя" }]}
                    >
                        <Input placeholder="Имя" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, type: "email", message: "Введите корректный email" }]}
                    >
                        <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="details"
                        label="Детали заявки"
                        rules={[{ required: true, message: "Введите детали заявки" }]}
                    >
                        <Input.TextArea placeholder="Детали заявки" rows={4} />
                    </Form.Item>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <Form.Item>
                        <Button type="primary" htmlType="submit" disabled={loading}>
                            {loading ? <Spin /> : "Отправить"}
                        </Button>
                        <Button onClick={() => setOpen(false)} style={{ marginLeft: "10px" }}>
                            Отмена
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}
