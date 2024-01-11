/* empty css                                 */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderComponent } from '../astro_ziWzrQ3n.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { a as $$Buttonplay } from './Rentas_QU-Xa9wD.mjs';
import { $ as $$Layout } from './QuienesSomos_UnoLGSwi.mjs';

const $$Astro$1 = createAstro();
const $$Cardservicios = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Cardservicios;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class=" mx-auto flex-shrink bg-gray-700 md:w-2/5 rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5 break-words "> <img src="../../public/LOGO-BLANCO-.png" alt="logo" class="h-24 mx-auto"> <h4 class="py-2 text-white font-bold text-center text-2xl">${title}</h4> <p class="text-sm leading-7 text-slate-300 space-y-4 text-justify">${description}</p> <div class="pt-5 pb-2 flex justify-center"> ${renderComponent($$result, "Buttonplay", $$Buttonplay, { "texto": "Conoce mas" })} </div> </div>`;
}, "C:/Users/Jailer/Desktop/Nemexis-Astro/src/components/Cardservicios.astro", void 0);

const $$Astro = createAstro();
const $$Servicios = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Servicios;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Servicios" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full h-full flex flex-col p-10 gap-5 items-center justify-center"> <p class="text-white font-extrabold leading-relaxed text-center break-words text-2xl antialiased md:text-6xl mt-10">
SERVICIOS PROFESIONALES
</p> <span class="inline-block h-1 w-2/5 rounded bg-indigo-500 mb-8"></span> <div class="flex flex-col md:flex-row gap-5 items-center  justify-center w-full h-full"> ${renderComponent($$result2, "Cardservicios", $$Cardservicios, { "title": "Soporte T\xE9cnico", "description": "Experimenta un soporte t\xE9cnico excepcional dise\xF1ado para resolver tus desaf\xEDos inform\xE1ticos con eficiencia. Nuestro servicio garantiza soluciones r\xE1pidas y efectivas, brindando asistencia experta para mantener tus sistemas en \xF3ptimo rendimiento. Conf\xEDa en nosotros para superar cualquier obst\xE1culo t\xE9cnico y optimizar tu experiencia digital." })} ${renderComponent($$result2, "Cardservicios", $$Cardservicios, { "title": "Desarrollo de P\xE1ginas web", "description": "Descubre la excelencia en el desarrollo de p\xE1ginas web con nuestro servicio especializado. Creamos experiencias digitales impactantes y funcionales, adaptadas a tus necesidades. Conf\xEDa en nuestro equipo para materializar tu visi\xF3n en la web con soluciones de vanguardia y dise\xF1o innovador." })} ${renderComponent($$result2, "Cardservicios", $$Cardservicios, { "title": "Desarrollo de Software a la Medida", "description": "Transforma tu visi\xF3n en realidad con nuestro servicio de desarrollo de software a la medida. Dise\xF1amos soluciones personalizadas que se ajustan a tus necesidades espec\xEDficas. Con experiencia en diversas plataformas, ofrecemos un enfoque integral para impulsar el \xE9xito de tu proyecto." })} ${renderComponent($$result2, "Cardservicios", $$Cardservicios, { "title": "Dise\xF1o Gr\xE1fico y Publicidad", "description": "Destaca entre la multitud con nuestro servicio de Dise\xF1o Gr\xE1fico y Publicidad. Desde logotipos impactantes hasta campa\xF1as publicitarias creativas, damos vida a tu marca. Con un enfoque \xFAnico y creativo, te ayudamos a comunicar tu mensaje de manera efectiva y a destacar en el competitivo mundo del dise\xF1o y la publicidad." })} </div> </section> ` })}`;
}, "C:/Users/Jailer/Desktop/Nemexis-Astro/src/pages/servicios.astro", void 0);

const $$file = "C:/Users/Jailer/Desktop/Nemexis-Astro/src/pages/servicios.astro";
const $$url = "/servicios";

export { $$Servicios as default, $$file as file, $$url as url };
