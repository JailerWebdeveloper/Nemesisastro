/* empty css                                 */
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, f as renderSlot, g as renderComponent, h as createTransitionScope, i as renderTransition, j as renderHead } from '../astro_ziWzrQ3n.mjs';
/* empty css                                 */

const $$Astro$a = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  delete Astro2.props.size;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(2, "stroke-width")}${addAttribute(size ?? 24, "width")}${addAttribute(size ?? 24, "height")} stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="none" viewBox="0 0 24 24"${spreadAttributes(Astro2.props)}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "C:/Users/Jailer/Desktop/Nemexis-Astro/node_modules/lucide-astro/dist/.Layout.astro", void 0);
const Layout = $$;

const $$Astro$9 = createAstro();
const $$CalendarDays = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$CalendarDays;
  return renderTemplate`${renderComponent($$result, "Layout", Layout, { ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect> <line x1="16" x2="16" y1="2" y2="6"></line> <line x1="8" x2="8" y1="2" y2="6"></line> <line x1="3" x2="21" y1="10" y2="10"></line> <path d="M8 14h.01"></path> <path d="M12 14h.01"></path> <path d="M16 14h.01"></path> <path d="M8 18h.01"></path> <path d="M12 18h.01"></path> <path d="M16 18h.01"></path> ` })}`;
}, "C:/Users/Jailer/Desktop/Nemexis-Astro/node_modules/lucide-astro/dist/CalendarDays.astro", void 0);
const CalendarDays = $$CalendarDays;

const $$Astro$8 = createAstro();
const $$Gamepad = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Gamepad;
  return renderTemplate`${renderComponent($$result, "Layout", Layout, { ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<line x1="6" x2="10" y1="12" y2="12"></line> <line x1="8" x2="8" y1="10" y2="14"></line> <line x1="15" x2="15.01" y1="13" y2="13"></line> <line x1="18" x2="18.01" y1="11" y2="11"></line> <rect width="20" height="12" x="2" y="6" rx="2"></rect> ` })}`;
}, "C:/Users/Jailer/Desktop/Nemexis-Astro/node_modules/lucide-astro/dist/Gamepad.astro", void 0);
const Gamepad = $$Gamepad;

const $$Astro$7 = createAstro();
const $$Grip = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Grip;
  return renderTemplate`${renderComponent($$result, "Layout", Layout, { ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="12" cy="5" r="1"></circle> <circle cx="19" cy="5" r="1"></circle> <circle cx="5" cy="5" r="1"></circle> <circle cx="12" cy="12" r="1"></circle> <circle cx="19" cy="12" r="1"></circle> <circle cx="5" cy="12" r="1"></circle> <circle cx="12" cy="19" r="1"></circle> <circle cx="19" cy="19" r="1"></circle> <circle cx="5" cy="19" r="1"></circle> ` })}`;
}, "C:/Users/Jailer/Desktop/Nemexis-Astro/node_modules/lucide-astro/dist/Grip.astro", void 0);
const Grip = $$Grip;

const $$Astro$6 = createAstro();
const $$Newspaper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Newspaper;
  return renderTemplate`${renderComponent($$result, "Layout", Layout, { ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path> <path d="M18 14h-8"></path> <path d="M15 18h-5"></path> <path d="M10 6h8v4h-8V6Z"></path> ` })}`;
}, "C:/Users/Jailer/Desktop/Nemexis-Astro/node_modules/lucide-astro/dist/Newspaper.astro", void 0);
const Newspaper = $$Newspaper;

const $$Astro$5 = createAstro();
const $$Sparkles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Sparkles;
  return renderTemplate`${renderComponent($$result, "Layout", Layout, { ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path> <path d="M5 3v4"></path> <path d="M19 17v4"></path> <path d="M3 5h4"></path> <path d="M17 19h4"></path> ` })}`;
}, "C:/Users/Jailer/Desktop/Nemexis-Astro/node_modules/lucide-astro/dist/Sparkles.astro", void 0);
const Sparkles = $$Sparkles;

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate(_a || (_a = __template(["", '<div class="z-40 w-full p-4 my-5 flex justify-between items-center" data-astro-cid-5blmo7yk', '> <div class="btn btn-ghost w-52 md:ml-20 h-full flex justify-center items-center" data-astro-cid-5blmo7yk> <a href="/" data-astro-cid-5blmo7yk><img src="../../public/LOGO-BLANCO-.png" alt="Nemesis logo" class="w-full h-full object-contain" data-astro-cid-5blmo7yk></a> </div> <div class="drawer drawer-end w-40 flex justify-center items-center" data-astro-cid-5blmo7yk> <input id="my-drawer-4" type="checkbox" class="drawer-toggle" data-astro-cid-5blmo7yk> <div class="drawer-content" data-astro-cid-5blmo7yk> <!-- Page content here --> <div class="hover:-translate-y-2 h-10 w-10 group transition-all" data-astro-cid-5blmo7yk> <label for="my-drawer-4" class="drawer-button group-hover:text-purple-600  h-full w-ful" data-astro-cid-5blmo7yk> ', ' </label> </div> </div> <div class="drawer-side overflow-hidden z-40" data-astro-cid-5blmo7yk> <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay" data-astro-cid-5blmo7yk></label> <ul class="menu h-full p-4 w-80 min-h-full  text-white " data-astro-cid-5blmo7yk> <!-- Sidebar content here --> <div class=" rounded-lg border border-purple-600 h-full relative " data-astro-cid-5blmo7yk> <canvas class="z-0 rounded-lg absolute" data-astro-cid-5blmo7yk></canvas> <ul class="flex flex-col gap-4 mt-10  text-lg font-semibold" data-astro-cid-5blmo7yk> <li class="w-4/5 self-center" data-astro-cid-5blmo7yk><a href="/" data-astro-cid-5blmo7yk><img src="../../public/LOGO-BLANCO-.png" class="w-full h-full" data-astro-cid-5blmo7yk></a></li> <li class="group" data-astro-cid-5blmo7yk><a href="/QuienesSomos" data-astro-cid-5blmo7yk>', 'Acerca de Nemesis</a></li> <li class="group" data-astro-cid-5blmo7yk><a href="/eventos" data-astro-cid-5blmo7yk>', 'Eventos</a></li> <li class="group" data-astro-cid-5blmo7yk><a href="/servicios" data-astro-cid-5blmo7yk>', 'Servicios</a></li> <li class="group" data-astro-cid-5blmo7yk><a href="/Rentas " data-astro-cid-5blmo7yk>', `Renta de consolas</a></li> </ul> </div> </ul> </div> </div> </div>  <script>
  let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let HorizontalArray = [];
function Horizontal(y) {
  this.y = y;
  this.dy = 0.5;
  this.opacity = 0;

  this.draw = () => {
    c.beginPath();
    c.lineWidth = 3;
    c.strokeStyle = \`rgba(255, 0, 255, \${this.opacity})\`;
    c.moveTo(0, this.y);
    c.lineTo(canvas.width, this.y);
    c.stroke();
  }

  this.update = () => {
    if(this.y >= canvas.height) {
      HorizontalArray.splice(HorizontalArray.indexOf(this), 1);
    }

    this.opacity += 0.003;

    this.dy += 0.05;
    this.y += this.dy;
    this.draw();
  }
}

let grad = c.createLinearGradient(0,canvas.height,0,0);
grad.addColorStop("0", "rgba(255, 0, 255, 0.5)");
grad.addColorStop("0.55", "rgba(255, 0, 255, 0)");
grad.addColorStop("1.0", "rgba(255, 0, 255, 0)");
let VerticalArray = [];
function Vertical(x) {
  this.x = x;

  this.draw = () => {
    c.beginPath();
    c.lineWidth = 3;
    c.strokeStyle = grad;
    c.moveTo(canvas.width / 2, 200);
    c.lineTo(this.x, canvas.height);
    c.stroke();
  }

  this.update = () => {
    this.draw();
  }
}

let interval = (canvas.width / 10);
let cross = 0 - interval * 8;
for(let i = 0; i < 27; i++) {
  VerticalArray.push(new Vertical(cross));
  cross += interval;
}

setInterval(() => {
  HorizontalArray.push(new Horizontal(canvas.height / 2));
}, 300);

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  for(let i = 0; i < HorizontalArray.length; i++) {
    HorizontalArray[i].update();
  }
  for(let i = 0; i < VerticalArray.length; i++) {
    VerticalArray[i].update();
  }
}

function estilos() {
  canvas.style.width = '100%';
  canvas.style.height = '100%';
}
animate();
estilos();
<\/script>`], ["", '<div class="z-40 w-full p-4 my-5 flex justify-between items-center" data-astro-cid-5blmo7yk', '> <div class="btn btn-ghost w-52 md:ml-20 h-full flex justify-center items-center" data-astro-cid-5blmo7yk> <a href="/" data-astro-cid-5blmo7yk><img src="../../public/LOGO-BLANCO-.png" alt="Nemesis logo" class="w-full h-full object-contain" data-astro-cid-5blmo7yk></a> </div> <div class="drawer drawer-end w-40 flex justify-center items-center" data-astro-cid-5blmo7yk> <input id="my-drawer-4" type="checkbox" class="drawer-toggle" data-astro-cid-5blmo7yk> <div class="drawer-content" data-astro-cid-5blmo7yk> <!-- Page content here --> <div class="hover:-translate-y-2 h-10 w-10 group transition-all" data-astro-cid-5blmo7yk> <label for="my-drawer-4" class="drawer-button group-hover:text-purple-600  h-full w-ful" data-astro-cid-5blmo7yk> ', ' </label> </div> </div> <div class="drawer-side overflow-hidden z-40" data-astro-cid-5blmo7yk> <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay" data-astro-cid-5blmo7yk></label> <ul class="menu h-full p-4 w-80 min-h-full  text-white " data-astro-cid-5blmo7yk> <!-- Sidebar content here --> <div class=" rounded-lg border border-purple-600 h-full relative " data-astro-cid-5blmo7yk> <canvas class="z-0 rounded-lg absolute" data-astro-cid-5blmo7yk></canvas> <ul class="flex flex-col gap-4 mt-10  text-lg font-semibold" data-astro-cid-5blmo7yk> <li class="w-4/5 self-center" data-astro-cid-5blmo7yk><a href="/" data-astro-cid-5blmo7yk><img src="../../public/LOGO-BLANCO-.png" class="w-full h-full" data-astro-cid-5blmo7yk></a></li> <li class="group" data-astro-cid-5blmo7yk><a href="/QuienesSomos" data-astro-cid-5blmo7yk>', 'Acerca de Nemesis</a></li> <li class="group" data-astro-cid-5blmo7yk><a href="/eventos" data-astro-cid-5blmo7yk>', 'Eventos</a></li> <li class="group" data-astro-cid-5blmo7yk><a href="/servicios" data-astro-cid-5blmo7yk>', 'Servicios</a></li> <li class="group" data-astro-cid-5blmo7yk><a href="/Rentas " data-astro-cid-5blmo7yk>', `Renta de consolas</a></li> </ul> </div> </ul> </div> </div> </div>  <script>
  let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let HorizontalArray = [];
function Horizontal(y) {
  this.y = y;
  this.dy = 0.5;
  this.opacity = 0;

  this.draw = () => {
    c.beginPath();
    c.lineWidth = 3;
    c.strokeStyle = \\\`rgba(255, 0, 255, \\\${this.opacity})\\\`;
    c.moveTo(0, this.y);
    c.lineTo(canvas.width, this.y);
    c.stroke();
  }

  this.update = () => {
    if(this.y >= canvas.height) {
      HorizontalArray.splice(HorizontalArray.indexOf(this), 1);
    }

    this.opacity += 0.003;

    this.dy += 0.05;
    this.y += this.dy;
    this.draw();
  }
}

let grad = c.createLinearGradient(0,canvas.height,0,0);
grad.addColorStop("0", "rgba(255, 0, 255, 0.5)");
grad.addColorStop("0.55", "rgba(255, 0, 255, 0)");
grad.addColorStop("1.0", "rgba(255, 0, 255, 0)");
let VerticalArray = [];
function Vertical(x) {
  this.x = x;

  this.draw = () => {
    c.beginPath();
    c.lineWidth = 3;
    c.strokeStyle = grad;
    c.moveTo(canvas.width / 2, 200);
    c.lineTo(this.x, canvas.height);
    c.stroke();
  }

  this.update = () => {
    this.draw();
  }
}

let interval = (canvas.width / 10);
let cross = 0 - interval * 8;
for(let i = 0; i < 27; i++) {
  VerticalArray.push(new Vertical(cross));
  cross += interval;
}

setInterval(() => {
  HorizontalArray.push(new Horizontal(canvas.height / 2));
}, 300);

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  for(let i = 0; i < HorizontalArray.length; i++) {
    HorizontalArray[i].update();
  }
  for(let i = 0; i < VerticalArray.length; i++) {
    VerticalArray[i].update();
  }
}

function estilos() {
  canvas.style.width = '100%';
  canvas.style.height = '100%';
}
animate();
estilos();
<\/script>`])), maybeRenderHead(), addAttribute(createTransitionScope($$result, "qgckj2sd"), "data-astro-transition-persist"), renderComponent($$result, "Grip", Grip, { "class": "w-full h-full", "data-astro-cid-5blmo7yk": true }), renderComponent($$result, "Newspaper", Newspaper, { "class": "group-hover:text-purple-600", "data-astro-cid-5blmo7yk": true }), renderComponent($$result, "CalendarDays", CalendarDays, { "class": "group-hover:text-purple-600", "data-astro-cid-5blmo7yk": true }), renderComponent($$result, "Sparkles", Sparkles, { "class": "group-hover:text-purple-600", "data-astro-cid-5blmo7yk": true }), renderComponent($$result, "Gamepad", Gamepad, { "class": "group-hover:text-purple-600", "data-astro-cid-5blmo7yk": true }));
}, "C:/Users/Jailer/Desktop/Nemexis-Astro/src/components/Navbar.astro", "self");

const $$Astro$3 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Jailer/Desktop/Nemexis-Astro/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"${addAttribute(renderTransition($$result, "smooz4hq", "fade", ""), "data-astro-transition-scope")}> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="cursor-personalizado overflow-x-hidden p-5"> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Jailer/Desktop/Nemexis-Astro/src/layouts/Layout.astro", "self");

const $$Astro$1 = createAstro();
const $$Ubicacion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Ubicacion;
  return renderTemplate`${maybeRenderHead()}<section class="body-font relative"> <div class="container px-5  mx-auto flex sm:flex-nowrap flex-wrap"> <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"> <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe> <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md"> <div class="lg:w-1/2 px-6"> <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
ADDRESS
</h2> <p class="mt-1 text-black">
Photo booth tattooed prism, portland taiyaki hoodie neutra
            typewriter
</p> </div> <div class="lg:w-1/2 px-6 mt-4 lg:mt-0"> <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
EMAIL
</h2> <a class="text-indigo-500 leading-relaxed">Nemesis@gmail.com</a> <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
PHONE
</h2> <p class="leading-relaxed text-black">123-456-7890</p> </div> </div> </div> <div class="lg:w-1/3 md:w-1/2 bg-gray-700 rounded-2xl flex md:flex-col justify-center items-center md:ml-auto w-full md:py-8 mt-8 md:mt-0"> <p class="font-bold text-center text-xl mb-2 md:block hidden">Redes sociales</p> <span class="hidden md:inline-block h-1 w-10 rounded bg-indigo-500 mb-8"></span> <a href="https://www.facebook.com/" class=" md:hover:-translate-x-3  transition-all "> <button class="btn btn-ghost  rounded-full w-20 h-20   flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" style="null" class="icon icons8-Facebook-Filled"> <path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"></path></svg> </button> </a> <a href="https://www.facebook.com/" class="hover:-translate-x-3 transition-all "> <button class="btn btn-ghost  rounded-full w-20 h-20   flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" style="null" class="icon icons8-Facebook-Filled"> <path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"></path></svg> </button> </a> <a href="https://www.facebook.com/" class="hover:-translate-x-3 transition-all "> <button class="btn btn-ghost  rounded-full w-20 h-20   flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" style="null" class="icon icons8-Facebook-Filled"> <path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"></path></svg> </button> </a> </div> </div> </section>`;
}, "C:/Users/Jailer/Desktop/Nemexis-Astro/src/components/shared/Ubicacion.astro", void 0);

const $$Astro = createAstro();
const $$QuienesSomos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$QuienesSomos;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Quienes somos", "data-astro-cid-sxjgjruy": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full h-full text-white flex flex-col justify-center gap-5 items-center break-words p-4 md:p-10" data-astro-cid-sxjgjruy> <h1 class="text-4xl md:text-6xl text-center leading-relaxed antialiased uppercase font-extrabold mt-10" data-astro-cid-sxjgjruy>
Acerca de Nemesis
</h1> <span class="inline-block h-1 w-10 rounded bg-indigo-500 mb-8" data-astro-cid-sxjgjruy></span> <p class="text-xl md:w-4/5 w-full mx-auto md:text-2xl" data-astro-cid-sxjgjruy>
Nemesis Xpert es una empresa dedicada al entretenimiento que ofrece una
      amplia gama de servicios relacionados con el mundo de los deportes
      electrónicos (e-sports) y eventos. Nuestro objetivo es proporcionar
      experiencias emocionantes y memorables para nuestros clientes.
</p> <p class="text-xl md:w-4/5 mx-auto md:text-2xl" data-astro-cid-sxjgjruy>
En términos de torneos y eventos, organizamos competiciones de e-sports en
      diferentes juegos populares, brindando a los jugadores la oportunidad de
      competir entre sí y demostrar sus habilidades. Además, también ofrecemos
      servicios de preparación de e-sports, donde brindamos asesoramiento y
      entrenamiento a jugadores individuales o equipos para mejorar su
      rendimiento en el juego.
</p> <p class="text-xl md:w-4/5 mx-auto md:text-2xl" data-astro-cid-sxjgjruy>
Nuestra empresa también se especializa en la organización de fiestas de
      cumpleaños temáticas de e-sports, donde creamos un ambiente divertido y
      emocionante con juegos, competiciones y actividades relacionadas con los
      videojuegos. Estas fiestas son ideales para los amantes de los juegos y
      ofrecen una experiencia única para celebrar un cumpleaños.
</p> <p class="text-xl md:w-4/5 mx-auto md:text-2xl" data-astro-cid-sxjgjruy>
Además, ofrecemos servicios de activación de marcas y eventos
      empresariales. Esto implica trabajar con marcas y empresas para crear
      eventos personalizados que promuevan su imagen de marca y atraigan a su
      público objetivo. Ya sea a través de torneos, exhibiciones o actividades
      interactivas, nos aseguramos de que las marcas se destaquen y generen un
      impacto positivo en sus clientes y audiencia.
</p> <p class="text-xl md:w-4/5 mx-auto md:text-2xl" data-astro-cid-sxjgjruy>
Finalmente, también proporcionamos servicios empresariales, donde
      ofrecemos soluciones tecnológicas y de entretenimiento para empresas. Esto
      puede incluir la instalación de salas de juegos o centros de e-sports en
      oficinas corporativas, la organización de competiciones internas para
      empleados o la creación de contenido relacionado con los videojuegos para
      promocionar una empresa.
</p> <h1 class="text-4xl md:text-6xl text-center leading-relaxed antialiased uppercase font-extrabold mt-10" data-astro-cid-sxjgjruy>
Ubicacion
</h1> <span class="inline-block h-1 w-10 rounded bg-indigo-500 mb-8" data-astro-cid-sxjgjruy></span> ${renderComponent($$result2, "Ubicacion", $$Ubicacion, { "data-astro-cid-sxjgjruy": true })} </div>  ` })}`;
}, "C:/Users/Jailer/Desktop/Nemexis-Astro/src/pages/QuienesSomos.astro", void 0);

const $$file = "C:/Users/Jailer/Desktop/Nemexis-Astro/src/pages/QuienesSomos.astro";
const $$url = "/QuienesSomos";

const QuienesSomos = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$QuienesSomos,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, QuienesSomos as Q };
