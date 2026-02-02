import { Row, Col, Typography } from "antd";
import {
	UserOutlined,
	BulbOutlined,
	ApartmentOutlined,
	LayoutOutlined,
	DatabaseOutlined,
} from "@ant-design/icons";
import "../App.less";

const { Title, Paragraph, Text } = Typography;

export const AboutPage = () => {
	const brandColor = "#ee3524";

	return (
		<div className="about-container">
			<Title level={2} style={{ fontWeight: 700, marginBottom: 24 }}>
				About Code Jarvis
			</Title>

			<Paragraph style={{ fontSize: "16px", lineHeight: 1.8 }}>
				Code Jarvis is a GenAI-powered product that helps teams accelerate the
				migration of legacy applications. With a few clicks, it converts code,
				data formats, runs automated tests, and tracks progress in real time -
				giving our teams a rapid, transparent, and reliable path to application
				modernization.
			</Paragraph>
			<Paragraph
				style={{ fontSize: "16px", lineHeight: 1.8, marginBottom: 40 }}
			>
				In addition to leveraging generative AI models, Code Jarvis uses
				reinforcement learning to incorporate user feedback during the
				conversion process and build the HSBC's proprietary migration knowledge
				base to increase migration accuracy.
			</Paragraph>

			{/* 双栏问答区 */}
			<Row gutter={32} style={{ marginBottom: 64 }}>
				<Col span={12}>
					<div className="info-card" style={{ padding: "32px" }}>
						<Title level={4}>
							<UserOutlined style={{ color: brandColor, marginRight: 12 }} />
							Who can use code Jarvis?
						</Title>
						<Paragraph style={{ color: "#666", marginTop: 16 }}>
							Anyone who currently uses SAS programs and need to convert
							existing programs to python or other open-source languages as part
							of modernization initiatives.
						</Paragraph>
					</div>
				</Col>
				<Col span={12}>
					<div className="info-card" style={{ padding: "32px" }}>
						<Title level={4}>
							<BulbOutlined style={{ color: brandColor, marginRight: 12 }} />
							How do I get started?
						</Title>
						<Text strong style={{ display: "block", margin: "16px 0 8px" }}>
							To get started:
						</Text>
						<ul style={{ color: "#666", paddingLeft: 20 }}>
							<li style={{ marginBottom: 8 }}>
								In case your migration is under a planned initiative (e.g., SAS
								Modernization): contact your Project Manager.
							</li>
							<li>
								You are planning to migrate on your own: make sure to watch the
								demos before starting to convert your code.
							</li>
						</ul>
					</div>
				</Col>
			</Row>

			{/* 核心能力区 */}
			<Title level={2} style={{ fontWeight: 700, marginBottom: 40 }}>
				Key Capabilities
			</Title>

			<div className="capability-item">
				<div className="cap-icon-box">
					<ApartmentOutlined />
				</div>
				<div className="cap-content">
					<Title level={4} style={{ color: brandColor }}>
						Abstract Syntax Tree (AST)
					</Title>
					<Paragraph style={{ color: "#666" }}>
						An Abstract Syntax Tree (AST) of a SAS program is a structured,
						tree-like representation of the program's syntax that captures its
						constructs and their hierarchical relationships, independent of
						formatting. It encodes SAS elements as nodes and edges so Code
						Jarvis can analyze, transform, or translate the program reliably, so
						as to build SAS Code Semantic Understanding and Model Knowledge.
					</Paragraph>
				</div>
			</div>

			<div className="capability-item">
				<div className="cap-icon-box">
					<LayoutOutlined />
				</div>
				<div className="cap-content">
					<Title level={4} style={{ color: brandColor }}>
						Workspaces
					</Title>
					<Paragraph style={{ color: "#666" }}>
						A scope of files that will help resolve file-to-file dependencies
						(%INCLUDE) in both Code Analysis and Code Conversion, to bring users
						an elevated conversion accuracy.
					</Paragraph>
				</div>
			</div>

			<div className="capability-item">
				<div className="cap-icon-box">
					<DatabaseOutlined />
				</div>
				<div className="cap-content">
					<Title level={4} style={{ color: brandColor }}>
						Knowledge Base & Context Engineering
					</Title>
					<Paragraph style={{ color: "#666" }}>
						A unified approach to improve code conversion accuracy uses a
						curated Knowledge Base for systematic edge case identification,
						reinforcement learning from human feedback to refine translation
						choices, and precise vectorization of validated logic, combined with
						Context Engineering that extracts original data source metadata and
						supplies connection credentials and schema details at conversion
						time so transformations remain semantically faithful to the source
						systems.
					</Paragraph>
				</div>
			</div>
		</div>
	);
};
