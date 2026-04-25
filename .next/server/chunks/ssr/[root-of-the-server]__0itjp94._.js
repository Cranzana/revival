module.exports = [
	93695,
	(a, b, c) => {
		b.exports = a.x("next/dist/shared/lib/no-fallback-error.external.js", () =>
			require("next/dist/shared/lib/no-fallback-error.external.js")
		);
	},
	12793,
	(a, b, c) => {
		b.exports = a.r(18622);
	},
	72443,
	(a) => {
		a.n(a.i(68069));
	},
	90895,
	(a) => {
		a.n(a.i(30166));
	},
	60387,
	(a) => {
		a.n(a.i(40921));
	},
	40985,
	(a) => {
		a.n(a.i(44078));
	},
	4771,
	(a) => {
		a.n(a.i(61389));
	},
	84034,
	(a) => {
		a.n(a.i(73493));
	},
	81652,
	(a) => {
		a.n(a.i(22072));
	},
	53714,
	(a) => {
		a.n(a.i(32741));
	},
	44961,
	(a) => {
		a.n(a.i(40909));
	},
	59273,
	(a) => {
		a.n(a.i(65175));
	},
	2509,
	(a) => {
		a.n(a.i(64469));
	},
	17119,
	(a) => {
		a.n(a.i(37932));
	},
	26186,
	(a) => {
		a.n(a.i(59840));
	},
	71298,
	(a) => {
		a.n(a.i(30688));
	},
	77902,
	(a) => {
		a.n(a.i(60251));
	},
	47494,
	(a) => {
		a.n(a.i(61189));
	},
	78964,
	(a) => {
		a.n(a.i(67125));
	},
	60599,
	(a) => {
		a.n(a.i(13722));
	},
	80342,
	(a) => {
		a.n(a.i(79041));
	},
	20514,
	(a) => {
		a.n(a.i(36610));
	},
	28802,
	(a) => {
		a.n(a.i(15073));
	},
	50195,
	(a) => {
		a.n(a.i(75196));
	},
	16729,
	(a) => {
		a.n(a.i(65666));
	},
	6826,
	(a) => {
		a.n(a.i(21659));
	},
	47279,
	(a) => {
		a.n(a.i(93212));
	},
	39175,
	(a) => {
		a.n(a.i(86613));
	},
	65832,
	(a) => {
		a.n(a.i(36011));
	},
	29905,
	(a) => {
		a.n(a.i(19071));
	},
	52218,
	(a) => {
		a.n(a.i(96726));
	},
	60011,
	(a) => {
		a.n(a.i(71781));
	},
	96881,
	(a) => {
		a.n(a.i(70273));
	},
	55595,
	(a) => {
		a.n(a.i(46462));
	},
	78335,
	(a) => {
		a.n(a.i(24778));
	},
	29171,
	(a) => {
		"use strict";
		var b = a.i(51432),
			c = a.i(19959);
		a.s([
			"Card",
			0,
			function ({ children: a, className: d = "" }) {
				return (0, b.jsx)("div", {
					className: `${c.default.card} ${d}`.trim(),
					children: a,
				});
			},
		]);
	},
	56301,
	(a) => {
		"use strict";
		var b = a.i(51432),
			c = a.i(29171),
			d = a.i(19959);
		async function e({ params: a }) {
			let { tenant: f } = await a;
			return (0, b.jsxs)("main", {
				className: d.default.marketingShell,
				children: [
					(0, b.jsxs)("section", {
						className: `${d.default.heroCard} ${d.default.tenantHero}`,
						children: [
							(0, b.jsx)("p", {
								className: d.default.kicker,
								children: "Tenant Campus",
							}),
							(0, b.jsxs)("h1", { children: [f, " campus portal"] }),
							(0, b.jsxs)("p", {
								children: [
									"This route is fed by proxy-based subdomain rewriting, so a hostname like ",
									(0, b.jsxs)("code", { children: [f, ".your-domain.com"] }),
									" can map into a tenant-aware OmniEdu experience without needing a separate app.",
								],
							}),
						],
					}),
					(0, b.jsxs)("section", {
						className: d.default.grid2,
						children: [
							(0, b.jsxs)(c.Card, {
								children: [
									(0, b.jsx)("p", {
										className: d.default.kicker,
										children: "Routing",
									}),
									(0, b.jsx)("h2", { children: "Subdomain detected" }),
									(0, b.jsx)("p", {
										children:
											"The middleware rewrote this request into a campus-aware route.",
									}),
								],
							}),
							(0, b.jsxs)(c.Card, {
								children: [
									(0, b.jsx)("p", {
										className: d.default.kicker,
										children: "Fallbacks",
									}),
									(0, b.jsx)("h2", { children: "Path safety preserved" }),
									(0, b.jsx)("p", {
										children:
											"Internal Next.js assets, proxy endpoints, and APIs bypass tenant rewrites automatically.",
									}),
								],
							}),
						],
					}),
				],
			});
		}
		a.s(["default", 0, e]);
	},
	49837,
	(a) => {
		a.n(a.i(56301));
	},
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0itjp94._.js.map
