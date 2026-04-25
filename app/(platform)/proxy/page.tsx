import { PlatformShell } from "@components/platform-shell";
import { ProxyWorkspace } from "@components/proxy-workspace";

export default function ProxyPage() {
	return (
		<PlatformShell
			eyebrow="Proxy Lab"
			title="Launch secure browsing inside OmniEdu"
			description="The existing Scramjet runtime now lives behind the OmniEdu platform shell so it can be deployed as one cohesive product."
		>
			<ProxyWorkspace />
		</PlatformShell>
	);
}
