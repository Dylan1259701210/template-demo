// Home 页面组件
import { Row, Col, Card, Button, Typography } from "antd";
import {
	RocketOutlined,
	QuestionCircleOutlined,
	InfoCircleOutlined,
} from "@ant-design/icons";
import "../App.less"; // 引入包含主题色和 info-card 样式的 less 文件

const { Title, Paragraph } = Typography;

export const HomePage = () => {
	// 使用 App.less 中定义的红作为主题色
	const themeRed = "#ee3524";

	return (
		<div className="home-container">
			<Title level={2} style={{ marginBottom: 32 }}>
				Overview
			</Title>

			<Row gutter={[32, 32]}>
				{/* Getting Started 卡片 */}
				<Col xs={24} sm={12} md={8}>
					<div className="info-card">
						{" "}
						{/* 使用 App.less 中的卡片样式 */}
						<div style={{ textAlign: "center", marginBottom: 24 }}>
							<RocketOutlined style={{ fontSize: "48px", color: themeRed }} />
						</div>
						<Title level={3} style={{ textAlign: "center", marginBottom: 16 }}>
							Getting Started
						</Title>
						<ul
							style={{ paddingLeft: 20, marginBottom: 24, minHeight: "80px" }}
						>
							<li style={{ marginBottom: 8 }}>
								Browse user training materials
							</li>
							<li style={{ marginBottom: 8 }}>Start converting codes</li>
						</ul>
						<Button
							type="primary"
							block
							style={{ backgroundColor: themeRed, borderColor: themeRed }}
						>
							Click Here
						</Button>
					</div>
				</Col>

				{/* Help Center 卡片 */}
				<Col xs={24} sm={12} md={8}>
					<div className="info-card">
						<div style={{ textAlign: "center", marginBottom: 24 }}>
							<QuestionCircleOutlined
								style={{ fontSize: "48px", color: themeRed }}
							/>
						</div>
						<Title level={3} style={{ textAlign: "center", marginBottom: 16 }}>
							Help Center
						</Title>
						<ul
							style={{ paddingLeft: 20, marginBottom: 24, minHeight: "80px" }}
						>
							<li style={{ marginBottom: 8 }}>Browse FAQs </li>
							<li style={{ marginBottom: 8 }}>Contact support team</li>
						</ul>
						<Button
							type="primary"
							block
							style={{ backgroundColor: themeRed, borderColor: themeRed }}
						>
							Click Here
						</Button>
					</div>
				</Col>

				{/* About 卡片 */}
				<Col xs={24} sm={12} md={8}>
					<div className="info-card">
						<div style={{ textAlign: "center", marginBottom: 24 }}>
							<InfoCircleOutlined
								style={{ fontSize: "48px", color: themeRed }}
							/>
						</div>
						<Title level={3} style={{ textAlign: "center", marginBottom: 16 }}>
							About Code Jarvis
						</Title>
						<ul
							style={{ paddingLeft: 20, marginBottom: 24, minHeight: "80px" }}
						>
							<li style={{ marginBottom: 8 }}>What is it?</li>
							<li style={{ marginBottom: 8 }}>Key Capabilities</li>
						</ul>
						<Button
							type="primary"
							block
							style={{ backgroundColor: themeRed, borderColor: themeRed }}
						>
							Click Here
						</Button>
					</div>
				</Col>
			</Row>

			<Title
				level={2}
				style={{ marginTop: 64, marginBottom: 32, textAlign: "center" }}
			>
				What's new in Code Jarvis?
			</Title>

			<Row gutter={[32, 32]}>
				{/* 增大高度后的功能展示区 */}
				<Col xs={24} sm={12}>
					<Card
						bordered={false}
						style={{
							boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
							borderRadius: "8px",
							height: "320px", // 显著增加卡片高度以容纳更大的图片/视觉空间
							display: "flex",
							flexDirection: "column",
						}}
					>
						<div style={{ position: "relative", flex: 1 }}>
							<span
								style={{
									position: "absolute",
									top: 0,
									right: 0,
									background: themeRed,
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
							{/* 模拟图片占位，增大高度展示 */}
							<div
								style={{
									width: "100%",
									height: "160px",
									background: "#f5f5f5",
									borderRadius: "4px",
									marginTop: "20px",
								}}
							></div>
						</div>
					</Card>
				</Col>

				<Col xs={24} sm={12}>
					<Card
						bordered={false}
						style={{
							boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
							borderRadius: "8px",
							height: "320px", // 保持高度一致
							display: "flex",
							flexDirection: "column",
						}}
					>
						<div style={{ position: "relative", flex: 1 }}>
							<span
								style={{
									position: "absolute",
									top: 0,
									right: 0,
									background: themeRed,
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
							{/* 模拟图片占位，增大高度展示 */}
							<div
								style={{
									width: "100%",
									height: "160px",
									background: "#f5f5f5",
									borderRadius: "4px",
									marginTop: "20px",
								}}
							></div>
						</div>
					</Card>
				</Col>
			</Row>
		</div>
	);
};
