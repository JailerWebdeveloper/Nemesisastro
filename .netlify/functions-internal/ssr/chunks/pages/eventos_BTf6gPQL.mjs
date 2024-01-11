/* empty css                                 */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_ziWzrQ3n.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './QuienesSomos_UnoLGSwi.mjs';
import { $ as $$Layout2 } from './Rentas_QU-Xa9wD.mjs';

const $$Astro = createAstro();
const $$Eventos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Eventos;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Eventos" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Layout2", $$Layout2, { "imageurl": "../../public/Purple Blue Colorful Gaming LinkedIn Banner.png", "title": "\xBFQUE HACEMOS?", "subtitle": "Playstation 4 | Playstation 5 | XBOX Series | TV 43\u201D | Bases moviles para TV", "description": "", "About": "Eventos Privados" }, { "list": ($$result3) => renderTemplate`${maybeRenderHead()}<li>
Llevamos toda la producción que incluye: Pendón temático de fondo con la
        imágen del videojuego de tu interés, iluminación tipo dj, televisores de
        43" con bases móviles, consola a elegir; xbox one, ps4, ps5.
</li><li>
Servicio desde 3 horas efectivas personal capacitado que sanitiza el
        equipo constantemente, gestiona equipos de juego y apoya a los invitados
        para que no pierdan un solo minuto de diversión
</li>` })} ${renderComponent($$result2, "Layout2", $$Layout2, { "imageurl": "../../public/Purple Blue Colorful Gaming LinkedIn Banner(1).png", "title": "\xBFC\xF3mo participar?", "subtitle": "Nuestros eventos en l\xEDnea son m\xE1s que simples torneos. Son encuentros que te desaf\xEDan, te hacen superar tus l\xEDmites y te permiten demostrar tus habilidades a nivel competitivo. \xDAnete a nuestros torneos para enfrentarte a otros jugadores talentosos, conocer nuevos amigos y compartir la pasi\xF3n por los videojuegos.", "description": "", "About": "Eventos Online" }, { "list": ($$result3) => renderTemplate`<li>
Explora nuestros próximos eventos: Visita nuestra página de eventos para conocer los próximos torneos y las fechas de inscripción.
</li><li>
Regístrate: Apúntate a los eventos que te interesen y asegura tu lugar en la competición.
</li><li>
¡Juega y diviértete!: Una vez que el evento comience, únete a la partida, compite con determinación y disfruta del juego al máximo.
</li><li>
¡Celebra tu éxito!: Si te destacas y alcanzas la gloria, recibirás tu merecido reconocimiento y, posiblemente, emocionantes premios.
</li>` })} ` })}`;
}, "C:/Users/Jailer/Desktop/Nemexis-Astro/src/pages/eventos.astro", void 0);

const $$file = "C:/Users/Jailer/Desktop/Nemexis-Astro/src/pages/eventos.astro";
const $$url = "/eventos";

export { $$Eventos as default, $$file as file, $$url as url };
