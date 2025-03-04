"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";

type SidebarContextType = {
	isOpen: boolean;
	toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	const toggleSidebar = () => setIsOpen(!isOpen);

	return <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>{children}</SidebarContext.Provider>;
}

export function useSidebar() {
	const context = useContext(SidebarContext);
	if (context === undefined) {
		throw new Error("useSidebar must be used within a SidebarProvider");
	}
	return context;
}
