import { Card } from "@components/ui/card";
import { PlatformShell } from "@components/platform-shell";
import styles from "@components/omniedu.module.css";

const learningTracks = [
	{
		title: "Digital Citizenship",
		summary: "Policy-aware browsing, privacy, and safe access instruction.",
	},
	{
		title: "Research Skills",
		summary: "Source validation, citation workflows, and guided browsing labs.",
	},
	{
		title: "Teacher Enablement",
		summary: "Launch sequences for curriculum teams, educators, and administrators.",
	},
];

export default function LearnPage() {
	return (
		<PlatformShell
			eyebrow="Learning"
			title="Design courses and launch tenant-specific learning paths"
			description="This view models how OmniEdu can present lessons, pathways, and operational learning programs from the same application shell."
		>
			<div className={styles.grid3}>
				{learningTracks.map((track) => (
					<Card key={track.title}>
						<p className={styles.kicker}>Track</p>
						<h2>{track.title}</h2>
						<p>{track.summary}</p>
					</Card>
				))}
			</div>
		</PlatformShell>
	);
}
