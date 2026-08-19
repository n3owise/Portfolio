import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const playfairFont = fs.readFileSync(path.join(rootDir, '.tmp/fonts/PlayfairDisplay.ttf'));
const interFont = fs.readFileSync(path.join(rootDir, '.tmp/fonts/Inter.ttf'));

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @font-face {
        font-family: 'Playfair Display';
        src: local('Playfair Display');
        font-weight: 400 900;
        font-style: normal;
      }
      @font-face {
        font-family: 'Inter';
        src: local('Inter');
        font-weight: 400 800;
        font-style: normal;
      }
      .font-serif {
        font-family: 'Playfair Display', Georgia, serif;
      }
      .font-sans {
        font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
      }
    </style>
    <!-- Subtle paper grain pattern -->
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1a1a1a" stroke-width="0.5" stroke-opacity="0.04"/>
    </pattern>
  </defs>

  <!-- Background Base -->
  <rect width="1200" height="630" fill="#f4f0e6"/>
  <rect width="1200" height="630" fill="url(#grid)"/>

  <!-- Outer Double Border -->
  <rect x="24" y="24" width="1152" height="582" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <rect x="32" y="32" width="1136" height="566" fill="none" stroke="#1a1a1a" stroke-width="1.2"/>

  <!-- Corner Ornaments -->
  <rect x="24" y="24" width="16" height="16" fill="#1a1a1a"/>
  <rect x="1160" y="24" width="16" height="16" fill="#1a1a1a"/>
  <rect x="24" y="590" width="16" height="16" fill="#1a1a1a"/>
  <rect x="1160" y="590" width="16" height="16" fill="#1a1a1a"/>

  <!-- TOP MASTHEAD BAR -->
  <g class="font-sans" font-size="11" font-weight="700" fill="#1a1a1a" letter-spacing="3">
    <text x="52" y="58" text-anchor="start">THE PORTFOLIO STUDIO</text>
    <text x="600" y="58" text-anchor="middle">★ AMAN VERMA ★</text>
    <text x="1148" y="58" text-anchor="end">AGRA, INDIA • 25 CENTS</text>
  </g>

  <!-- Masthead Top Divider -->
  <line x1="32" y1="72" x2="1168" y2="72" stroke="#1a1a1a" stroke-width="1.5"/>

  <!-- MAIN LOGO / HEADLINE -->
  <text x="600" y="165" text-anchor="middle" class="font-serif" font-size="94" font-weight="900" fill="#1a1a1a" letter-spacing="-1">
    AMAN VERMA
  </text>

  <!-- Masthead Bottom Double Dividers -->
  <line x1="32" y1="192" x2="1168" y2="192" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="32" y1="198" x2="1168" y2="198" stroke="#1a1a1a" stroke-width="4"/>

  <!-- SUB-MASTHEAD BAR -->
  <g class="font-sans" font-size="12" font-weight="800" fill="#1a1a1a" letter-spacing="3">
    <text x="52" y="222" text-anchor="start">UI/UX DESIGNER</text>
    <text x="600" y="222" text-anchor="middle">DESIGN &amp; AI CONTENT CREATOR</text>
    <text x="1148" y="222" text-anchor="end">SELECTED WORKS</text>
  </g>

  <!-- Dividing Line Below Sub-masthead -->
  <line x1="32" y1="236" x2="1168" y2="236" stroke="#1a1a1a" stroke-width="2"/>

  <!-- VERTICAL COLUMN SEPARATOR -->
  <line x1="710" y1="236" x2="710" y2="546" stroke="#1a1a1a" stroke-width="1.5"/>

  <!-- ================= LEFT COLUMN: HERO & EDITORIAL ================= -->
  <!-- Eyebrow -->
  <g class="font-sans">
    <rect x="52" y="258" width="160" height="22" fill="#1a1a1a"/>
    <text x="132" y="273" text-anchor="middle" font-size="10" font-weight="800" fill="#f4f0e6" letter-spacing="2">EDITORIAL FOCUS</text>
  </g>

  <!-- Big Serif Statement -->
  <g class="font-serif" font-weight="900" fill="#1a1a1a">
    <text x="52" y="324" font-size="36" letter-spacing="-0.5">Design clarity.</text>
    <text x="52" y="366" font-size="36" letter-spacing="-0.5">AI speed.</text>
    <text x="52" y="408" font-size="36" letter-spacing="-0.5">Production-ready outcomes.</text>
  </g>

  <!-- Body copy -->
  <g class="font-serif" font-size="16" fill="#333333">
    <text x="52" y="446">I craft interfaces, AI visuals, and polished product stories that help</text>
    <text x="52" y="470">companies launch faster and communicate clearly.</text>
  </g>

  <!-- Skill Badges -->
  <g class="font-sans" font-size="10" font-weight="800" letter-spacing="1.5" fill="#1a1a1a">
    <!-- Badge 1 -->
    <rect x="52" y="495" width="138" height="30" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
    <text x="121" y="514" text-anchor="middle">UI / UX DESIGN</text>

    <!-- Badge 2 -->
    <rect x="202" y="495" width="156" height="30" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
    <text x="280" y="514" text-anchor="middle">AI CONTENT &amp; MEDIA</text>

    <!-- Badge 3 -->
    <rect x="370" y="495" width="144" height="30" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
    <text x="442" y="514" text-anchor="middle">FRONTEND BUILD</text>

    <!-- Badge 4 -->
    <rect x="526" y="495" width="156" height="30" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
    <text x="604" y="514" text-anchor="middle">PRODUCT STORIES</text>
  </g>

  <!-- ================= RIGHT COLUMN: FEATURED HIGHLIGHTS ================= -->
  <!-- Header -->
  <g class="font-sans">
    <text x="734" y="272" font-size="11" font-weight="800" fill="#1a1a1a" letter-spacing="2">FEATURED HIGHLIGHTS</text>
    <text x="1148" y="272" text-anchor="end" font-size="10" font-weight="700" fill="#666666" letter-spacing="1">INDEX 01—03</text>
  </g>
  <line x1="734" y1="282" x2="1148" y2="282" stroke="#1a1a1a" stroke-width="1"/>

  <!-- Project 01 -->
  <g>
    <text x="734" y="318" class="font-serif" font-size="24" font-weight="900" fill="#1a1a1a">01</text>
    <text x="774" y="312" class="font-serif" font-size="18" font-weight="800" fill="#1a1a1a">GSAA Official Website</text>
    <text x="774" y="330" class="font-sans" font-size="11" font-weight="600" fill="#555555" letter-spacing="1">WEB DESIGN / DEVELOPMENT</text>
    <text x="1148" y="316" text-anchor="end" class="font-sans" font-size="10" font-weight="700" fill="#1a1a1a">LIVE SITE ↗</text>
  </g>
  <line x1="734" y1="346" x2="1148" y2="346" stroke="#1a1a1a" stroke-width="0.8" stroke-dasharray="3,3"/>

  <!-- Project 02 -->
  <g>
    <text x="734" y="382" class="font-serif" font-size="24" font-weight="900" fill="#1a1a1a">02</text>
    <text x="774" y="376" class="font-serif" font-size="18" font-weight="800" fill="#1a1a1a">Burn First Aid App</text>
    <text x="774" y="394" class="font-sans" font-size="11" font-weight="600" fill="#555555" letter-spacing="1">MOBILE APP / PLAY STORE</text>
    <text x="1148" y="380" text-anchor="end" class="font-sans" font-size="10" font-weight="700" fill="#1a1a1a">PUBLISHED ↗</text>
  </g>
  <line x1="734" y1="410" x2="1148" y2="410" stroke="#1a1a1a" stroke-width="0.8" stroke-dasharray="3,3"/>

  <!-- Project 03 -->
  <g>
    <text x="734" y="446" class="font-serif" font-size="24" font-weight="900" fill="#1a1a1a">03</text>
    <text x="774" y="440" class="font-serif" font-size="18" font-weight="800" fill="#1a1a1a">Farmest Branding &amp; UI</text>
    <text x="774" y="458" class="font-sans" font-size="11" font-weight="600" fill="#555555" letter-spacing="1">UI/UX &amp; VISUAL IDENTITY</text>
    <text x="1148" y="444" text-anchor="end" class="font-sans" font-size="10" font-weight="700" fill="#1a1a1a">ARCHIVE ↗</text>
  </g>
  <line x1="734" y1="474" x2="1148" y2="474" stroke="#1a1a1a" stroke-width="1"/>

  <!-- Studio Seal / Stamp Box -->
  <rect x="734" y="488" width="414" height="42" fill="#1a1a1a"/>
  <g class="font-sans" font-size="11" font-weight="800" fill="#f4f0e6" letter-spacing="2">
    <text x="750" y="514">★ OFFICIAL PORTFOLIO</text>
    <text x="1132" y="514" text-anchor="end">EXPLORE ONLINE →</text>
  </g>

  <!-- ================= FOOTER ================= -->
  <!-- Footer Double Dividers -->
  <line x1="32" y1="546" x2="1168" y2="546" stroke="#1a1a1a" stroke-width="3"/>
  <line x1="32" y1="552" x2="1168" y2="552" stroke="#1a1a1a" stroke-width="1"/>

  <g class="font-sans" font-weight="800" fill="#1a1a1a">
    <text x="52" y="576" font-size="15" letter-spacing="2">WWW.AMANVERMA.STUDIO</text>
    <text x="600" y="576" text-anchor="middle" font-size="11" letter-spacing="3" fill="#444444">INTERACTION • DESIGN • AI CREATIVE</text>
    <text x="1148" y="576" text-anchor="end" font-size="13" letter-spacing="1">AGRA, INDIA ↗</text>
  </g>
</svg>`;

const resvg = new Resvg(svg, {
  fitTo: {
    mode: 'width',
    value: 1200,
  },
  font: {
    fontBuffers: [playfairFont, interFont],
    defaultFontFamily: 'Inter',
  },
});

const pngData = resvg.render();
const pngBuffer = pngData.asPng();

fs.writeFileSync(path.join(rootDir, 'public/og-image.png'), pngBuffer);
console.log('Successfully generated public/og-image.png (size:', pngBuffer.length, 'bytes)');
