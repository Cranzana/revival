import { Card } from "@components/ui/card";
import { PlatformShell } from "@components/platform-shell";
import styles from "@components/omniedu.module.css";

const rolloutChecks = [
	["SSR platform shell", "Ready"],
	["Tenant middleware", "Ready"],
	["Proxy lab", "Ready"],
	["Prisma schema", "Scaffolded"],
	["Redis cache layer", "Scaffolded"],
	["Kubernetes manifests", "Scaffolded"],
];

export default function DashboardPage() {
	return (
		<PlatformShell
			eyebrow="Operations"
			title="OmniEdu command dashboard"
			description="A tenant-aware operating surface for curriculum, compliance, routing, and secure browsing workflows."
		>
			<div className={styles.grid3}>
				<Card>
					<p className={styles.kicker}>Reliability</p>
					<h2>99.95% target uptime</h2>
					<p>
						Backed by SSR, response caching, and an explicit deployment stack
						for containerized hosting.
					</p>
				</Card>
				<Card>
					<p className={styles.kicker}>Security</p>
					<h2>JWT + RBAC foundation</h2>
					<p>
						Token helpers, role hierarchy, route protection, and session-cookie
						conventions are included.
					</p>
				</Card>
				<Card>
					<p className={styles.kicker}>PWA</p>
					<h2>Offline-ready shell</h2>
					<p>
						The service worker now caches the OmniEdu shell while preserving the
						Scramjet fetch path.
					</p>
				</Card>
			</div>

			<Card>
				<p className={styles.kicker}>Readiness matrix</p>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>Capability</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{rolloutChecks.map(([label, status]) => (
							<tr key={label}>
								<td>{label}</td>
								<td>
									<span className={styles.statusPill}>{status}</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</Card>
		</PlatformShell>
	);
}
