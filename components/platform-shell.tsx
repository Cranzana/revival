import Link from "next/link";
import { ReactNode } from "react";

import styles from "@components/omniedu.module.css";
import { platformNavigation } from "@lib/platform/navigation";

export function PlatformShell({
	children,
	description,
	eyebrow,
	title,
}: {
	children: ReactNode;
	description: string;
	eyebrow: string;
	title: string;
}) {
	return (
		<div className={styles.platformShell}>
			<aside className={styles.sidebar}>
				<Link href="/" className={styles.wordmark}>
					<img
						src="/assets/omniedu-logo.png"
						alt=""
						className={styles.wordmarkBadge}
					/>
					<span>
						<strong>OmniEdu</strong>
						<small>Learning operations platform</small>
					</span>
				</Link>
				<nav className={styles.sidebarNav}>
					{platformNavigation.map((item) => (
						<Link key={item.href} href={item.href} className={styles.navLink}>
							{item.label}
						</Link>
					))}
				</nav>
				<div className={styles.sidebarCallout}>
					<p>Active tenant</p>
					<strong>Northwind Academy</strong>
					<small>SSR + middleware + proxy on one origin</small>
				</div>
			</aside>
			<section className={styles.platformContent}>
				<header className={styles.pageHeader}>
					<p className={styles.kicker}>{eyebrow}</p>
					<h1>{title}</h1>
					<p>{description}</p>
				</header>
				{children}
			</section>
		</div>
	);
}
