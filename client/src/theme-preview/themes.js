// Colour theme candidates for the /theme comparison page.
// Each theme only sets the --t-* inputs from tokens.css; every other colour is derived from them.
const mix = (hex, other, amount) => {
  const parse = value => [1, 3, 5].map(i => parseInt(value.slice(i, i + 2), 16));
  const [a, b] = [parse(hex), parse(other)];
  return '#' + a.map((v, i) => Math.round(v + (b[i] - v) * amount).toString(16).padStart(2, '0')).join('');
};
const theme = (id, name, vibe, c, group = 'Original set', dark = false) => ({
  id, name, vibe, group, dark,
  tokens: {
    ink: c.ink, accent: c.accent, 'accent-text': c.accentText, 'on-accent': c.onAccent, paper: c.paper, tint: c.tint,
    deep: c.deep, alt: c.alt, 'alt-soft': c.altSoft, warm: c.warm, cool: c.cool,
    'art-a': c.artA || mix(c.accent, '#ffffff', .35), 'art-b': c.accent, 'art-c': c.artC || mix(c.accent, '#000000', .22),
  },
});

export const themes = [
  theme('current', 'Sunrise Orange (current)', 'The existing look, for comparison.', { ink: '#18242b', accent: '#f56836', accentText: '#f56836', onAccent: '#18242b', paper: '#fffefa', tint: '#fff2e9', deep: '#18242b', alt: '#183e37', altSoft: '#bed291', warm: '#fac26f', cool: '#d49bda', artA: '#ffb15d', artC: '#d73709' }),
  theme('teal-coral', 'Teal & Coral', 'Fresh, friendly and warm. Deep teal ink with a soft coral spark.', { ink: '#0f2f33', accent: '#ff6f61', accentText: '#e0483a', onAccent: '#0f2f33', paper: '#f7fcfa', tint: '#e2f4ef', deep: '#0f2f33', alt: '#0f5c5c', altSoft: '#a9e0d3', warm: '#ffc7a8', cool: '#8ccfd2' }),
  theme('violet-bloom', 'Violet Bloom', 'Creative-studio energy. Rich violet on a soft lilac white.', { ink: '#1e1540', accent: '#7b5cff', accentText: '#6a47f0', onAccent: '#ffffff', paper: '#faf8ff', tint: '#ece6ff', deep: '#1a1240', alt: '#3a2a82', altSoft: '#d3c6ff', warm: '#ffb8a8', cool: '#8fb5ff' }),
  theme('forest-gold', 'Forest & Gold', 'Calm and premium. Deep green with muted gold on warm ivory.', { ink: '#1b2a22', accent: '#d4a437', accentText: '#a97a12', onAccent: '#1b2a22', paper: '#fbf8ee', tint: '#f5ecd0', deep: '#14241b', alt: '#1f4d38', altSoft: '#cfe4b6', warm: '#f4d58a', cool: '#a9c9b3' }),
  theme('ocean-blue', 'Ocean Blue', 'Clean, trusted and professional. Navy with a bright azure accent.', { ink: '#0b2545', accent: '#2f7bf5', accentText: '#1f64dc', onAccent: '#ffffff', paper: '#f6faff', tint: '#e1eeff', deep: '#0b2545', alt: '#14407a', altSoft: '#b9d9ff', warm: '#ffd68a', cool: '#8ec5ff' }),
  theme('berry-blush', 'Berry & Blush', 'Bold and stylish. Raspberry pink on a blush white with plum depth.', { ink: '#3a1230', accent: '#e0356f', accentText: '#c42a5d', onAccent: '#ffffff', paper: '#fff8fa', tint: '#ffe4ed', deep: '#2d0d26', alt: '#6d1d50', altSoft: '#ffc7dc', warm: '#ffb490', cool: '#cba6ff' }),
  theme('mono-lime', 'Mono & Lime', 'Sharp and modern. Near-black with an electric lime highlight.', { ink: '#121212', accent: '#c8f23a', accentText: '#5d7a00', onAccent: '#121212', paper: '#fafaf6', tint: '#f1f6dc', deep: '#121212', alt: '#1f1f1f', altSoft: '#d8f87a', warm: '#e9e9dd', cool: '#bfc4b4' }),
  theme('sage-terracotta', 'Sage & Terracotta', 'Earthy and handcrafted. Soft sage greens with a clay accent.', { ink: '#2a3a2e', accent: '#c1573b', accentText: '#b34b30', onAccent: '#ffffff', paper: '#faf7f0', tint: '#f4e5da', deep: '#25342a', alt: '#4f7259', altSoft: '#cfe0c6', warm: '#eab383', cool: '#9ebba7' }),
  theme('midnight-cyan', 'Midnight & Cyan', 'Techy and confident. Midnight navy with a vivid cyan glow.', { ink: '#0d1b2a', accent: '#19b8dc', accentText: '#0b87a5', onAccent: '#04141f', paper: '#f3fafc', tint: '#dcf3f9', deep: '#0d1b2a', alt: '#1b3a57', altSoft: '#8fe0f2', warm: '#ffd37a', cool: '#86a8ff' }),
  theme('peach-plum', 'Peach & Plum', 'Soft yet distinctive. Deep plum text with a peachy coral accent.', { ink: '#2e1a47', accent: '#ff7f5c', accentText: '#e0603d', onAccent: '#2e1a47', paper: '#fffaf6', tint: '#ffe8dc', deep: '#2e1a47', alt: '#52307a', altSoft: '#f3c9ff', warm: '#ffc48c', cool: '#b9a3e6' }),
  theme('emerald-fresh', 'Emerald Fresh', 'Growth-minded and clear. Emerald green on a crisp mint white.', { ink: '#0b2e24', accent: '#14b87a', accentText: '#0b8a5a', onAccent: '#052018', paper: '#f5fcf8', tint: '#dcf5e8', deep: '#0b2e24', alt: '#14604a', altSoft: '#b5ecd0', warm: '#ffe08a', cool: '#8fd0e8' }),
  // Professional: restrained, corporate-grade light palettes.
  theme('executive-navy', 'Executive Navy', 'Authoritative and trusted. Deep navy with a brass-gold accent.', { ink: '#14213d', accent: '#c9a227', accentText: '#94760f', onAccent: '#14213d', paper: '#f8f9fb', tint: '#e9edf5', deep: '#14213d', alt: '#22365f', altSoft: '#d6def0', warm: '#e6cf86', cool: '#9db4d8' }, 'Professional'),
  theme('slate-steel', 'Slate & Steel', 'Calm, modern consultancy. Cool slate with a steel-blue accent.', { ink: '#1f2933', accent: '#3e7cb1', accentText: '#2f6a9d', onAccent: '#ffffff', paper: '#f5f7fa', tint: '#e4ebf3', deep: '#1f2933', alt: '#34495e', altSoft: '#cfdbe8', warm: '#e2c9a0', cool: '#9fb7d0' }, 'Professional'),
  theme('ivory-bordeaux', 'Ivory & Bordeaux', 'Refined and established. Warm ivory with a deep wine accent.', { ink: '#2b1d20', accent: '#8c2f39', accentText: '#8c2f39', onAccent: '#ffffff', paper: '#faf7f4', tint: '#f1e4e1', deep: '#2b1d20', alt: '#5a2a33', altSoft: '#e8cfd0', warm: '#d9b38c', cool: '#b9a0a8' }, 'Professional'),
  theme('teal-ledger', 'Teal Ledger', 'Dependable and precise. Deep teal ink with a clear teal accent.', { ink: '#12343b', accent: '#0e8a8a', accentText: '#0b7373', onAccent: '#ffffff', paper: '#f4f8f8', tint: '#dfeeee', deep: '#12343b', alt: '#1d5560', altSoft: '#bfe0e0', warm: '#e6c88e', cool: '#8fb8c4' }, 'Professional'),

  // Dark tone: dark by default (the live site opens in dark mode; the toggle still works).
  theme('graphite-gold', 'Graphite & Gold', 'Premium and understated. Soft graphite with champagne gold.', { ink: '#14171a', accent: '#d9b26a', accentText: '#a8802f', onAccent: '#14171a', paper: '#f7f5f0', tint: '#f1ebdd', deep: '#23272c', alt: '#2c3036', altSoft: '#e6d3a3', warm: '#e8c98c', cool: '#8fa0b3' }, 'Dark tone', true),
  theme('obsidian-emerald', 'Obsidian & Emerald', 'Sleek and confident. Near-black green with a luminous emerald.', { ink: '#0d1a16', accent: '#2fd08a', accentText: '#0b8a5a', onAccent: '#04150e', paper: '#f4faf7', tint: '#dcf3e8', deep: '#14251f', alt: '#17493a', altSoft: '#a9ecce', warm: '#e8e28a', cool: '#7fd0e0' }, 'Dark tone', true),
  theme('midnight-sky', 'Midnight & Sky', 'Corporate-tech night mode. Deep navy with a clear sky blue.', { ink: '#0e1a2e', accent: '#5aa2ff', accentText: '#1f64dc', onAccent: '#06142a', paper: '#f4f8ff', tint: '#e0ecff', deep: '#17243d', alt: '#1d3a66', altSoft: '#b4d3ff', warm: '#ffd98c', cool: '#8aa9ff' }, 'Dark tone', true),
  theme('charcoal-copper', 'Charcoal & Copper', 'Warm and industrial. Charcoal with a burnished copper accent.', { ink: '#1d1917', accent: '#dd8450', accentText: '#b4572a', onAccent: '#1d1210', paper: '#faf6f2', tint: '#f3e4d8', deep: '#2b2522', alt: '#3a2f2a', altSoft: '#f0c9ad', warm: '#f2b98a', cool: '#b6a39a' }, 'Dark tone', true),
  theme('noir-rose', 'Noir & Rose Gold', 'Luxe and elegant. Burgundy-black with a rose-gold glow.', { ink: '#261219', accent: '#e8a598', accentText: '#b4584b', onAccent: '#2a1218', paper: '#fbf6f5', tint: '#f6e2de', deep: '#331a24', alt: '#5a2a3b', altSoft: '#f2cbc4', warm: '#f0be9e', cool: '#c8a4b8' }, 'Dark tone', true),
];

export const groups = ['Original set', 'Professional', 'Dark tone'];

export const cssVars = tokens => Object.fromEntries(Object.entries(tokens).map(([key, value]) => [`--t-${key}`, value]));
export const cssBlock = tokens => `:root {\n${Object.entries(tokens).map(([key, value]) => `  --t-${key}: ${value};`).join('\n')}\n}`;
