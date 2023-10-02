export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.2ef2251c.js","app":"_app/immutable/entry/app.09e67373.js","imports":["_app/immutable/entry/start.2ef2251c.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/singletons.777c8a6e.js","_app/immutable/entry/app.09e67373.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.9d996ac2.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
