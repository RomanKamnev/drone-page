import { Typography, List } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

export default function DroneServices() {
    return (
        <div className="relative z-10 px-6 max-w-3xl mx-auto fade-in">
            <Typography.Title level={3} style={{ fontWeight: "bold", marginLeft: "20px" }}>
                High-quality drone photography and videography for any occasion.
            </Typography.Title>

            <List
                style={{ textAlign: "left", maxWidth: "400px", marginLeft: "0" }}
                dataSource={[
                    "4K Ultra HD Video & High-Resolution Photography",
                    "Licensed & Experienced Drone Pilots",
                    "Tailored Solutions for Your Specific Needs",
                    "Fast & Reliable Service",
                ]}
                renderItem={(item) => (
                    <List.Item style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                        <CheckCircleOutlined style={{ color: "#1890ff", marginRight: "10px", marginLeft: "10px"  }} />
                        <Typography.Text strong style={{ textAlign: "left" }}>{item}</Typography.Text>
                    </List.Item>
                )}
            />
        </div>
    );
}
