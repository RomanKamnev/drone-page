import { useState } from "react";
import axios from "axios";

export default function DroneRequestForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        description: "",
        location: ""
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://your-api.com/submit", formData);
            if (response.status === 200) {
                setMessage("Заявка успешно отправлена!");
                setFormData({ name: "", email: "", phone: "", description: "", location: "" });
            }
        } catch (error) {
            setMessage("Ошибка при отправке заявки. Попробуйте снова." + error);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-8 bg-white shadow-2xl rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Номер телефона"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    required
                />
                <textarea
                    name="description"
                    placeholder="Описание заказа"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    required
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Местоположение"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    required
                />
                <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg text-lg font-bold hover:bg-blue-700 transition">
                    Отправить заявку
                </button>
            </form>
            {message && <p className="mt-6 text-center text-green-600 text-lg">{message}</p>}
        </div>
    );
}
