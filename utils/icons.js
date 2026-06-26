const paths = {
  shield: '<path d="M12 3l7 3v5c0 4.6-2.9 8.2-7 10-4.1-1.8-7-5.4-7-10V6l7-3z"/><path d="M8.8 12l2.1 2.1 4.4-4.6"/>',
  chat: '<path d="M5 6.5A7 7 0 0 1 12 4h1a6 6 0 0 1 6 6v.3a6 6 0 0 1-6 6H9.2L5 19v-4.2a6.4 6.4 0 0 1 0-8.3z"/>',
  star: '<path d="M12 3.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8L12 3.5z"/>',
  book: '<path d="M5 5.2A3.2 3.2 0 0 1 8.2 4H20v15H8.2A3.2 3.2 0 0 0 5 20.2V5.2z"/><path d="M5 5.2A3.2 3.2 0 0 0 3 8.2V20a3.3 3.3 0 0 1 2-1.2"/><path d="M9 8h7"/>',
  bag: '<path d="M6 8h12l1 12H5L6 8z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
  gift: '<path d="M4 10h16v10H4z"/><path d="M3 6h18v4H3z"/><path d="M12 6v14"/><path d="M12 6c-2-3-5-2.2-5 0 0 1.6 2.2 2 5 0z"/><path d="M12 6c2-3 5-2.2 5 0 0 1.6-2.2 2-5 0z"/>',
  bell: '<path d="M18 9a6 6 0 0 0-12 0c0 7-2 7-2 9h16c0-2-2-2-2-9z"/><path d="M10 21h4"/>',
  tag: '<path d="M20 13l-7 7-9-9V4h7l9 9z"/><path d="M8 8h.1"/>',
  user: '<path d="M20 21a8 8 0 0 0-16 0"/><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>',
  shoe: '<path d="M4 14c3.3 2.2 7.5 2.7 13.7 2.1 1.4-.1 2.4.7 2.7 2H8c-2.5 0-4-.8-4-2.3V14z"/><path d="M4 14l2.1-5.3h4.2c.7 2.4 2.5 4 5.5 4.8"/><path d="M8.5 10.4l2.5 2.1"/><path d="M11 10.4l2.1 1.7"/>',
  sparkle: '<path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3z"/><path d="M5 16l.8 2.2L8 19l-2.2.8L5 22l-.8-2.2L2 19l2.2-.8L5 16z"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 10v6"/><path d="M12 7h.1"/>',
  copy: '<path d="M8 8h11v11H8z"/><path d="M5 16H4V5h11v1"/>',
  nfc: '<rect x="5" y="4" width="14" height="16" rx="3"/><path d="M9 8c2 2.5 2 5.5 0 8"/><path d="M12 7c2.8 3.2 2.8 6.8 0 10"/><path d="M15 6c3.5 4 3.5 8 0 12"/>',
  "chevron-right": '<path d="M9 18l6-6-6-6"/>',
  "chevron-left": '<path d="M15 18l-6-6 6-6"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
  home: '<path d="M4 11l8-7 8 7"/><path d="M6 10.2V20h12v-9.8"/><path d="M10 20v-6h4v6"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2.2 5-4.8 2 2.2-5 4.8-2z"/>',
  heart: '<path d="M20.3 6.7a5 5 0 0 0-7.1 0L12 7.9l-1.2-1.2a5 5 0 1 0-7.1 7.1L12 22l8.3-8.2a5 5 0 0 0 0-7.1z"/>',
  settings: '<path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z"/><path d="M19.4 15a1.8 1.8 0 0 0 .4 2l.1.1-2 3.4-.2-.1a1.8 1.8 0 0 0-2.1.3 1.8 1.8 0 0 0-.5 1.9H9a1.8 1.8 0 0 0-.5-1.9 1.8 1.8 0 0 0-2.1-.3l-.2.1-2-3.4.1-.1a1.8 1.8 0 0 0 .4-2 1.8 1.8 0 0 0-1.6-1.1V10a1.8 1.8 0 0 0 1.6-1.1 1.8 1.8 0 0 0-.4-2l-.1-.1 2-3.4.2.1a1.8 1.8 0 0 0 2.1-.3A1.8 1.8 0 0 0 9 1.3h6a1.8 1.8 0 0 0 .5 1.9 1.8 1.8 0 0 0 2.1.3l.2-.1 2 3.4-.1.1a1.8 1.8 0 0 0-.4 2A1.8 1.8 0 0 0 21 10v3.9a1.8 1.8 0 0 0-1.6 1.1z"/>',
  "medal-bronze": '<circle cx="12" cy="14" r="5"/><path d="M8 3l4 6 4-6"/><path d="M6 3h12"/><path d="M10 14h4"/>',
  "medal-silver": '<circle cx="12" cy="14" r="5"/><path d="M8 3l4 6 4-6"/><path d="M6 3h12"/><path d="M10 13h3a1.5 1.5 0 0 1 0 3h-3"/>',
  "medal-gold": '<circle cx="12" cy="14" r="5"/><path d="M8 3l4 6 4-6"/><path d="M6 3h12"/><path d="M10 12h4v5h-4z"/>',
  calendar: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4"/><path d="M16 3v4"/><path d="M4 10h16"/>',
  "map-pin": '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/>',
  wechat: '<path d="M9.2 6.2A6 6 0 0 0 4 12c0 1.5.7 2.8 1.7 3.8L5 18l2.5-1.1c.6.2 1.2.3 1.8.3 3 0 5.4-2.1 5.4-4.8s-2.4-4.8-5.5-4.8z"/><path d="M14.6 10.2c3 0 5.4 2 5.4 4.5 0 1.3-.6 2.4-1.6 3.2l.6 2-2.2-1c-.7.2-1.4.3-2.2.3-2.7 0-5-1.7-5.4-3.9"/><path d="M7.8 11h.1"/><path d="M11 11h.1"/>',
  video: '<rect x="4" y="6" width="11" height="12" rx="2"/><path d="M15 10l5-3v10l-5-3z"/>',
  bookmark: '<path d="M6 4h12v17l-6-4-6 4V4z"/>',
  wrench: '<path d="M21 6.5a5.5 5.5 0 0 1-7.2 7.2L7 20.5 3.5 17l6.8-6.8A5.5 5.5 0 0 1 17.5 3L14 6.5 17.5 10 21 6.5z"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.7 3.7 5.7 3.7 9S14.5 18.3 12 21c-2.5-2.7-3.7-5.7-3.7-9S9.5 5.7 12 3z"/>',
  shirt: '<path d="M8 4l4 2 4-2 4 3-3 4v9H7v-9L4 7l4-3z"/><path d="M10 5.2V9h4V5.2"/>'
};

function getIconData(name, color) {
  const body = paths[name] || paths.info;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

module.exports = { getIconData };
