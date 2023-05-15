import { Session } from "inspector";
import SideBar from "../../components/SideBar";
import "./globals.css";
import { SessionProvider } from "../../components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import Login from "../../components/Login";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "ChatGPT Clone",
	description: "A next.js Project Created by Faisal Mohammed",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession(authOptions);
	console.log(session);
	return (
		<html lang="en">
			<head />
			<body>
				<SessionProvider session={session}>
					{!session ? (
						<Login />
					) : (
						<div className="flex">
							<div className="bg-[#202123] md:min-w-[20rem] max-w-xs overflow-y-auto h-screen">
								<SideBar />
							</div>
							{/* ClientProvider - Notification */}
							<div className="bg-[#343541] flex-1 "> {children}</div>
						</div>
					)}
				</SessionProvider>
			</body>
		</html>
	);
}
