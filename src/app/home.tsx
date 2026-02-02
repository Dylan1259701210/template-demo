import { Row, Col, Card, Button, Typography, Tag } from "antd";
import {
	RocketOutlined,
	QuestionCircleOutlined,
	InfoCircleOutlined,
} from "@ant-design/icons";
import "../App.less";

const { Title, Paragraph } = Typography;

// 更加精美的 Base64 SVG 视觉内容
const LINEAGE_ILLUSTRATION =
	"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6I2VlMzUyNDtzdG9wLW9wYWNpdHk6MC4xIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNlZTM1MjQ7c3RvcC1vcGFjaXR5OjAiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0idXJsKCNncmFkMSkiIHJ4PSI4IiAvPgogIDwhLS0gR3JhcGggTm9kZXMgLS0+CiAgPGNpcmNsZSBjeD0iMTAwIiBjeT0iMjAwIiByPSI0NSIgZmlsbD0iI2VlMzUyNCIgb3BhY2l0eT0iMC44IiAvPgogIDxjaXJjbGUgY3g9IjMwMCIgY3k9IjEyMCIgcj0iMzAiIGZpbGw9IiMzMzMiIC8+CiAgPGNpcmNsZSBjeD0iMzAwIiBjeT0iMjgwIiByPSIzMCIgZmlsbD0iIzMzMyIgLz4KICA8Y2lyY2xlIGN4PSI1MDAiIGN5PSIyMDAiIHI9IjQ1IiBmaWxsPSIjZWUzNTI0IiBvcGFjaXR5PSIwLjgiIC8+CiAgPCEtLSBDb25uZWN0aW9ucyAtLT4KICA8cGF0aCBkPSJNIDE0NSAxODAgTCAyNzAgMTIwIiBzdHJva2U9IiNlZTM1MjQiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWRhc2hhcnJheT0iNCIvPgogIDxwYXRoIGQ9Ik0gMTQ1IDIyMCBMIDI3MCAyODAiIHN0cm9rZT0iI2VlMzUyNCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBzdHJva2UtZGFzaGFycmF5PSI0Ii8+CiAgPHBhdGggZD0iTSAzMzAgMTIwIEwgNDU1IDE4MCIgc3Ryb2tlPSIjZWUzNTI0IiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiIC8+CiAgPHBhdGggZD0iTSAzMzAgMjgwIEwgNDU1IDIyMCIgc3Ryb2tlPSIjZWUzNTI0IiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiIC8+Cjwvc3ZnPg==";

const GITHUB_ILLUSTRATION =
	"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQyIiB4MT0iMTAwJSIgeTE9IjEwMCUiIHgyPSIwJSIgeTI9IjAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MC4wNSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZWUzNTI0O3N0b3Atb3BhY2l0eTowLjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0idXJsKCNncmFkMikiIHJ4PSI4IiAvPgogIDwhLS0gQ29kZSBCbG9ja3MgLS0+CiAgPHJlY3QgeD0iMTUwIiB5PSIxMDAiIHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiByeD0iMTIiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2YwZjBmMCIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogIDxyZWN0IHg9IjE4MCIgeT0iMTQwIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjEwIiByeD0iNSIgZmlsbD0iI2VlMzUyNCIgb3BhY2l0eT0iMC4yIiAvPgogIDxyZWN0IHg9IjE4MCIgeT0iMTcwIiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjEwIiByeD0iNSIgZmlsbD0iIzMzMyIgb3BhY2l0eT0iMC4xIiAvPgogIDxyZWN0IHg9IjE4MCIgeT0iMjAwIiB3aWR0aD0iMjEwIiBoZWlnaHQ9IjEwIiByeD0iNSIgZmlsbD0iIzMzMyIgb3BhY2l0eT0iMC4xIiAvPgogIDxwYXRoIGQ9Ik0gNDAwIDMwMCBDIDQwMCAzNTAgNTAwIDM1MCA1MDAgMzAwIiBzdHJva2U9IiNlZTM1MjQiIHN0cm9rZS13aWR0aD0iNCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiAvPgo8L3N2Zz4=";

export const HomePage = () => {
	const brandColor = "#ee3524";

	return (
		<div className="home-container" style={{ paddingBottom: "60px" }}>
			{/* Overview Section */}
			<div style={{ marginBottom: 48 }}>
				<Title level={2} style={{ fontWeight: 800, letterSpacing: "-0.5px" }}>
					Overview
				</Title>
				{/* <div
					style={{
						width: "40px",
						height: "4px",
						background: brandColor,
						borderRadius: "2px",
					}}
				/> */}
			</div>

			<Row gutter={[24, 24]}>
				{[
					{
						icon: <RocketOutlined />,
						title: "Getting Started",
						items: ["Browse user training materials", "Start converting codes"],
					},
					{
						icon: <QuestionCircleOutlined />,
						title: "Help Center",
						items: ["Browse FAQs", "Contact support team"],
					},
					{
						icon: <InfoCircleOutlined />,
						title: "About Code Jarvis",
						items: ["What is it?", "Key Capabilities"],
					},
				].map((card, idx) => (
					<Col xs={24} md={8} key={idx}>
						<div
							className="info-card"
							style={{
								height: "100%",
								display: "flex",
								flexDirection: "column",
							}}
						>
							<div style={{ display: "flex", justifyContent: "center" }}>
								<div
									style={{
										width: "64px",
										height: "64px",

										borderRadius: "16px",
										background: "#fff1f0",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "32px",
										color: brandColor,
										marginBottom: 10,
									}}
								>
									{card.icon}
								</div>
							</div>
							<Title
								level={3}
								style={{ marginBottom: 10, textAlign: "center" }}
							>
								{card.title}
							</Title>
							<ul
								style={{
									paddingLeft: 18,
									marginBottom: 32,
									flex: 1,
									color: "#595959",
								}}
							>
								{card.items.map((item, i) => (
									<li key={i} style={{ marginBottom: 12, lineHeight: 1.6 }}>
										{item}
									</li>
								))}
							</ul>
							<Button
								// type="primary"
								// block
								size="large"
								style={{
									color: brandColor,
									borderColor: brandColor,
									// fontWeight: 600,
									// height: "48px",
									borderRadius: "8px",
								}}
							>
								Click Here
							</Button>
						</div>
					</Col>
				))}
			</Row>

			{/* What's New Section */}
			<div style={{ textAlign: "center", marginTop: 100, marginBottom: 56 }}>
				<Title level={2} style={{ fontWeight: 800, marginBottom: 16 }}>
					What's new in Code Jarvis?
				</Title>
				{/* <Paragraph style={{ color: "#8c8c8c", fontSize: "16px" }}>
					Discover our latest features designed to accelerate your migration
					journey.
				</Paragraph> */}
			</div>

			<Row gutter={[40, 40]}>
				<Col xs={24} lg={12}>
					<Card
						hoverable
						bordered={false}
						style={{
							borderRadius: "20px",
							overflow: "hidden",
							boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
						}}
						bodyStyle={{ padding: 0 }}
					>
						<div style={{ padding: "32px 32px 24px" }}>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: 16,
								}}
							>
								<Title level={3} style={{ margin: 0, fontWeight: 700 }}>
									Program Lineage Diagram
								</Title>
								<Tag
									color={brandColor}
									style={{ borderRadius: "4px", padding: "0 8px" }}
								>
									NEW
								</Tag>
							</div>
							<Paragraph
								style={{
									color: "#595959",
									fontSize: "15px",
									height: "44px",
									marginBottom: 0,
								}}
							>
								Visualize program dependencies and data flow with interactive
								diagrams.
							</Paragraph>
						</div>
						{/* 高度提升的视觉图片区域 */}
						<div
							style={{
								width: "100%",
								height: "350px",
								backgroundImage: `url(${LINEAGE_ILLUSTRATION})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
								backgroundRepeat: "no-repeat",
								backgroundColor: "#fafafa",
								borderTop: "1px solid #f0f0f0",
							}}
						/>
					</Card>
				</Col>

				<Col xs={24} lg={12}>
					<Card
						hoverable
						bordered={false}
						style={{
							borderRadius: "20px",
							overflow: "hidden",
							boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
						}}
						bodyStyle={{ padding: 0 }}
					>
						<div style={{ padding: "32px 32px 24px" }}>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: 16,
								}}
							>
								<Title level={3} style={{ margin: 0, fontWeight: 700 }}>
									GitHub Integration
								</Title>
								<Tag
									color={brandColor}
									style={{ borderRadius: "4px", padding: "0 8px" }}
								>
									NEW
								</Tag>
							</div>
							<Paragraph
								style={{
									color: "#595959",
									fontSize: "15px",
									height: "44px",
									marginBottom: 0,
								}}
							>
								Seamlessly connect your GitHub repositories for code version
								control.
							</Paragraph>
						</div>
						{/* 高度提升的视觉图片区域 */}
						<div
							style={{
								width: "100%",
								height: "350px",
								backgroundImage: `url(${GITHUB_ILLUSTRATION})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
								backgroundRepeat: "no-repeat",
								backgroundColor: "#fafafa",
								borderTop: "1px solid #f0f0f0",
							}}
						/>
					</Card>
				</Col>
			</Row>
		</div>
	);
};
