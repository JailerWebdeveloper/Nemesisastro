/* empty css                                 */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot, g as renderComponent } from '../astro_ziWzrQ3n.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './QuienesSomos_UnoLGSwi.mjs';
import { a as $$Buttonplay, $ as $$Layout2 } from './Rentas_QU-Xa9wD.mjs';
import { $ as $$Image } from './generic_ncduDDoJ.mjs';
/* empty css                          */

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
</p> <div class="md:flex hidden w-full justify-around" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "Image", $$Image, { "src": PS5LOGO, "alt": "PS5", "class": "w-1/6", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result3, "Image", $$Image, { "src": XBOXSERIESXLOGO, "alt": "XBOX SERIES X", "class": "w-1/6", "data-astro-cid-j7pv25f6": true })} </div> </div> </div> ` })} ${renderComponent($$result2, "Layout2", $$Layout2, { "imageurl": "../../public/BannerTwitch.png", "title": "\xBFQUE HACEMOS?", "subtitle": "Playstation 4 | Playstation 5 | XBOX Series | TV 43\u201D | Bases moviles para TV", "description": "Tenemos toFdo lo necesario para ambientar de manera diferente los eventos de tu empresa", "About": "Renta Empresarial", "data-astro-cid-j7pv25f6": true }, { "list": ($$result3) => renderTemplate`<li data-astro-cid-j7pv25f6>
Juegos de tendencia: Tenemos una amplia selección de juegos populares y
        de tendencia que se adaptan a diferentes gustos y edades, asegurando que
        todos encuentren algo que les apasione
</li><li data-astro-cid-j7pv25f6>
Configuración y soporte técnico: Nuestro equipo se encarga de la
        instalación y configuración de los equipos, así como de brindar soporte
        técnico durante el evento para garantizar un funcionamiento sin
        problemas.
</li><li data-astro-cid-j7pv25f6>
Experiencia inolvidable: Nuestra renta empresarial de equipos de
        videojuegos ofrece una experiencia inmersiva y emocionante que fomenta
        el compañerismo, la competencia amistosa y la interacción entre los
        empleados.
</li><li data-astro-cid-j7pv25f6>
Flexibilidad: Adaptamos nuestros servicios a tus necesidades
        específicas, ya sea para un evento de medio día o para una renta a largo
        plazo.
</li>` })} <section data-astro-cid-j7pv25f6> <div class="w-full p-10 flex flex-col items-center justify-center" data-astro-cid-j7pv25f6> <h1 class="text-white font-bold text-6xl" data-astro-cid-j7pv25f6>Noticias</h1> <div class="w-full p-20 grid grid-cols-1 place-items-center md:grid-cols-3 gap-10 grid-rows-auto place-content-center" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Noticiascard", $$Noticiascard, { "titulo": "Gaming femenino", "descripcion": "En un mundo donde la inclusi\xF3n y la diversidad son cada vez m\xE1s importantes. Las mujeres gamers est\xE1n conquistando terreno, derribando estereotipos y destacando en competiciones de videojuegos a nivel mundial.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Noticiascard", $$Noticiascard, { "titulo": "Gaming femenino", "descripcion": "En un mundo donde la inclusi\xF3n y la diversidad son cada vez m\xE1s importantes. Las mujeres gamers est\xE1n conquistando terreno, derribando estereotipos y destacando en competiciones de videojuegos a nivel mundial.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Noticiascard", $$Noticiascard, { "titulo": "Gaming femenino", "descripcion": "En un mundo donde la inclusi\xF3n y la diversidad son cada vez m\xE1s importantes. Las mujeres gamers est\xE1n conquistando terreno, derribando estereotipos y destacando en competiciones de videojuegos a nivel mundial.", "data-astro-cid-j7pv25f6": true })} </div> </div> </section> ${renderComponent($$result2, "Layout2", $$Layout2, { "imageurl": "../../public/Purple Blue Colorful Gaming LinkedIn Banner.png", "title": "\xBFQUE HACEMOS?", "subtitle": "Playstation 4 | Playstation 5 | XBOX Series | TV 43\u201D | Bases moviles para TV", "description": "", "About": "Eventos Privados", "data-astro-cid-j7pv25f6": true }, { "list": ($$result3) => renderTemplate`<li data-astro-cid-j7pv25f6>
Llevamos toda la producción que incluye: Pendón temático de fondo con la
        imágen del videojuego de tu interés, iluminación tipo dj, televisores de
        43" con bases móviles, consola a elegir; xbox one, ps4, ps5.
</li><li data-astro-cid-j7pv25f6>
Servicio desde 3 horas efectivas personal capacitado que sanitiza el
        equipo constantemente, gestiona equipos de juego y apoya a los invitados
        para que no pierdan un solo minuto de diversión
</li>` })} ${renderComponent($$result2, "Layout2", $$Layout2, { "imageurl": "../../public/Purple Blue Colorful Gaming LinkedIn Banner(1).png", "title": "\xBFC\xF3mo participar?", "subtitle": "Nuestros eventos en l\xEDnea son m\xE1s que simples torneos. Son encuentros que te desaf\xEDan, te hacen superar tus l\xEDmites y te permiten demostrar tus habilidades a nivel competitivo. \xDAnete a nuestros torneos para enfrentarte a otros jugadores talentosos, conocer nuevos amigos y compartir la pasi\xF3n por los videojuegos.", "description": "", "About": "Eventos Online", "data-astro-cid-j7pv25f6": true }, { "list": ($$result3) => renderTemplate`<li data-astro-cid-j7pv25f6>
Explora nuestros próximos eventos: Visita nuestra página de eventos para conocer los próximos torneos y las fechas de inscripción.
</li><li data-astro-cid-j7pv25f6>
Regístrate: Apúntate a los eventos que te interesen y asegura tu lugar en la competición.
</li><li data-astro-cid-j7pv25f6>
¡Juega y diviértete!: Una vez que el evento comience, únete a la partida, compite con determinación y disfruta del juego al máximo.
</li><li data-astro-cid-j7pv25f6>
¡Celebra tu éxito!: Si te destacas y alcanzas la gloria, recibirás tu merecido reconocimiento y, posiblemente, emocionantes premios.
</li>` })} </main> ` })} `;
}, "C:/Users/Jailer/Desktop/Nemexis-Astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/Jailer/Desktop/Nemexis-Astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
