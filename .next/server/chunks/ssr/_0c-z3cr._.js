module.exports = [
	19959,
	(a) => {
		a.v({
			authCard: "omniedu-module__ZuS8GG__authCard",
			authShell: "omniedu-module__ZuS8GG__authShell",
			button: "omniedu-module__ZuS8GG__button",
			buttonGhost: "omniedu-module__ZuS8GG__buttonGhost",
			buttonSecondary: "omniedu-module__ZuS8GG__buttonSecondary",
			card: "omniedu-module__ZuS8GG__card",
			field: "omniedu-module__ZuS8GG__field",
			fieldError: "omniedu-module__ZuS8GG__fieldError",
			formCard: "omniedu-module__ZuS8GG__formCard",
			formGrid: "omniedu-module__ZuS8GG__formGrid",
			grid2: "omniedu-module__ZuS8GG__grid2",
			grid3: "omniedu-module__ZuS8GG__grid3",
			heroActions: "omniedu-module__ZuS8GG__heroActions",
			heroCard: "omniedu-module__ZuS8GG__heroCard",
			heroGrid: "omniedu-module__ZuS8GG__heroGrid",
			inlineNotice: "omniedu-module__ZuS8GG__inlineNotice",
			kicker: "omniedu-module__ZuS8GG__kicker",
			marketingContent: "omniedu-module__ZuS8GG__marketingContent",
			marketingShell: "omniedu-module__ZuS8GG__marketingShell",
			metricList: "omniedu-module__ZuS8GG__metricList",
			navLink: "omniedu-module__ZuS8GG__navLink",
			pageHeader: "omniedu-module__ZuS8GG__pageHeader",
			platformContent: "omniedu-module__ZuS8GG__platformContent",
			platformShell: "omniedu-module__ZuS8GG__platformShell",
			promoPanel: "omniedu-module__ZuS8GG__promoPanel",
			sidebar: "omniedu-module__ZuS8GG__sidebar",
			sidebarCallout: "omniedu-module__ZuS8GG__sidebarCallout",
			sidebarNav: "omniedu-module__ZuS8GG__sidebarNav",
			stack: "omniedu-module__ZuS8GG__stack",
			statsGrid: "omniedu-module__ZuS8GG__statsGrid",
			statusPill: "omniedu-module__ZuS8GG__statusPill",
			table: "omniedu-module__ZuS8GG__table",
			tenantHero: "omniedu-module__ZuS8GG__tenantHero",
			topLinks: "omniedu-module__ZuS8GG__topLinks",
			topNav: "omniedu-module__ZuS8GG__topNav",
			wordmark: "omniedu-module__ZuS8GG__wordmark",
			wordmarkBadge: "omniedu-module__ZuS8GG__wordmarkBadge",
		});
	},
	54508,
	(a, b, c) => {
		"use strict";
		function d(a) {
			if ("function" != typeof WeakMap) return null;
			var b = new WeakMap(),
				c = new WeakMap();
			return (d = function (a) {
				return a ? c : b;
			})(a);
		}
		c._ = function (a, b) {
			if (!b && a && a.__esModule) return a;
			if (null === a || ("object" != typeof a && "function" != typeof a))
				return { default: a };
			var c = d(b);
			if (c && c.has(a)) return c.get(a);
			var e = { __proto__: null },
				f = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var g in a)
				if ("default" !== g && Object.prototype.hasOwnProperty.call(a, g)) {
					var h = f ? Object.getOwnPropertyDescriptor(a, g) : null;
					h && (h.get || h.set)
						? Object.defineProperty(e, g, h)
						: (e[g] = a[g]);
				}
			return ((e.default = a), c && c.set(a, e), e);
		};
	},
	56586,
	(a, b, c) => {
		let { createClientModuleProxy: d } = a.r(23810);
		a.n(
			d(
				"[project]/node_modules/.pnpm/next@16.2.4_@playwright+tes_531d8b397c25a2c72a4af9aac2d67e01/node_modules/next/dist/client/app-dir/link.js <module evaluation>"
			)
		);
	},
	57731,
	(a, b, c) => {
		let { createClientModuleProxy: d } = a.r(23810);
		a.n(
			d(
				"[project]/node_modules/.pnpm/next@16.2.4_@playwright+tes_531d8b397c25a2c72a4af9aac2d67e01/node_modules/next/dist/client/app-dir/link.js"
			)
		);
	},
	44485,
	(a) => {
		"use strict";
		a.i(56586);
		var b = a.i(57731);
		a.n(b);
	},
	49253,
	(a, b, c) => {
		"use strict";
		Object.defineProperty(c, "__esModule", { value: !0 });
		var d = {
			default: function () {
				return i;
			},
			useLinkStatus: function () {
				return h.useLinkStatus;
			},
		};
		for (var e in d) Object.defineProperty(c, e, { enumerable: !0, get: d[e] });
		let f = a.r(54508),
			g = a.r(51432),
			h = f._(a.r(44485));
		function i(a) {
			let b = a.legacyBehavior,
				c =
					"string" == typeof a.children ||
					"number" == typeof a.children ||
					"string" == typeof a.children?.type,
				d = a.children?.type?.$$typeof === Symbol.for("react.client.reference");
			return (
				!b ||
					c ||
					d ||
					(a.children?.type?.$$typeof === Symbol.for("react.lazy")
						? console.error(
								"Using a Lazy Component as a direct child of `<Link legacyBehavior>` from a Server Component is not supported. If you need legacyBehavior, wrap your Lazy Component in a Client Component that renders the Link's `<a>` tag."
							)
						: console.error(
								"Using a Server Component as a direct child of `<Link legacyBehavior>` is not supported. If you need legacyBehavior, wrap your Server Component in a Client Component that renders the Link's `<a>` tag."
							)),
				(0, g.jsx)(h.default, { ...a })
			);
		}
		("function" == typeof c.default ||
			("object" == typeof c.default && null !== c.default)) &&
			void 0 === c.default.__esModule &&
			(Object.defineProperty(c.default, "__esModule", { value: !0 }),
			Object.assign(c.default, c),
			(b.exports = c.default));
	},
	66188,
	(a) => {
		"use strict";
		var b = a.i(51432),
			c = a.i(49253),
			d = a.i(19959);
		a.s([
			"default",
			0,
			function () {
				return (0, b.jsx)("main", {
					className: d.default.authShell,
					children: (0, b.jsxs)("section", {
						className: d.default.heroCard,
						children: [
							(0, b.jsx)("p", { className: d.default.kicker, children: "404" }),
							(0, b.jsx)("h1", { children: "That OmniEdu page is missing." }),
							(0, b.jsx)("p", {
								children:
									"The route may have moved, the tenant may be invalid, or the page has not been provisioned yet.",
							}),
							(0, b.jsxs)("div", {
								className: d.default.heroActions,
								children: [
									(0, b.jsx)(c.default, {
										href: "/",
										className: d.default.button,
										children: "Return home",
									}),
									(0, b.jsx)(c.default, {
										href: "/dashboard",
										className: `${d.default.button} ${d.default.buttonSecondary}`,
										children: "Open dashboard",
									}),
								],
							}),
						],
					}),
				});
			},
		]);
	},
	2894,
	(a) => {
		a.n(a.i(66188));
	},
];

//# sourceMappingURL=_0c-z3cr._.js.map
