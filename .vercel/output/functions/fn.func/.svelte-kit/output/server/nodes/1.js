

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.f502fce8.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.9d996ac2.js","_app/immutable/chunks/singletons.38b61997.js"];
export const stylesheets = [];
export const fonts = [];
