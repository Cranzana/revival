import type { Metadata } from "next";
import Script from "next/script";
import {
	Atkinson_Hyperlegible,
	JetBrains_Mono,
	Rajdhani,
} from "next/font/google";

import { AdsterraAds } from "@components/adsterra-ads";
import { BlankTitle } from "@components/blank-title";
import { AppProviders } from "@components/providers/app-providers";

import "./globals.css";

const headingFont = Rajdhani({
	subsets: ["latin"],
	weight: ["600", "700"],
	variable: "--font-heading",
});

const bodyFont = Atkinson_Hyperlegible({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-body",
});

const monoFont = JetBrains_Mono({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-code",
});

export const metadata: Metadata = {
	title: "",
	description:
		"OmniEdu is a browser-style workspace with search and quick launch built on one fast Next.js origin.",
	applicationName: "OmniEdu",
	manifest: "/manifest.webmanifest",
	icons: {
		icon: "/assets/omniedu-logo.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
		>
			<body>
				<AppProviders>{children}</AppProviders>
				<BlankTitle />
				<Script src="/baremux/index.js" strategy="beforeInteractive" />
				<Script src="/scram/scramjet.all.js" strategy="beforeInteractive" />
				<AdsterraAds />
			</body>
		</html>
	);
}
