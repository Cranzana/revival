import { Card } from "@components/ui/card";
import { Button } from "@components/ui/button";
import styles from "@components/omniedu.module.css";

const tiers = [
	{
		name: "Campus Starter",
		price: "$79",
		description: "For a single learning site with core proxy and curriculum tools.",
		features: ["1 tenant", "RBAC basics", "Proxy lab access"],
	},
	{
		name: "District Cloud",
		price: "$249",
		description: "For multi-campus operations that need tenant-aware routing.",
		features: ["10 tenants", "Audit logs", "Redis-backed sessions"],
	},
	{
		name: "Omni Enterprise",
		price: "Custom",
		description: "For districts and organizations deploying OmniEdu at scale.",
		features: ["Dedicated infrastructure", "SSO and MFA rollout", "Kubernetes support"],
	},
];

export default function PricingPage() {
	return (
		<main className={styles.marketingShell}>
			<div className={styles.marketingContent}>
				<section className={styles.heroCard}>
					<p className={styles.kicker}>Pricing</p>
					<h1>Roll out OmniEdu by campus, district, or enterprise.</h1>
					<p>
						This pricing surface is scaffolded as part of the public marketing
						site so the application can grow beyond an internal tool.
					</p>
				</section>
				<section className={styles.grid3}>
					{tiers.map((tier) => (
						<Card key={tier.name}>
							<p className={styles.kicker}>{tier.name}</p>
							<h2>{tier.price}</h2>
							<p>{tier.description}</p>
							<ul>
								{tier.features.map((feature) => (
									<li key={feature}>{feature}</li>
								))}
							</ul>
							<div className={styles.heroActions}>
								<Button href="/sign-in">Talk to OmniEdu</Button>
							</div>
						</Card>
					))}
				</section>
			</div>
		</main>
	);
}
