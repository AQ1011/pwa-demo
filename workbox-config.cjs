module.exports = {
	globDirectory: "dist/",
	globPatterns: ["**/*.{js,css,html,png,svg,json}"],
	swDest: "dist/sw.js",
	clientsClaim: true,
	skipWaiting: true,
	runtimeCaching: [
		{
			urlPattern: /\/api\/dashboard/,
			handler: "StaleWhileRevalidate",
			options: {
				cacheName: "api-dashboard-cache",
				expiration: {
					maxEntries: 30,
					maxAgeSeconds: 24 * 60 * 60, // 1 day
				},
			},
		},
	],
};
