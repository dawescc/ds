"use client";

import colors from "@/components/lib/colors.json";
import { cn } from "@/utils/cn";
import formatTitle from "title";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function ColorGrid({ className = "" }: { className: string }) {
	function getTextColorClass({ colorName, shadeClass }: { colorName: string; shadeClass: string }) {
		const isDarkShade = shadeClass.includes("700") || shadeClass.includes("800") || shadeClass.includes("900") || shadeClass.includes("1000");

		if (isDarkShade) {
			switch (colorName) {
				case "gray":
					return "text-gray-100";
				case "red":
					return "text-red-100";
				case "blue":
					return "text-blue-100";
				case "green":
					return "text-green-100";
				case "purple":
					return "text-purple-100";
				case "pink":
					return "text-pink-100";
				case "teal":
					return "text-teal-100";
				case "orange":
					return "text-orange-100";
				case "gray-alpha":
					return "text-gray-100";
				case "background":
					return "text-gray-100";
				default:
					return "text-current";
			}
		} else {
			switch (colorName) {
				case "gray":
					return "text-gray-1000";
				case "red":
					return "text-red-1000";
				case "blue":
					return "text-blue-1000";
				case "green":
					return "text-green-1000";
				case "purple":
					return "text-purple-1000";
				case "pink":
					return "text-pink-1000";
				case "teal":
					return "text-teal-1000";
				case "orange":
					return "text-orange-1000";
				case "gray-alpha":
					return "text-gray-alpha-1000";
				case "background":
					return "text-gray-1000";
				default:
					return "text-current";
			}
		}
	}

	return (
		<div className='w-full max-w-11/12 md:max-w-5/8 lg:max-w-2/3 py-20 mx-auto'>
			<div className={(cn(`w-full`), className)}>
				{Object.entries(colors).map(([colorName, shades]) => (
					<div
						key={colorName}
						className='grid grid-cols-1'>
						<div className='grid grid-cols-10 relative'>
							{shades.map((shade) => (
								<TooltipProvider
									key={shade.key}
									delayDuration={0}>
									<Tooltip>
										<TooltipTrigger>
											<div
												className={cn(
													"aspect-square relative border m-0.5 hover:shadow-lg hover:scale-120 hover:z-[10] transition-all duration-[240ms] [transition-timing-function:cubic-bezier(0.68,-0.6,0.32,1.6)]",
													shade.class
												)}
												title={formatTitle(shade.key)}
											/>
										</TooltipTrigger>
										<TooltipContent
											className={cn("px-2 py-1 text-xs", shade.class, getTextColorClass({ colorName, shadeClass: shade.class }))}>
											{shade.key}
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
