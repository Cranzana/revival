import Link from "next/link";
import { ReactNode } from "react";

import styles from "@components/omniedu.module.css";

type ButtonProps = {
	children: ReactNode;
	href?: string;
	kind?: "primary" | "secondary" | "ghost";
};

export function Button({ children, href, kind = "primary" }: ButtonProps) {
	const className = [
		styles.button,
		kind === "secondary" ? styles.buttonSecondary : "",
		kind === "ghost" ? styles.buttonGhost : "",
	]
		.filter(Boolean)
		.join(" ");

	if (href) {
		return (
			<Link href={href} className={className}>
				{children}
			</Link>
		);
	}

	return <button className={className}>{children}</button>;
}
