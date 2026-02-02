import { Typography, Card } from "antd";
import {
	QuestionCircleOutlined,
	MailOutlined,
	BookOutlined,
} from "@ant-design/icons";
import "../App.less";

const { Title, Text } = Typography;

export const HelpPage = () => {
	const brandColor = "#ee3524"; // 引用主题色

	return (
		<div className="help-page-container">
			<Title level={2} style={{ marginBottom: 32, fontWeight: 700 }}>
				Help
			</Title>

			<Card bordered={false} className="info-card" style={{ marginBottom: 40 }}>
				<div style={{ padding: "8px 0" }}>
					<ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
						<li
							style={{
								marginBottom: 24,
								display: "flex",
								alignItems: "flex-start",
								gap: "12px",
							}}
						>
							<BookOutlined
								style={{
									color: brandColor,
									fontSize: "20px",
									marginTop: "4px",
								}}
							/>
							<Text style={{ fontSize: "16px" }}>
								You can find information about how to use Code Jarvis, and
								training materials at{" "}
								<a
									href="#training"
									style={{ color: brandColor, textDecoration: "underline" }}
								>
									here &lt;link to training page&gt;
								</a>
							</Text>
						</li>
						<li
							style={{
								marginBottom: 24,
								display: "flex",
								alignItems: "flex-start",
								gap: "12px",
							}}
						>
							<QuestionCircleOutlined
								style={{
									color: brandColor,
									fontSize: "20px",
									marginTop: "4px",
								}}
							/>
							<Text style={{ fontSize: "16px" }}>
								In case your migration is under a planned initiative (for
								example, SAS Modernization), you can also contact your Project
								Manager.
							</Text>
						</li>
						<li
							style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}
						>
							<MailOutlined
								style={{
									color: brandColor,
									fontSize: "20px",
									marginTop: "4px",
								}}
							/>
							<Text style={{ fontSize: "16px" }}>
								For technical issues (e.g., system error when running Code
								Jarvis), please raise support ticket by clicking{" "}
								<a
									href="mailto:support@codejarvis.com"
									style={{ color: brandColor, textDecoration: "underline" }}
								>
									here &lt;link to SNOW support request / email&gt;
								</a>
							</Text>
						</li>
					</ul>
				</div>
			</Card>
		</div>
	);
};
