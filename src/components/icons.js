/* Icônes SVG internes : aucune emoji n'est utilisée comme icône de l'interface. */

const paths = {
  arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowLeft: '<path d="M19 12H5m6 6-6-6 6-6"/>',
  bag: '<path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 1.9-1.4L20 8H6"/><circle cx="10" cy="20" r="1"/><circle cx="17" cy="20" r="1"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  chat: '<path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.3 8.3 0 0 1-3.7-.9L4 19l1-3.3A7.3 7.3 0 0 1 4 12a7.5 7.5 0 0 1 8-7.5 7.5 7.5 0 0 1 8 7Z"/><path d="M8.5 12h.01M12 12h.01M15.5 12h.01"/>',
  location: '<path d="M20 10c0 5-8 10-8 10S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  check: '<path d="m5 12 4.2 4.2L19 6.5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  shield: '<path d="M12 3 5 6v5c0 4.5 3 8.6 7 10 4-1.4 7-5.5 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/>'
};

export function icon(name, className = "h-5 w-5") {
  const path = paths[name] || "";
  return `<svg aria-hidden="true" viewBox="0 0 24 24" class="${className} shrink-0 fill-none stroke-current" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
}
