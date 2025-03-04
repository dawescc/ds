import { A as a } from "@/components/content/a";
import { P as p } from "@/components/content/p";
import { H1 as h1 } from "@/components/content/h1";
import { H2 as h2 } from "@/components/content/h2";
import { H3 as h3 } from "@/components/content/h3";
import { UL as ul } from "@/components/content/ul";
import { LI as li } from "@/components/content/li";
import { OL as ol } from "@/components/content/ol";
import { HR as hr } from "@/components/content/hr";
import { Code as code } from "@/components/content/code";
import { Image } from "@/components/content/Image";
import { Snippet } from "@/components/content/snippet";
import { Caption } from "@/components/content/caption";
import { Callout } from "@/components/content/callout";
import { YouTube } from "@/components/content/youtube";
import { Blockquote as blockquote } from "@/components/content/blockquote";
import { Page } from "@/components/content/page";
import { MDXRemote } from "next-mdx-remote/rsc";

export function CustomMDX(props) {
	return (
		<MDXRemote
			{...props}
			components={{
				a,
				h1,
				h2,
				h3,
				p,
				ul,
				li,
				ol,
				hr,
				code,
				pre: Snippet,
				img: Image,
				blockquote,
				Image,
				Snippet,
				Caption,
				Callout,
				YouTube,
				Page,
			}}
		/>
	);
}
