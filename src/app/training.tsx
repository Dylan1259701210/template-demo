import { Row, Col, Card, Typography, Tag } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import "../App.less";

const { Title, Text, Paragraph } = Typography;

export const TrainingPage = () => {
	const brandColor = "#ee3524";

	const steps = [
		{
			title: "Create Workspace",
			time: "3:00",
			desc: "Workspace works like a mini-project that allows you to conversion of a group of SAS cala basic workspace.",
		},
		{
			title: "Upload SAS Code",
			time: "1:15",
			desc: "Review the charts in a best charts and anmohenective attention of your analysis dashboard.",
		},
		{
			title: "Review Analysis Result",
			time: "1:45",
			desc: "Review charts and insights to understand code complexity.",
		},
		{
			title: "Select Config",
			time: "3:45",
			desc: "Code comparison with settings the settings to config view. It provides quick summary of Readability, Test Tass Rat and Accuracy%.",
		},
		{
			title: "Validate Converted Codes",
			time: "3:15",
			desc: "Compare original and converted code for accuracy.",
		},
		{
			title: "Validate Data",
			time: "3:00",
			desc: "Workspace works like a mini-project that allows rworkspace.",
		},
		{
			title: "Optimize Codes",
			time: "5:00",
			desc: "Performance tuning of performance tuning optimization suggestion launched.",
		},
	];

	return (
		<div className="training-container">
			<Title level={2} style={{ fontWeight: 700, marginBottom: 8 }}>
				Getting Started: how to convert your codes
			</Title>
			<Paragraph style={{ marginBottom: 48 }}>
				Code conversion involves 7 steps below:
			</Paragraph>

			{/* 7步流程图还原 */}
			<div
				style={{ position: "relative", marginBottom: 80, padding: "0 20px" }}
			>
				<div
					style={{
						position: "absolute",
						top: "24px",
						left: "60px",
						right: "60px",
						height: "2px",
						background: brandColor,
						zIndex: 0,
					}}
				/>
				<Row
					justify="space-between"
					style={{ position: "relative", zIndex: 1 }}
				>
					{steps.map((step, index) => (
						<Col key={index} style={{ textAlign: "center", width: "12%" }}>
							<div
								style={{
									width: "48px",
									height: "48px",
									borderRadius: "50%",
									background: brandColor,
									color: "#fff",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontSize: "20px",
									fontWeight: "bold",
									margin: "0 auto 16px",
									boxShadow: "0 4px 10px rgba(238, 53, 36, 0.3)",
								}}
							>
								{index + 1}
							</div>
							<Text
								strong
								style={{ display: "block", fontSize: "13px", lineHeight: 1.2 }}
							>
								{step.title}
							</Text>
						</Col>
					))}
				</Row>
			</div>

			<Paragraph style={{ marginBottom: 32, fontSize: "16px" }}>
				Here the details,you can click
				<a href="#" style={{ color: brandColor, fontWeight: "bold" }}>
					video
				</a>{" "}
				to play training video
			</Paragraph>

			{/* 详细卡片展示 */}
			<Row gutter={[20, 20]}>
				{steps.map((step, index) => (
					<Col xs={24} sm={12} lg={6} key={index}>
						<Card
							size="small"
							hoverable
							title={
								<Tag color={brandColor}>
									{index + 1} {step.title}
								</Tag>
							}
							style={{
								height: "100%",
								borderRadius: "8px",
								borderTop: `3px solid ${brandColor}`,
							}}
						>
							<Paragraph
								style={{ fontSize: "13px", color: "#666", minHeight: "80px" }}
							>
								{step.desc}
							</Paragraph>
							{/* 模拟缩略图 */}
							<div
								style={{
									width: "100%",
									height: "100px",
									background: "#f5f5f5",
									borderRadius: "4px",
									marginBottom: 12,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<PlayCircleOutlined
									style={{ fontSize: "32px", color: "#ccc" }}
								/>
							</div>
							<Text type="secondary" style={{ fontSize: "12px" }}>
								Start Time: {step.time}
							</Text>
						</Card>
					</Col>
				))}
			</Row>
		</div>
	);
};
