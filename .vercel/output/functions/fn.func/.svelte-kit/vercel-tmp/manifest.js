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
		client: {"start":"_app/immutable/entry/start.de158fbd.js","app":"_app/immutable/entry/app.d0f6c88c.js","imports":["_app/immutable/entry/start.de158fbd.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/singletons.91a69131.js","_app/immutable/entry/app.d0f6c88c.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.9d996ac2.js"],"stylesheets":[],"fonts":[]},
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
