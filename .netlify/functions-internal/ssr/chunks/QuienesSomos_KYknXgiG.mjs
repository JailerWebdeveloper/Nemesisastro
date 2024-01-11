export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/QuienesSomos_UnoLGSwi.mjs').then(n => n.Q);

export { page };
