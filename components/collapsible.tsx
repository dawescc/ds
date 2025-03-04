"use client";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface CollapsibleProps {
	title: ReactNode;
	children: ReactNode;
}

const Collapsible = ({ title, children }: CollapsibleProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const openSpring = {
		type: "spring",
		stiffness: 200,
		damping: 23,
		mass: 0.64,
	};

	const closeSpring = {
		type: "spring",
		stiffness: 222,
		damping: 23,
		mass: 0.64,
	};

	return (
		<motion.div className='w-full rounded bg-background-100 shadow-sm border border-inset'>
			<div
				className='w-full px-6 py-4 flex justify-between items-center text-left cursor-pointer'
				onClick={() => setIsOpen(!isOpen)}>
				{title}
				<motion.div
					animate={{
						rotate: isOpen ? 45 + 45 : 0,
						filter: "blur(1.5px)",
						scale: 1.02,
					}}
					whileInView={{
						filter: "blur(0px)",
						scale: 1,
						transition: { delay: 0.15 },
					}}
					transition={isOpen ? openSpring : closeSpring}
					className='text-2xl origin-center select-none'>
					+
				</motion.div>
			</div>

			<motion.div
				initial={false}
				animate={{ height: isOpen ? "auto" : 1 }}
				transition={isOpen ? openSpring : closeSpring}
				className='overflow-hidden'>
				<div className='px-6 pb-4'>{children}</div>
			</motion.div>
		</motion.div>
	);
};

export default Collapsible;
