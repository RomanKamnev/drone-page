import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext for JWT
import api from "../configs/axiosConfig"; // Axios instance with baseURL

export default function RequestFormButton() {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        customerName: "",
        email: "",
        details: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { token } = useContext(AuthContext); // Get JWT token from AuthContext

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            console.log('token:' + token)
            const response = await api.post("/orders", formData, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token ? `Bearer ${token}` : "", // Attach JWT
                },
            });

            if (response.status === 200 || response.status === 201) {
                alert("Заявка отправлена успешно!");
                setOpen(false);
                setFormData({ name: "", email: "", details: "" });
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
        <>
            <button className="button" onClick={() => setOpen(true)}>Оставить заявку</button>

            {open && (
                <div className="dialog-overlay">
                    <div className="dialog">
                        <h2 className="dialog-title">Оставить заявку</h2>

                        <form onSubmit={handleSubmit} className="form">
                            <input
                                className="input"
                                name="customerName"
                                placeholder="Имя"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                className="input"
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                className="input"
                                name="details"
                                placeholder="Детали заявки"
                                value={formData.details}
                                onChange={handleChange}
                                required
                            />
                            {error && <p className="text-red-500">{error}</p>}
                            <div className="button-group">
                                <button type="submit" className="button" disabled={loading}>
                                    {loading ? "Отправка..." : "Отправить"}
                                </button>
                                <button type="button" className="button cancel" onClick={() => setOpen(false)}>
                                    Отмена
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
