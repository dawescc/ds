export const siteConfig = {
	name: "Design System",
	title: "Design System  — Dawes",
	url: process.env.NEXT_PUBLIC_SITE_URL,
	ogImage: "/og.png",
	description: "Bulding a better way to design apps & services.",
	author: {
		name: "@dawes.cc",
		website: "https://dawes.cc",
	},
	links: [
		{
			name: "github",
			text: "github",
			url: "https://github.com/dawescc",
		},
		{
			name: "website",
			text: "webstie",
			url: "https://dawes.cc",
		},
	],
	pages: {
		// sectionTitle: sectionPages{},
		documentation: [
			{
				name: "home",
				text: "getting started",
				url: "/start",
				private: false,
			},
			{
				name: "color",
				text: "color",
				url: "/color",
				private: true,
			},
			{
				name: "components",
				text: "components",
				url: "/components",
				private: true,
			},
		],
		resources: [
			{
				name: "github",
				text: "github",
				url: "https://github.com/dawescc/ds",
				private: false,
			},
			{
				name: "changelog",
				text: "changelog",
				url: "/changelog",
				private: true,
			},
			{
				name: "downloads",
				text: "downloads",
				url: "/downloads",
				private: true,
			},
		],
	},
};

export type SiteConfig = typeof siteConfig;
