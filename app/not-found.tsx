import Link from "next/link";

import styles from "@components/omniedu.module.css";

export default function NotFound() {
	return (
		<main className={styles.authShell}>
			<section className={styles.heroCard}>
				<p className={styles.kicker}>404</p>
				<h1>That OmniEdu page is missing.</h1>
				<p>
					The route may have moved, the tenant may be invalid, or the page has
					not been provisioned yet.
				</p>
				<div className={styles.heroActions}>
					<Link href="/" className={styles.button}>
						Return home
					</Link>
					<Link href="/dashboard" className={`${styles.button} ${styles.buttonSecondary}`}>
						Open dashboard
					</Link>
				</div>
			</section>
		</main>
	);
}
