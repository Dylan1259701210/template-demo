import React from "react";
import {
	Layout,
	Menu,
	Typography,
	Avatar,
	Space,
	Row,
	Col,
	Divider,
	ConfigProvider,
	Tag,
	Button,
} from "antd";
import {
	HomeOutlined,
	AppstoreOutlined,
	FileTextOutlined,
	LineChartOutlined,
	DesktopOutlined,
	DoubleRightOutlined,
	ArrowRightOutlined,
	StarFilled,
	FileTextFilled,
	CodeFilled,
	PartitionOutlined,
	FolderOpenOutlined,
	DatabaseOutlined,
	TeamOutlined,
	RocketOutlined,
	ThunderboltOutlined,
	CheckCircleOutlined,
	PlayCircleOutlined,
	BookOutlined,
	VideoCameraOutlined,
	QuestionCircleOutlined,
	MessageOutlined,
} from "@ant-design/icons";
import "./App.less";

const { Header, Sider, Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { useState } = React;

// 导入页面组件
import { HomePage } from "./app/home";
import { AboutPage } from "./app/about";
import { TrainingPage } from "./app/training";
import { HelpPage } from "./app/help";
import { FeedbackPage } from "./app/feedback";

const App = () => {
	const [selectedKey, setSelectedKey] = useState("home");

	const renderContent = () => {
		switch (selectedKey) {
			case "home":
				return <HomePage />;
			case "about":
				return <AboutPage />;
			case "training":
				return <TrainingPage />;
			case "help":
				return <HelpPage />;
			case "feedback":
				return <FeedbackPage />;
			default:
				return <HomePage />;
		}
	};

	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: "#ee3524",
				},
			}}
		>
			<Layout className="main-layout">
				<Header className="custom-header">
					<div className="header-logo">
						<span className="logo-mark">
							{DoubleRightOutlined ? (
								<DoubleRightOutlined rotate={-45} />
							) : (
								<span>&gt;&gt;</span>
							)}
						</span>
						<span>Code Jarvis</span>
					</div>
					<div className="header-links">
						<a
							href="#home"
							onClick={(e) => {
								e.preventDefault();
								setSelectedKey("home");
							}}
						>
							Home
						</a>
						<a
							href="#about"
							onClick={(e) => {
								e.preventDefault();
								setSelectedKey("about");
							}}
						>
							About
						</a>
						<a
							href="#training"
							onClick={(e) => {
								e.preventDefault();
								setSelectedKey("training");
							}}
						>
							Training
						</a>
						<a
							href="#help"
							onClick={(e) => {
								e.preventDefault();
								setSelectedKey("help");
							}}
						>
							Help
						</a>
						<a
							href="#feedback"
							onClick={(e) => {
								e.preventDefault();
								setSelectedKey("feedback");
							}}
						>
							Feedback
						</a>
					</div>
				</Header>
				<Layout className="inner-layout">
					<Sider className="custom-sider" width={220}>
						<Menu
							mode="inline"
							defaultSelectedKeys={["1"]}
							style={{ borderRight: 0, marginTop: 16 }}
							items={[
								{
									key: "1",
									icon: HomeOutlined && <HomeOutlined />,
									label: "Home",
								},
								{
									key: "2",
									icon: AppstoreOutlined && <AppstoreOutlined />,
									label: "Workspaces",
								},
								{
									key: "3",
									icon: FileTextOutlined && <FileTextOutlined />,
									label: "File List",
								},
								{
									key: "4",
									icon: LineChartOutlined && <LineChartOutlined />,
									label: "Data Analytics",
								},
								{
									key: "5",
									icon: DesktopOutlined && <DesktopOutlined />,
									label: "Looker Studio",
								},
							]}
						/>
					</Sider>
					<Content className="scrollable-content">
						<div className="page-wrapper">{renderContent()}</div>
					</Content>
				</Layout>
			</Layout>
		</ConfigProvider>
	);
};

export default App;
