"use client";

import { useEffect } from "react";

import styles from "./adsterra-ads.module.css";

const ADSTERRA_SCRIPTS = [
	{
		id: "adsterra-popunder",
		src: "https://pl29244222.profitablecpmratenetwork.com/ec/5f/54/ec5f54c7e8b43596539c021f748f78a5.js",
		async: false,
	},
	{
		id: "adsterra-social-bar",
		src: "https://pl29244223.profitablecpmratenetwork.com/6e/2b/ff/6e2bffb25f5043dfa0de77f53e18427d.js",
		async: false,
	},
	{
		id: "adsterra-native-banner",
		src: "https://pl29244224.profitablecpmratenetwork.com/d88ec711449316a76c844d87610a88f9/invoke.js",
		async: true,
		cfAsync: false,
	},
] as const;

export function AdsterraAds() {
	useEffect(() => {
		for (const adScript of ADSTERRA_SCRIPTS) {
			if (document.querySelector(`script[data-adsterra-id="${adScript.id}"]`)) {
				continue;
			}

			const script = document.createElement("script");
			script.src = adScript.src;
			script.async = adScript.async;
			script.dataset.adsterraId = adScript.id;

			if ("cfAsync" in adScript) {
				script.setAttribute("data-cfasync", String(adScript.cfAsync));
			}

			document.body.appendChild(script);
		}
	}, []);

	return (
		<div className={styles.nativeSlot}>
			<div id="container-d88ec711449316a76c844d87610a88f9" />
		</div>
	);
}
