/* empty css                                 */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot, g as renderComponent } from '../astro_ziWzrQ3n.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './QuienesSomos_UnoLGSwi.mjs';
/* empty css                              */
/* empty css                           */

const $$Astro$2 = createAstro();
const $$Buttonplay = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Buttonplay;
  const { texto } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button class="buttonplay w-full" data-astro-cid-ptaw5wh3>${texto}</button> `;
}, "C:/Users/Jailer/Desktop/Nemexis-Astro/src/components/shared/Buttonplay.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout2;
  const { imageurl, title, description, About, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="Banner brillosombra transition-all my-5" data-astro-cid-6cgqs2tn> <div class="flex w-full p-10 justify-center items-center" data-astro-cid-6cgqs2tn> <img${addAttribute(imageurl, "src")} alt="BANNER OSCURO" class="w-full rounded-xl brillosombra transition-all imgentry" data-astro-cid-6cgqs2tn> </div> <div class="w-full px-5  flex justify-center items-center" data-astro-cid-6cgqs2tn> <div class="w-full md:4/5 break-words flex flex-col gap-5 items-center justify-center text-justify md:text-center" data-astro-cid-6cgqs2tn> <p class="font-bold text-xl md:text-4xl uppercase" data-astro-cid-6cgqs2tn>${About}</p> <p class="font-semibold text-lg md:text-xl leading-relaxed md:w-4/5" data-astro-cid-6cgqs2tn>${subtitle}</p> <span class="inline-block h-1 w-10 rounded bg-indigo-500 mb-8" data-astro-cid-6cgqs2tn></span> <p class="font-bold text-xl md:text-4xl uppercase" data-astro-cid-6cgqs2tn>${title}</p> <p class="leading-relaxed font-semibold text-xl" data-astro-cid-6cgqs2tn> ${description} </p> <ul class="flex flex-col gap-5 md:w-3/5 leading-relaxed font-semibold text-lg text-justify list-disc" data-astro-cid-6cgqs2tn> ${renderSlot($$result, $$slots["list"])}</ul> <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" data-astro-cid-6cgqs2tn></span> <div class="flex justify-center items-center" data-astro-cid-6cgqs2tn> ${renderComponent($$result, "Buttonplay", $$Buttonplay, { "texto": "Habla con nosotros", "data-astro-cid-6cgqs2tn": true })} </div> </div> </div> </section> `;
}, "C:/Users/Jailer/Desktop/Nemexis-Astro/src/layouts/Layout2.astro", void 0);

const $$Astro = createAstro();
const $$Rentas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Rentas;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Rentas" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Layout2", $$Layout2, { "title": "", "subtitle": "", "description": "", "imageurl": "../../public/Banner De Twitch Ne\xF3n Amarillo Rosa.png", "About": "" })}` })}`;
}, "C:/Users/Jailer/Desktop/Nemexis-Astro/src/pages/Rentas.astro", void 0);

const $$file = "C:/Users/Jailer/Desktop/Nemexis-Astro/src/pages/Rentas.astro";
const $$url = "/Rentas";

const Rentas = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Rentas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout2 as $, Rentas as R, $$Buttonplay as a };
