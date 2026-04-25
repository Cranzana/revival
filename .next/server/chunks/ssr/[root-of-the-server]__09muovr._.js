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
	53126,
	(a) => {
		"use strict";
		var b = a.i(51432),
			c = a.i(49253),
			d = a.i(19959);
		let e = [
			{ href: "/dashboard", label: "Dashboard" },
			{ href: "/learn", label: "Learning" },
			{ href: "/proxy", label: "Proxy Lab" },
			{ href: "/admin", label: "Admin" },
		];
		a.s(
			[
				"PlatformShell",
				0,
				function ({ children: a, description: f, eyebrow: g, title: h }) {
					return (0, b.jsxs)("div", {
						className: d.default.platformShell,
						children: [
							(0, b.jsxs)("aside", {
								className: d.default.sidebar,
								children: [
									(0, b.jsxs)(c.default, {
										href: "/",
										className: d.default.wordmark,
										children: [
											(0, b.jsx)("img", {
												src: "/assets/omniedu-logo.png",
												alt: "",
												className: d.default.wordmarkBadge,
											}),
											(0, b.jsxs)("span", {
												children: [
													(0, b.jsx)("strong", { children: "OmniEdu" }),
													(0, b.jsx)("small", {
														children: "Learning operations platform",
													}),
												],
											}),
										],
									}),
									(0, b.jsx)("nav", {
										className: d.default.sidebarNav,
										children: e.map((a) =>
											(0, b.jsx)(
												c.default,
												{
													href: a.href,
													className: d.default.navLink,
													children: a.label,
												},
												a.href
											)
										),
									}),
									(0, b.jsxs)("div", {
										className: d.default.sidebarCallout,
										children: [
											(0, b.jsx)("p", { children: "Active tenant" }),
											(0, b.jsx)("strong", { children: "Northwind Academy" }),
											(0, b.jsx)("small", {
												children: "SSR + middleware + proxy on one origin",
											}),
										],
									}),
								],
							}),
							(0, b.jsxs)("section", {
								className: d.default.platformContent,
								children: [
									(0, b.jsxs)("header", {
										className: d.default.pageHeader,
										children: [
											(0, b.jsx)("p", {
												className: d.default.kicker,
												children: g,
											}),
											(0, b.jsx)("h1", { children: h }),
											(0, b.jsx)("p", { children: f }),
										],
									}),
									a,
								],
							}),
						],
					});
				},
			],
			53126
		);
	},
	4516,
	(a) => {
		"use strict";
		var b = a.i(51432),
			c = a.i(29171),
			d = a.i(53126),
			e = a.i(19959);
		let f = [
			["SSR platform shell", "Ready"],
			["Tenant middleware", "Ready"],
			["Proxy lab", "Ready"],
			["Prisma schema", "Scaffolded"],
			["Redis cache layer", "Scaffolded"],
			["Kubernetes manifests", "Scaffolded"],
		];
		a.s([
			"default",
			0,
			function () {
				return (0, b.jsxs)(d.PlatformShell, {
					eyebrow: "Operations",
					title: "OmniEdu command dashboard",
					description:
						"A tenant-aware operating surface for curriculum, compliance, routing, and secure browsing workflows.",
					children: [
						(0, b.jsxs)("div", {
							className: e.default.grid3,
							children: [
								(0, b.jsxs)(c.Card, {
									children: [
										(0, b.jsx)("p", {
											className: e.default.kicker,
											children: "Reliability",
										}),
										(0, b.jsx)("h2", { children: "99.95% target uptime" }),
										(0, b.jsx)("p", {
											children:
												"Backed by SSR, response caching, and an explicit deployment stack for containerized hosting.",
										}),
									],
								}),
								(0, b.jsxs)(c.Card, {
									children: [
										(0, b.jsx)("p", {
											className: e.default.kicker,
											children: "Security",
										}),
										(0, b.jsx)("h2", { children: "JWT + RBAC foundation" }),
										(0, b.jsx)("p", {
											children:
												"Token helpers, role hierarchy, route protection, and session-cookie conventions are included.",
										}),
									],
								}),
								(0, b.jsxs)(c.Card, {
									children: [
										(0, b.jsx)("p", {
											className: e.default.kicker,
											children: "PWA",
										}),
										(0, b.jsx)("h2", { children: "Offline-ready shell" }),
										(0, b.jsx)("p", {
											children:
												"The service worker now caches the OmniEdu shell while preserving the Scramjet fetch path.",
										}),
									],
								}),
							],
						}),
						(0, b.jsxs)(c.Card, {
							children: [
								(0, b.jsx)("p", {
									className: e.default.kicker,
									children: "Readiness matrix",
								}),
								(0, b.jsxs)("table", {
									className: e.default.table,
									children: [
										(0, b.jsx)("thead", {
											children: (0, b.jsxs)("tr", {
												children: [
													(0, b.jsx)("th", { children: "Capability" }),
													(0, b.jsx)("th", { children: "Status" }),
												],
											}),
										}),
										(0, b.jsx)("tbody", {
											children: f.map(([a, c]) =>
												(0, b.jsxs)(
													"tr",
													{
														children: [
															(0, b.jsx)("td", { children: a }),
															(0, b.jsx)("td", {
																children: (0, b.jsx)("span", {
																	className: e.default.statusPill,
																	children: c,
																}),
															}),
														],
													},
													a
												)
											),
										}),
									],
								}),
							],
						}),
					],
				});
			},
		]);
	},
	3161,
	(a) => {
		a.n(a.i(4516));
	},
];

//# sourceMappingURL=%5Broot-of-the-server%5D__09muovr._.js.map
