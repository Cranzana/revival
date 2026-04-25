import { Card } from "@components/ui/card";
import { PlatformShell } from "@components/platform-shell";
import styles from "@components/omniedu.module.css";

export default function AdminPage() {
	return (
		<PlatformShell
			eyebrow="Administration"
			title="Govern tenants, roles, and compliance settings"
			description="Admin routes are protected by middleware and model the control plane for OmniEdu deployments."
		>
			<div className={styles.grid2}>
				<Card>
					<p className={styles.kicker}>Identity</p>
					<h2>Authentication roadmap</h2>
					<ul>
						<li>Access JWTs with refresh rotation helpers</li>
						<li>Secure cookie conventions for session transport</li>
						<li>MFA-ready sign-in flow scaffolding</li>
					</ul>
				</Card>
				<Card>
					<p className={styles.kicker}>Compliance</p>
					<h2>Audit and privacy controls</h2>
					<ul>
						<li>Prisma models include audit log entities</li>
						<li>Security headers are enforced by middleware and server</li>
						<li>PII-safe masking and analytics hooks can layer on this base</li>
					</ul>
				</Card>
			</div>
		</PlatformShell>
	);
}
