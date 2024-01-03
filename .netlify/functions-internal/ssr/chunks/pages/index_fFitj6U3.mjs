/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderHead, j as renderComponent, k as renderSlot } from '../astro_alsDBiBx.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Image } from './generic_-kcbOvRg.mjs';

const $$Astro$5 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<header class="text-gray-600 body-font"> <div class="container mx-auto flex flex-wrap p-5 flex-col justify-between md:flex-row items-center"> <a class="flex items-center w-52 mb-4 md:mb-0"> <img src="../../public/LOGO-BLANCO-.PNG" class="object-cover" alt="hero"> </a> </div> </header>`;
}, "C:/Users/Jailer/Desktop/Nemexis-Astro/src/components/Navbar.astro", void 0);

const $$Astro$4 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="cursor-personalizado"> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Jailer/Desktop/Nemexis-Astro/src/layouts/Layout.astro", void 0);

const $$Astro$3 = createAstro();
const $$Buttonplay = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Buttonplay;
  const { texto } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button class="buttonplay w-full" data-astro-cid-ptaw5wh3>${texto}</button> `;
}, "C:/Users/Jailer/Desktop/Nemexis-Astro/src/components/shared/Buttonplay.astro", void 0);

const $$Astro$2 = createAstro();
const $$HerobgimageLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HerobgimageLayout;
  const { IURL } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="text-gray-600 body-font w-11/12 hero rounded-xl "${addAttribute({ backgroundImage: `url(${IURL})` }, "style")}> <div class="hero-overlay  bg-clip-content  rounded-xl backdrop-blur-sm"></div> <div class="container hero-content mx-auto flex px-5 py-24 md:flex-row flex-col items-center"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "C:/Users/Jailer/Desktop/Nemexis-Astro/src/layouts/HerobgimageLayout.astro", void 0);

const PS5LOGO = new Proxy({"src":"/_astro/PS5.k7T6F1O1.png","width":1200,"height":1200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const XBOXSERIESXLOGO = new Proxy({"src":"/_astro/XBOX-SERIES-X-.bBMtuzgk.png","width":1200,"height":1200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const Bannertwitch = new Proxy({"src":"/_astro/BannerTwitch.o12TkDEP.png","width":1200,"height":480,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$Noticiascard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Noticiascard;
  const { titulo, descripcion } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class=" flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md  hover:-translate-y-2 transition-all hover:ring-2"> <div class=" mx-4 -mt-6 h-52 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"${addAttribute({
    backgroundImage: `url(${"https://i.pinimg.com/564x/bb/58/33/bb5833f07760163f3687818d67056701.jpg"})`
  }, "style")}></div> <div class="p-6"> <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"> ${titulo} </h5> <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased"> ${descripcion} </p> </div> <div class="p-6 pt-0"> ${renderComponent($$result, "Buttonplay", $$Buttonplay, { "texto": "leer mas" })} </div> </div>`;
}, "C:/Users/Jailer/Desktop/Nemexis-Astro/src/components/Noticiascard.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col gap-10 justify-center items-center" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "HerobgimageLayout", $$HerobgimageLayout, { "IURL": "https://i.pinimg.com/236x/93/d4/d5/93d4d5d484d0331bd52ff1be48bb9cdf.jpg", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center justify-center text-center" data-astro-cid-j7pv25f6> <p class="mb-8 text-center font-extrabold text-white uppercase md:text-3xl text-xl antialiased tracking-wide break-words" data-astro-cid-j7pv25f6>
Especialízate en formación profesional del E-SPORT. Desarrolla tu
          carrera en el GAMING con expertos que comparten tu pasión
</p> <div class="flex justify-center w-3/5 self-center" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "Buttonplay", $$Buttonplay, { "texto": "Ver Programa Academico", "data-astro-cid-j7pv25f6": true })} </div> </div> <div class="lg:max-w-lg lg:w-full md:w-1/2 w-full flex justify-center" data-astro-cid-j7pv25f6> <iframe class="self-center rounded-lg shadow-xl hover:-translate-y-4 transition-all hover:ring-2 md:h-96 h-60 md:w-full" src="https://www.youtube.com/embed/A1YMsfIhIi8" title="EVE Online | Mercenarios, los dioses del campo de batalla" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-astro-cid-j7pv25f6></iframe> </div> ` })} ${renderComponent($$result2, "HerobgimageLayout", $$HerobgimageLayout, { "IURL": "../../public/BANNER-OSCURO-.png", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <div class="p-10 grid place-content-center place-items-center md:grid-cols-1 h-full" data-astro-cid-j7pv25f6> <div class="flex flex-col items-center justify-center gap-10" data-astro-cid-j7pv25f6> <p class="text-white font-extrabold uppercase antialiased tracking-normal break-words md:text-6xl text-2xl text-center" data-astro-cid-j7pv25f6>
SEREMOS TUS ALIADOS EN TORNEOS, EVENTOS Y VIDEO JUEGOS
</p> <p class="text-white font-bold uppercase antialiased tracking-normal break-words mdtext-2xl text-lg md:text-center text-justify" data-astro-cid-j7pv25f6>
Disfruta de las nuevas generaciones de juegos desde su día de
            lanzamiento, celebra tu evento o cumpleaños, activa tu marca y únete
            a nuestra comunidad.
</p> <div class="md:flex hidden w-full justify-around" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "Image", $$Image, { "src": PS5LOGO, "alt": "PS5", "class": "w-1/6", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result3, "Image", $$Image, { "src": XBOXSERIESXLOGO, "alt": "XBOX SERIES X", "class": "w-1/6", "data-astro-cid-j7pv25f6": true })} </div> </div> </div> ` })} <section id="Banner " data-astro-cid-j7pv25f6> <div class="flex w-full p-10 justify-center items-center" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": Bannertwitch, "alt": "BANNER OSCURO", "class": "w-full rounded-xl brillosombra transition-all imgentry", "data-astro-cid-j7pv25f6": true })} </div> <div class="w-full px-5 py-24 flex justify-center items-center" data-astro-cid-j7pv25f6> <div class="w-full md:4/5 break-words flex flex-col gap-5 items-center justify-center text-justify md:text-center" data-astro-cid-j7pv25f6> <p class="font-bold text-xl md:text-4xl uppercase" data-astro-cid-j7pv25f6>¿QUÉ HACEMOS?</p> <p class="leading-relaxed font-semibold text-xl" data-astro-cid-j7pv25f6>
Tenemos todo lo necesario para ambientar de manera diferente los
            eventos de tu empresa.<br data-astro-cid-j7pv25f6>
Las pausas activas serán más llamativas y relajantes.
</p> <ul class="flex flex-col gap-5 w-3/5 leading-relaxed font-semibold text-lg text-justify list-disc" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6>
Juegos de tendencia: Tenemos una amplia selección de juegos
              populares y de tendencia que se adaptan a diferentes gustos y
              edades, asegurando que todos encuentren algo que les apasione
</li> <li data-astro-cid-j7pv25f6>
Configuración y soporte técnico: Nuestro equipo se encarga de la
              instalación y configuración de los equipos, así como de brindar
              soporte técnico durante el evento para garantizar un
              funcionamiento sin problemas.
</li> <li data-astro-cid-j7pv25f6>
Experiencia inolvidable: Nuestra renta empresarial de equipos de
              videojuegos ofrece una experiencia inmersiva y emocionante que
              fomenta el compañerismo, la competencia amistosa y la interacción
              entre los empleados.
</li> <li data-astro-cid-j7pv25f6>
Flexibilidad: Adaptamos nuestros servicios a tus necesidades
              específicas, ya sea para un evento de medio día o para una renta a
              largo plazo.
</li> </ul> <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" data-astro-cid-j7pv25f6></span> <div class="flex justify-center items-center" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Buttonplay", $$Buttonplay, { "texto": "Habla con nosotros", "data-astro-cid-j7pv25f6": true })} </div> </div> </div> </section> <section data-astro-cid-j7pv25f6> <div class="w-full p-10 flex flex-col items-center justify-center" data-astro-cid-j7pv25f6> <h1 class="text-white font-bold text-6xl" data-astro-cid-j7pv25f6>Noticias</h1> <div class="w-full p-20 grid grid-cols-3 gap-10 grid-rows-auto place-content-center" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Noticiascard", $$Noticiascard, { "titulo": "Gaming femenino", "descripcion": "En un mundo donde la inclusi\xF3n y la diversidad son cada vez m\xE1s importantes. Las mujeres gamers est\xE1n conquistando terreno, derribando estereotipos y destacando en competiciones de videojuegos a nivel mundial.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Noticiascard", $$Noticiascard, { "titulo": "Gaming femenino", "descripcion": "En un mundo donde la inclusi\xF3n y la diversidad son cada vez m\xE1s importantes. Las mujeres gamers est\xE1n conquistando terreno, derribando estereotipos y destacando en competiciones de videojuegos a nivel mundial.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Noticiascard", $$Noticiascard, { "titulo": "Gaming femenino", "descripcion": "En un mundo donde la inclusi\xF3n y la diversidad son cada vez m\xE1s importantes. Las mujeres gamers est\xE1n conquistando terreno, derribando estereotipos y destacando en competiciones de videojuegos a nivel mundial.", "data-astro-cid-j7pv25f6": true })} </div> </div> </section> <section id="Banner " data-astro-cid-j7pv25f6> <div class="flex w-full p-10 justify-center items-center" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": Bannertwitch, "alt": "BANNER OSCURO", "class": "w-full rounded-xl brillosombra transition-all imgentry", "data-astro-cid-j7pv25f6": true })} </div> <div class="w-full px-5 py-24 flex justify-center items-center" data-astro-cid-j7pv25f6> <div class="w-full md:4/5 break-words flex flex-col gap-5 items-center justify-center text-justify md:text-center" data-astro-cid-j7pv25f6> <p class="font-bold text-xl md:text-4xl uppercase" data-astro-cid-j7pv25f6>¿QUÉ HACEMOS?</p> <p class="leading-relaxed font-semibold text-xl" data-astro-cid-j7pv25f6>
Tenemos todo lo necesario para ambientar de manera diferente los
            eventos de tu empresa.<br data-astro-cid-j7pv25f6>
Las pausas activas serán más llamativas y relajantes.
</p> <ul class="flex flex-col gap-5 w-3/5 leading-relaxed font-semibold text-lg text-justify list-disc" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6>
Juegos de tendencia: Tenemos una amplia selección de juegos
              populares y de tendencia que se adaptan a diferentes gustos y
              edades, asegurando que todos encuentren algo que les apasione
</li> <li data-astro-cid-j7pv25f6>
Configuración y soporte técnico: Nuestro equipo se encarga de la
              instalación y configuración de los equipos, así como de brindar
              soporte técnico durante el evento para garantizar un
              funcionamiento sin problemas.
</li> <li data-astro-cid-j7pv25f6>
Experiencia inolvidable: Nuestra renta empresarial de equipos de
              videojuegos ofrece una experiencia inmersiva y emocionante que
              fomenta el compañerismo, la competencia amistosa y la interacción
              entre los empleados.
</li> <li data-astro-cid-j7pv25f6>
Flexibilidad: Adaptamos nuestros servicios a tus necesidades
              específicas, ya sea para un evento de medio día o para una renta a
              largo plazo.
</li> </ul> <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" data-astro-cid-j7pv25f6></span> <div class="flex justify-center items-center" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Buttonplay", $$Buttonplay, { "texto": "Habla con nosotros", "data-astro-cid-j7pv25f6": true })} </div> </div> </div> </section> </main> ` })} `;
}, "C:/Users/Jailer/Desktop/Nemexis-Astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/Jailer/Desktop/Nemexis-Astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
