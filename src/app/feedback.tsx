import React, { useState } from "react";
import {
	Typography,
	Input,
	Button,
	Space,
	Card,
	Row,
	Col,
	message,
} from "antd";
import { LikeOutlined, LikeFilled } from "@ant-design/icons";
import "../App.less";

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

export const FeedbackPage = () => {
	const brandColor = "#ee3524";
	const [rating, setRating] = useState(0);

	const handleSubmit = () => {
		message.success("Thank you for your feedback!");
	};

	return (
		<div className="feedback-page-container">
			<Title level={2} style={{ marginBottom: 32, fontWeight: 700 }}>
				Feedback
			</Title>

			<Paragraph style={{ fontSize: "16px", marginBottom: 40 }}>
				Your feedback definitely helps Code Jarvis to evolve, please fill in
				below then click Send
			</Paragraph>

			<Card bordered={false} className="info-card">
				<div style={{ maxWidth: "800px" }}>
					{/* Staff ID Area */}
					<Row style={{ marginBottom: 32 }} align="middle">
						<Col span={6}>
							<Text strong style={{ fontSize: "16px" }}>
								My Staff ID
							</Text>
						</Col>
						<Col span={18}>
							<Text style={{ fontSize: "16px", color: "#666" }}>41234567</Text>
						</Col>
					</Row>

					{/* Rate Area */}
					<Row style={{ marginBottom: 32 }} align="middle">
						<Col span={6}>
							<Text strong style={{ fontSize: "16px" }}>
								Rate Code Jarvis
							</Text>
						</Col>
						<Col span={18}>
							<Space size={16}>
								{[1, 2, 3, 4, 5].map((item) => (
									<div
										key={item}
										onClick={() => setRating(item)}
										style={{
											cursor: "pointer",
											fontSize: "28px",
											color: item <= rating ? brandColor : "#d9d9d9",
										}}
									>
										{item <= rating ? <LikeFilled /> : <LikeOutlined />}
									</div>
								))}
							</Space>
						</Col>
					</Row>

					{/* Feedback Content Area */}
					<Row style={{ marginBottom: 40 }}>
						<Col span={6}>
							<Text strong style={{ fontSize: "16px" }}>
								My Feedback
							</Text>
						</Col>
						<Col span={18}>
							<TextArea
								rows={6}
								placeholder="Please fill in your comments."
								style={{ borderRadius: "8px", padding: "12px" }}
							/>
						</Col>
					</Row>

					{/* Submit Button */}
					<Row>
						<Col offset={6}>
							<Button
								type="primary"
								size="large"
								onClick={handleSubmit}
								style={{
									background: brandColor,
									borderColor: brandColor,
									padding: "0 48px",
									height: "44px",
									borderRadius: "6px",
									fontWeight: 600,
								}}
							>
								Send
							</Button>
						</Col>
					</Row>
				</div>
			</Card>
		</div>
	);
};
