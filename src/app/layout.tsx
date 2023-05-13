import SideBar from "../../components/Sidebar";
import "./globals.css";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "ChatGPT Clone",
	description: "A next.js Project Created by Faisal Mohammed",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head />
			<body>
				<div className="flex">
					<div className="bg-[#202123] md:min-w-[20rem] max-w-xs overflow-y-auto h-screen">
						<SideBar />
					</div>
					{/* ClientProvider - Notification */}
					<div className="bg-[#343541] flex-1 "> {children}</div>
				</div>
			</body>
		</html>
	);
}
