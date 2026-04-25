import Script from "next/script";

export function AdsterraAds() {
	return (
		<>
			<Script
				id="adsterra-popunder"
				src="https://pl29244222.profitablecpmratenetwork.com/ec/5f/54/ec5f54c7e8b43596539c021f748f78a5.js"
				strategy="afterInteractive"
			/>
			<Script
				id="adsterra-social-bar"
				src="https://pl29244223.profitablecpmratenetwork.com/6e/2b/ff/6e2bffb25f5043dfa0de77f53e18427d.js"
				strategy="afterInteractive"
			/>
			<Script
				id="adsterra-native-banner"
				async
				data-cfasync="false"
				src="https://pl29244224.profitablecpmratenetwork.com/d88ec711449316a76c844d87610a88f9/invoke.js"
				strategy="afterInteractive"
			/>
			<div id="container-d88ec711449316a76c844d87610a88f9" />
		</>
	);
}
