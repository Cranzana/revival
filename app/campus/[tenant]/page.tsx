import { Card } from "@components/ui/card";
import styles from "@components/omniedu.module.css";

export default async function CampusTenantPage({
	params,
}: {
	params: Promise<{ tenant: string }>;
}) {
	const { tenant } = await params;

	return (
		<main className={styles.marketingShell}>
			<section className={`${styles.heroCard} ${styles.tenantHero}`}>
				<p className={styles.kicker}>Tenant Campus</p>
				<h1>{tenant} campus portal</h1>
				<p>
					This route is fed by proxy-based subdomain rewriting, so a hostname
					like <code>{tenant}.your-domain.com</code> can map into a tenant-aware
					OmniEdu experience without needing a separate app.
				</p>
			</section>
			<section className={styles.grid2}>
				<Card>
					<p className={styles.kicker}>Routing</p>
					<h2>Subdomain detected</h2>
					<p>The middleware rewrote this request into a campus-aware route.</p>
				</Card>
				<Card>
					<p className={styles.kicker}>Fallbacks</p>
					<h2>Path safety preserved</h2>
					<p>
						Internal Next.js assets, proxy endpoints, and APIs bypass tenant
						rewrites automatically.
					</p>
				</Card>
			</section>
		</main>
	);
}
