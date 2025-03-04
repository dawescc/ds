import type { Metadata } from "next";
import "./globals.css";
import { Theme } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import font from "@/config/fonts";
import { siteConfig } from "@/config/siteConfig";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import SidebarWrapper from "@/components/sidebar-wrapper";
import { SidebarProvider } from "@/components/sidebar-context";

export const metadata: Metadata = {
	title: {
		default: siteConfig.title,
		template: `%s - ${siteConfig.name}`,
	},
	metadataBase: new URL(siteConfig.url || "/"),
	description: siteConfig.description,
	authors: [
		{
			name: siteConfig.author.name,
			url: siteConfig.author.website,
		},
	],
	creator: siteConfig.author.name,
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: [
			{
				url: siteConfig.ogImage,
				width: 1200,
				height: 630,
				alt: siteConfig.name,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
		images: [siteConfig.ogImage],
		creator: siteConfig.author.name,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
			className={`${font.sans.variable} ${font.serif.variable} ${font.mono.variable} ${font.display.variable} scroll-pt-[calc(var(--spacing-header)+(calc(var(--spacing)*6)))]`}>
			<body className={`font-sans antialiased scroll-pt-header`}>
				<Theme>
					<SidebarProvider>
						<div className='min-h-screen overflow-x-hidden md:overflow-x-visible mt-header md:mt-0'>
							<Header />
							<main className='-mx-px -mt-px flex max-w-max-content flex-col md:mx-auto xl:mt-0 xl:grid xl:grid-cols-[var(--spacing-sidebar)_1fr]'>
								<div className='order-2 grow md:border-r'>
									<div className='relative flex h-full w-full flex-col px-0 pb-8 xl:mx-auto xl:-translate-x-px xl:px-0 xl:pb-0'>
										<div className='@container w-full max-w-max-content'>{children}</div>
										<Footer />
									</div>
								</div>
								<SidebarWrapper />
							</main>
						</div>
					</SidebarProvider>
				</Theme>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
