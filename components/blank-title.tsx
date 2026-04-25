"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function BlankTitle() {
	const pathname = usePathname();

	useEffect(() => {
		const clearTitle = () => {
			if (document.title !== "") {
				document.title = "";
			}
		};

		clearTitle();

		const observer = new MutationObserver(clearTitle);
		observer.observe(document.head, {
			childList: true,
			subtree: true,
			characterData: true,
		});

		return () => observer.disconnect();
	}, [pathname]);

	return null;
}
