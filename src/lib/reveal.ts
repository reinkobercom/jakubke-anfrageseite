// Übersetzt die framer-motion-Werte des Originals in HTML-Attribute.
// reveal(): Einblenden beim Scrollen (whileInView, once)
// enter():  Einblenden beim Laden (animate)

type Opts = { y?: number; scale?: number; dur?: number; delay?: number; amount?: number; style?: string };

export function reveal({ y = 20, scale, dur = 0.5, delay = 0, amount = 0.3, style: extra }: Opts = {}) {
  const style = [
    extra ?? '',
    `--reveal-y:${y}px`,
    `--reveal-dur:${dur}s`,
    `--reveal-delay:${Number(delay.toFixed(3))}s`,
    scale !== undefined ? `--reveal-scale:${scale}` : '',
  ]
    .filter(Boolean)
    .join(';');
  return { 'data-reveal': String(amount), style };
}

export function enter({ y = 20, dur = 0.55, delay = 0, style: extra }: Opts = {}) {
  return { 'data-enter': '', style: `${extra ? extra + ';' : ''}--reveal-y:${y}px;--reveal-dur:${dur}s;--reveal-delay:${delay}s` };
}
