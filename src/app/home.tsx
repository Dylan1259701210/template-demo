// Home 页面组件
import { Row, Col, Card, Button, Typography } from "antd";
import {
	RocketOutlined,
	QuestionCircleOutlined,
	InfoCircleOutlined,
	ArrowRightOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

export const HomePage = () => {
	return (
		<div>
			<Title level={2} style={{ marginBottom: 32 }}>
				Overview
			</Title>

			<Row gutter={[32, 32]}>
				<Col xs={24} sm={12} md={8}>
					<Card
						bordered={false}
						style={{
							boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
							borderRadius: "8px",
						}}
					>
						<div style={{ textAlign: "center", marginBottom: 24 }}>
							<RocketOutlined style={{ fontSize: "48px", color: "#1890ff" }} />
						</div>
						<Title level={3} style={{ textAlign: "center", marginBottom: 16 }}>
							Getting Started
						</Title>
						<ul style={{ paddingLeft: 20, marginBottom: 24 }}>
							<li style={{ marginBottom: 8 }}>
								Browse user training materials
							</li>
							<li style={{ marginBottom: 8 }}>Start converting codes</li>
						</ul>
						<Button
							type="default"
							block
							style={{ borderColor: "#d9d9d9", color: "#333" }}
						>
							Click Here
						</Button>
					</Card>
				</Col>

				<Col xs={24} sm={12} md={8}>
					<Card
						bordered={false}
						style={{
							boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
							borderRadius: "8px",
						}}
					>
						<div style={{ textAlign: "center", marginBottom: 24 }}>
							<QuestionCircleOutlined
								style={{ fontSize: "48px", color: "#faad14" }}
							/>
						</div>
						<Title level={3} style={{ textAlign: "center", marginBottom: 16 }}>
							Help Center
						</Title>
						<ul style={{ paddingLeft: 20, marginBottom: 24 }}>
							<li style={{ marginBottom: 8 }}>Browse FAQs </li>
							<li style={{ marginBottom: 8 }}>Contact support team</li>
						</ul>
						<Button
							type="default"
							block
							style={{ borderColor: "#d9d9d9", color: "#333" }}
						>
							Click Here
						</Button>
					</Card>
				</Col>

				<Col xs={24} sm={12} md={8}>
					<Card
						bordered={false}
						style={{
							boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
							borderRadius: "8px",
						}}
					>
						<div style={{ textAlign: "center", marginBottom: 24 }}>
							<InfoCircleOutlined
								style={{ fontSize: "48px", color: "#52c41a" }}
							/>
						</div>
						<Title level={3} style={{ textAlign: "center", marginBottom: 16 }}>
							About Code Jarvis
						</Title>
						<ul style={{ paddingLeft: 20, marginBottom: 24 }}>
							<li style={{ marginBottom: 8 }}>What is it?</li>
							<li style={{ marginBottom: 8 }}>Key Capabilities</li>
						</ul>
						<Button
							type="default"
							block
							style={{ borderColor: "#d9d9d9", color: "#333" }}
						>
							Click Here
						</Button>
					</Card>
				</Col>
			</Row>

			<Title
				level={2}
				style={{ marginTop: 64, marginBottom: 32, textAlign: "center" }}
			>
				What's new in Code Jarvis?
			</Title>

			<Row gutter={[32, 32]}>
				<Col xs={24} sm={12}>
					<Card
						bordered={false}
						style={{
							boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
							borderRadius: "8px",
						}}
					>
						<div style={{ position: "relative" }}>
							<span
								style={{
									position: "absolute",
									top: 0,
									right: 0,
									background: "#ff4d4f",
									color: "#fff",
									padding: "4px 12px",
									borderRadius: "4px",
									fontSize: "12px",
									fontWeight: "bold",
								}}
							>
								NEW
							</span>
							<Title level={3} style={{ marginBottom: 16 }}>
								Program Lineage Diagram
							</Title>
							<Paragraph style={{ color: "#666" }}>
								Visualize program dependencies and data flow with interactive
								diagrams.
							</Paragraph>
						</div>
					</Card>
				</Col>

				<Col xs={24} sm={12}>
					<Card
						bordered={false}
						style={{
							boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
							borderRadius: "8px",
						}}
					>
						<div style={{ position: "relative" }}>
							<span
								style={{
									position: "absolute",
									top: 0,
									right: 0,
									background: "#ff4d4f",
									color: "#fff",
									padding: "4px 12px",
									borderRadius: "4px",
									fontSize: "12px",
									fontWeight: "bold",
								}}
							>
								NEW
							</span>
							<Title level={3} style={{ marginBottom: 16 }}>
								GitHub Integration
							</Title>
							<Paragraph style={{ color: "#666" }}>
								Seamlessly connect your GitHub repositories for code version
								control.
							</Paragraph>
						</div>
					</Card>
				</Col>
			</Row>
		</div>
	);
};
