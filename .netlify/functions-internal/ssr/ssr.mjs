
				import createSSRHandler from './entry.mjs';
				export default createSSRHandler({"cacheOnDemandPages":false});
				export const config = { name: "Astro SSR", generator: "@astrojs/netlify@4.0.2", path: "/*", preferStatic: true };
			