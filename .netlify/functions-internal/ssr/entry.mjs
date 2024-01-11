import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_8_5jLOrN.mjs';

const _page0  = () => import('./chunks/generic_U_ifLe0N.mjs');
const _page1  = () => import('./chunks/index_rgRlUyOK.mjs');
const _page2  = () => import('./chunks/QuienesSomos_KYknXgiG.mjs');
const _page3  = () => import('./chunks/servicios_BZhyTZ3u.mjs');
const _page4  = () => import('./chunks/eventos_k04bYUzX.mjs');
const _page5  = () => import('./chunks/Rentas_nrpD69Lb.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/QuienesSomos.astro", _page2],["src/pages/servicios.astro", _page3],["src/pages/eventos.astro", _page4],["src/pages/Rentas.astro", _page5]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
