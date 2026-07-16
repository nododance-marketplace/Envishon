import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/**
 * ─────────────────────────────────────────────────────────────────────────
 *  VIZUS AI — TEXT TO CAD  ·  /vizus
 * ─────────────────────────────────────────────────────────────────────────
 *  Preview / vision page. Early access late fall 2026.
 *
 *  IMPORTANT — this page is deliberately framed as a PREVIEW, not a shipped
 *  product. Every interface below is a design concept and is labelled as one.
 *  Do not relabel these as live product screenshots or a running beta.
 *
 *  The three panels are a full CAD-application concept UI, built in markup so
 *  the text stays crisp at any resolution (image generators garble dense UI
 *  text). They are also what gets captured for the PNG screenshots.
 *
 *  TO ADD VIDEO CLIPS:
 *    1. Drop 5–8s silent loops into /public/vizus/ (sketch.mp4, image.mp4, morph.mp4)
 *    2. Fill in the `video` field on the matching FEATURES entry.
 *    3. If `video` is empty the animated concept UI renders instead.
 *  ─────────────────────────────────────────────────────────────────────────
 */

export const metadata: Metadata = {
  title: "Vizus AI — Text to CAD | Envishon",
  description:
    "Describe the part. Get a printable model. Vizus AI turns words, images and sketches into print-ready 3D geometry. Preview — early access late fall 2026.",
};

const LAUNCH = "Late Fall 2026";

type Feature = {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  bullets: string[];
  video?: string;
  mockup: "sketch" | "image" | "morph";
  reverse?: boolean;
};

const FEATURES: Feature[] = [
  {
    id: "sketch",
    eyebrow: "Sketch + Say",
    title: "Draw on the model. Tell it what you meant.",
    copy:
      "This is how people actually design — you point at the thing and describe the change. Scribble on the geometry, type what you want, and the model rebuilds. No feature tree to fight, no constraint solver, no twelve-step tutorial. The model you're looking at is the model you're editing.",
    bullets: [
      "Mark up the geometry directly — arrows, circles, cross-outs",
      "Say it in plain language: \"round this edge\", \"thin this wall\"",
      "Every change lands in the history tree — walk it back anytime",
    ],
    video: "/video/vizus-sketch.mp4",
    mockup: "sketch",
  },
  {
    id: "image",
    eyebrow: "Image to Model",
    title: "A photo in. Editable geometry out.",
    copy:
      "Drop in a photo, a screenshot, a napkin sketch — anything that shows the shape you have in mind. Vizus reads the form and rebuilds it as real geometry with real topology, not a frozen scan blob. The reference your client texted you at 11pm becomes the starting point instead of the argument.",
    bullets: [
      "Photos, sketches, screenshots, reference art",
      "Rebuilt as editable mesh with clean topology",
      "Set true dimensions before you commit",
    ],
    video: "/video/vizus-image.mp4",
    mockup: "image",
    reverse: true,
  },
  {
    id: "morph",
    eyebrow: "Text to Geometry",
    title: "Type it. Watch the model change.",
    copy:
      "Describe the object and it appears. Change the sentence and the geometry changes with it. Iterate at the speed you can talk instead of the speed you can model — then export and print. It's the difference between quoting a job next week and quoting it on the call.",
    bullets: [
      "Plain-language prompts, live geometry",
      "Every prompt is a version — branch and compare",
      "Export STL / STEP when it's right",
    ],
    video: "/video/vizus-morph.mp4",
    mockup: "morph",
  },
];

/* ══ CAD APPLICATION CONCEPT UI ═════════════════════════════════════════ */

/** Tool rail icons — simple, generic CAD verbs. */
const TOOL_ICONS = [
  "M3 3h10v10H3z",
  "M8 2l6 12H2z",
  "M8 2a6 6 0 100 12A6 6 0 008 2z",
  "M2 8h12M8 2v12",
  "M3 13L13 3M13 3H8M13 3v5",
  "M2 11l4-4 3 3 5-6",
];

function ToolRail() {
  return (
    <div className="flex w-9 shrink-0 flex-col items-center gap-1 border-r border-base-600/70 bg-base-800 py-2">
      {TOOL_ICONS.map((d, i) => (
        <span
          key={d}
          className={`flex h-6 w-6 items-center justify-center rounded ${
            i === 1 ? "bg-accent/20 ring-1 ring-accent/50" : ""
          }`}
        >
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5">
            <path
              d={d}
              fill="none"
              stroke={i === 1 ? "#C4B5FD" : "#5A5F66"}
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}

function MenuBar() {
  return (
    <div className="flex items-center gap-4 border-b border-base-600/70 bg-base-800/80 px-3 py-1.5">
      {["File", "Edit", "View", "Model", "Help"].map((m) => (
        <span key={m} className="font-mono text-[9px] tracking-wide text-graphite">
          {m}
        </span>
      ))}
      <span className="ml-auto flex items-center gap-2">
        {["Shaded", "Wire", "X-Ray"].map((v, i) => (
          <span
            key={v}
            className={`rounded px-1.5 py-0.5 font-mono text-[8px] tracking-wider ${
              i === 1
                ? "bg-accent/20 text-accent-ember ring-1 ring-accent/40"
                : "text-graphite"
            }`}
          >
            {v}
          </span>
        ))}
      </span>
    </div>
  );
}

/** Feature/history tree — the prompts ARE the feature tree. */
function HistoryTree({
  items,
  activeIndex,
}: {
  items: string[];
  activeIndex: number;
}) {
  return (
    <div className="hidden w-[124px] shrink-0 flex-col border-r border-base-600/70 bg-base-900/70 sm:flex">
      <p className="border-b border-base-600/50 px-2.5 py-1.5 font-mono text-[8px] tracking-widest text-graphite">
        HISTORY
      </p>
      <div className="space-y-0.5 p-1.5">
        {items.map((t, i) => (
          <div
            key={t}
            style={{ animationDelay: `${i * 1.6}s` }}
            className={`animate-vz-step truncate rounded px-1.5 py-1 font-mono text-[8.5px] motion-reduce:animate-none ${
              i === activeIndex
                ? "bg-accent/15 text-accent-ember ring-1 ring-accent/40"
                : "text-graphite"
            }`}
          >
            <span className="mr-1 opacity-60">▸</span>
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Small orientation cube, top-right of the viewport. */
function ViewCube() {
  return (
    <svg viewBox="0 0 40 40" className="absolute right-3 top-3 h-8 w-8" aria-hidden="true">
      <path d="M20 6 L32 13 L20 20 L8 13 Z" fill="rgba(139,92,246,0.35)" stroke="#C4B5FD" strokeWidth="0.8" />
      <path d="M8 13 L20 20 L20 34 L8 27 Z" fill="rgba(124,58,237,0.22)" stroke="#8B5CF6" strokeWidth="0.8" />
      <path d="M32 13 L20 20 L20 34 L32 27 Z" fill="rgba(76,29,149,0.3)" stroke="#8B5CF6" strokeWidth="0.8" />
    </svg>
  );
}

/** Transform gizmo — three axis handles. */
function Gizmo({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <line x1={x} y1={y} x2={x + 46} y2={y + 23} stroke="#F87171" strokeWidth="1.6" />
      <circle cx={x + 46} cy={y + 23} r="2.6" fill="#F87171" />
      <line x1={x} y1={y} x2={x - 46} y2={y + 23} stroke="#4ADE80" strokeWidth="1.6" />
      <circle cx={x - 46} cy={y + 23} r="2.6" fill="#4ADE80" />
      <line x1={x} y1={y} x2={x} y2={y - 42} stroke="#60A5FA" strokeWidth="1.6" />
      <circle cx={x} cy={y - 42} r="2.6" fill="#60A5FA" />
    </g>
  );
}

/**
 * The on-screen model: an isometric slab rendered as a quad WIREFRAME MESH.
 * This is the hero of every panel — geometry on a screen, not a photo of a part.
 */
function MeshModel({
  className = "",
  showGizmo = true,
  showDims = true,
  latticeAnim = true,
}: {
  className?: string;
  showGizmo?: boolean;
  showDims?: boolean;
  latticeAnim?: boolean;
}) {
  // top face corners
  const A = { x: 60, y: 104 };
  const N = 8;
  const abx = 120, aby = -60; // A→B
  const adx = 120, ady = 60;  // A→D
  const P = (u: number, v: number) => ({
    x: A.x + abx * u + adx * v,
    y: A.y + aby * u + ady * v,
  });
  const H = 34; // extrusion depth

  const grid = [];
  for (let i = 0; i <= N; i++) {
    const u = i / N;
    const p0 = P(u, 0), p1 = P(u, 1);
    grid.push(
      <line key={`u${i}`} x1={p0.x} y1={p0.y} x2={p1.x} y2={p1.y} stroke="rgba(196,181,253,0.32)" strokeWidth="0.5" />,
    );
    const q0 = P(0, u), q1 = P(1, u);
    grid.push(
      <line key={`v${i}`} x1={q0.x} y1={q0.y} x2={q1.x} y2={q1.y} stroke="rgba(196,181,253,0.32)" strokeWidth="0.5" />,
    );
  }

  const B = P(1, 0), C = P(1, 1), D = P(0, 1);

  // vertex dots along the silhouette
  const verts = [A, B, C, D].map((p, i) => (
    <rect key={`vt${i}`} x={p.x - 1.8} y={p.y - 1.8} width="3.6" height="3.6" fill="#C4B5FD" />
  ));

  return (
    <svg viewBox="0 0 360 240" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="vz-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.14" />
        </linearGradient>
      </defs>

      {/* extruded side faces */}
      <path d={`M${A.x} ${A.y} L${D.x} ${D.y} L${D.x} ${D.y + H} L${A.x} ${A.y + H} Z`}
        fill="rgba(76,29,149,0.35)" stroke="#8B5CF6" strokeWidth="1" />
      <path d={`M${D.x} ${D.y} L${C.x} ${C.y} L${C.x} ${C.y + H} L${D.x} ${D.y + H} Z`}
        fill="rgba(59,7,100,0.4)" stroke="#8B5CF6" strokeWidth="1" />

      {/* shaded top face */}
      <path d={`M${A.x} ${A.y} L${B.x} ${B.y} L${C.x} ${C.y} L${D.x} ${D.y} Z`}
        fill="url(#vz-top)" stroke="#C4B5FD" strokeWidth="1.3" />

      {/* quad wireframe */}
      <g className={latticeAnim ? "animate-vz-lattice motion-reduce:animate-none motion-reduce:opacity-75" : ""}>
        {grid}
      </g>

      {/* selected face highlight */}
      <path
        d={`M${P(0.375, 0.375).x} ${P(0.375, 0.375).y} L${P(0.5, 0.375).x} ${P(0.5, 0.375).y} L${P(0.5, 0.5).x} ${P(0.5, 0.5).y} L${P(0.375, 0.5).x} ${P(0.375, 0.5).y} Z`}
        fill="rgba(196,181,253,0.5)" stroke="#C4B5FD" strokeWidth="0.8"
      />

      {verts}

      {/* bore holes */}
      <ellipse cx={P(0.25, 0.25).x} cy={P(0.25, 0.25).y} rx="11" ry="6" fill="#0A0B0D" stroke="#C4B5FD" strokeWidth="1" />
      <ellipse cx={P(0.75, 0.75).x} cy={P(0.75, 0.75).y} rx="11" ry="6" fill="#0A0B0D" stroke="#C4B5FD" strokeWidth="1" />

      {showGizmo && <Gizmo x={P(0.5, 0.5).x} y={P(0.5, 0.5).y} />}

      {showDims && (
        <g fontFamily="ui-monospace, monospace">
          {/* width dimension */}
          <line x1={A.x - 6} y1={A.y + H + 12} x2={D.x - 6} y2={D.y + H + 12} stroke="#5A5F66" strokeWidth="0.7" />
          <line x1={A.x - 9} y1={A.y + H + 8} x2={A.x - 3} y2={A.y + H + 16} stroke="#5A5F66" strokeWidth="0.7" />
          <line x1={D.x - 9} y1={D.y + H + 8} x2={D.x - 3} y2={D.y + H + 16} stroke="#5A5F66" strokeWidth="0.7" />
          <text x={(A.x + D.x) / 2 - 20} y={(A.y + D.y) / 2 + H + 26} fill="#8A8F98" fontSize="8">140.0</text>
          {/* height dimension */}
          <line x1={C.x + 12} y1={C.y} x2={C.x + 12} y2={C.y + H} stroke="#5A5F66" strokeWidth="0.7" />
          <text x={C.x + 16} y={C.y + H / 2 + 3} fill="#8A8F98" fontSize="8">18.0</text>
        </g>
      )}
    </svg>
  );
}

function StatusBar({ faces, mode }: { faces: string; mode: string }) {
  return (
    <div className="flex items-center gap-4 border-t border-base-600/70 bg-base-800 px-3 py-1">
      <span className="font-mono text-[8px] text-graphite">
        x <span className="text-steel">42.0</span>&nbsp;&nbsp;y{" "}
        <span className="text-steel">18.5</span>&nbsp;&nbsp;z{" "}
        <span className="text-steel">6.0</span>
      </span>
      <span className="font-mono text-[8px] text-graphite">mm</span>
      <span className="font-mono text-[8px] text-graphite">
        {faces} <span className="opacity-60">faces</span>
      </span>
      <span className="ml-auto font-mono text-[8px] tracking-wider text-accent-ember">
        {mode}
      </span>
    </div>
  );
}

function PromptBar({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2.5 border-t border-base-600/70 bg-base-900 px-3 py-2.5">
      <Image src="/brand/vizus-emblem.png" alt="" width={15} height={15} className="shrink-0" />
      <div className="min-w-0 flex-1">
        <p className="flex items-center font-mono text-[10.5px] text-titanium">
          <span className="animate-vz-type overflow-hidden whitespace-nowrap motion-reduce:!w-full">
            {text}
          </span>
          <span className="ml-0.5 inline-block h-3 w-[5px] shrink-0 animate-vz-caret bg-accent-signal motion-reduce:animate-none" />
        </p>
      </div>
      <span className="shrink-0 rounded border border-accent/40 bg-accent/15 px-2 py-0.5 font-mono text-[8px] tracking-widest text-accent-ember">
        ⏎ RUN
      </span>
    </div>
  );
}

/** Full application shell wrapping every panel. */
function CadShell({
  children,
  history,
  activeIndex,
  prompt,
  faces,
  mode,
  filename,
}: {
  children: React.ReactNode;
  history: string[];
  activeIndex: number;
  prompt: string;
  faces: string;
  mode: string;
  filename: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-base-600/80 bg-base-900 shadow-depth-lg">
      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-base-600/70 bg-base-800 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-base-600" />
        <span className="h-2 w-2 rounded-full bg-base-600" />
        <span className="h-2 w-2 rounded-full bg-base-600" />
        <div className="ml-2 flex items-center gap-1.5">
          <Image src="/brand/vizus-emblem.png" alt="" width={13} height={13} />
          <span className="font-mono text-[9px] tracking-widest text-steel">VIZUS AI</span>
        </div>
        <span className="ml-2 font-mono text-[9px] text-graphite">— {filename}</span>
        <span className="ml-auto rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[8px] tracking-widest text-accent-ember">
          CONCEPT
        </span>
      </div>

      <MenuBar />

      <div className="flex">
        <ToolRail />
        <HistoryTree items={history} activeIndex={activeIndex} />
        <div className="min-w-0 flex-1">{children}</div>
      </div>

      <PromptBar text={prompt} />
      <StatusBar faces={faces} mode={mode} />
    </div>
  );
}

function Viewport({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative h-[248px] bg-base bg-grid-faint [background-size:20px_20px] sm:h-[286px]">
      <div className="pointer-events-none absolute inset-0 bg-violet-mesh" />
      {children}
      <ViewCube />
    </div>
  );
}

/* ── The three panels ──────────────────────────────────────────────────── */

function SketchMockup() {
  return (
    <CadShell
      filename="cold-plate_v4"
      history={["base solid", "shell 2mm", "lattice infill", "◂ sketch edit"]}
      activeIndex={3}
      prompt="widen these channels to 2 mm and round the inlet"
      faces="24,918"
      mode="SKETCH"
    >
      <Viewport>
        <div className="absolute inset-0 animate-vz-hover motion-reduce:animate-none">
          <MeshModel className="absolute left-1/2 top-1/2 w-[92%] -translate-x-1/2 -translate-y-[54%]" />
        </div>
        {/* annotation drawn straight onto the geometry */}
        <svg viewBox="0 0 360 240" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <g className="animate-vz-draw motion-reduce:animate-none" style={{ strokeDasharray: 260 }}>
            <path
              d="M198 84 c22 -12 44 -10 58 4 c13 12 9 29 -8 35 c-20 7 -43 1 -50 -12"
              fill="none" stroke="#C4B5FD" strokeWidth="2.4" strokeLinecap="round" opacity="0.95"
            />
            <path
              d="M262 66 l26 -22 M288 44 l-11 2 M288 44 l2 11"
              fill="none" stroke="#C4B5FD" strokeWidth="1.8" strokeLinecap="round"
            />
          </g>
        </svg>
        <span className="absolute left-3 top-3 rounded border border-accent/40 bg-base-900/90 px-1.5 py-0.5 font-mono text-[8px] tracking-widest text-accent-ember">
          ✎ SKETCH ON MODEL
        </span>
      </Viewport>
    </CadShell>
  );
}

function ImageMockup() {
  return (
    <CadShell
      filename="signet_ring_v2"
      history={["import ref", "surface fit", "solidify", "size 9 band"]}
      activeIndex={1}
      prompt="rebuild as a size 9 band · 2.4 mm thick"
      faces="18,204"
      mode="REBUILDING"
    >
      <div className="flex">
        {/* reference input */}
        <div className="hidden w-[112px] shrink-0 border-r border-base-600/70 bg-base-800/60 p-2 sm:block">
          <p className="mb-1.5 font-mono text-[8px] tracking-widest text-graphite">REFERENCE</p>
          <div className="animate-vz-drop rounded border border-dashed border-accent/40 bg-base-900/70 p-1.5 motion-reduce:animate-none">
            <div className="flex h-[74px] items-center justify-center rounded bg-base-700/70">
              <svg viewBox="0 0 120 120" className="h-[62px] w-[62px]" aria-hidden="true">
                <defs>
                  <linearGradient id="vz-ring" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#C4B5FD" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>
                <ellipse cx="60" cy="66" rx="32" ry="32" fill="none" stroke="url(#vz-ring)" strokeWidth="9" />
                <path d="M46 42 l14 -17 l14 17 l-14 11 Z" fill="url(#vz-ring)" />
              </svg>
            </div>
            <p className="mt-1 truncate font-mono text-[7.5px] text-steel">client-photo.jpg</p>
          </div>
        </div>

        {/* viewport: wireframe resolving into mesh */}
        <div className="min-w-0 flex-1">
          <Viewport>
            <svg
              viewBox="0 0 180 180"
              className="absolute left-1/2 top-1/2 h-[80%] -translate-x-1/2 -translate-y-1/2 animate-vz-wire motion-reduce:animate-none motion-reduce:opacity-20"
              aria-hidden="true"
            >
              <g stroke="rgba(196,181,253,0.55)" strokeWidth="0.6" fill="none">
                {Array.from({ length: 16 }).map((_, i) => (
                  <ellipse key={i} cx="90" cy="100" rx={46} ry={44} transform={`rotate(${i * 11.25} 90 100)`} />
                ))}
                <ellipse cx="90" cy="100" rx="52" ry="49" />
                <ellipse cx="90" cy="100" rx="40" ry="38" />
              </g>
            </svg>
            <svg
              viewBox="0 0 180 180"
              className="absolute left-1/2 top-1/2 h-[80%] -translate-x-1/2 -translate-y-1/2 animate-vz-resolve motion-reduce:animate-none motion-reduce:opacity-100"
              aria-hidden="true"
            >
              <ellipse cx="90" cy="100" rx="46" ry="44" fill="none" stroke="#8B5CF6" strokeWidth="11" opacity="0.75" />
              {/* mesh topology over the solid */}
              <g stroke="rgba(196,181,253,0.5)" strokeWidth="0.45" fill="none">
                {Array.from({ length: 20 }).map((_, i) => (
                  <line
                    key={i}
                    x1={90 + 40 * Math.cos((i * Math.PI) / 10)}
                    y1={100 + 38 * Math.sin((i * Math.PI) / 10)}
                    x2={90 + 52 * Math.cos((i * Math.PI) / 10)}
                    y2={100 + 50 * Math.sin((i * Math.PI) / 10)}
                  />
                ))}
                <ellipse cx="90" cy="100" rx="52" ry="49" />
                <ellipse cx="90" cy="100" rx="40" ry="38" />
              </g>
              <path d="M68 62 l22 -26 l22 26 l-22 17 Z" fill="rgba(124,58,237,0.6)" stroke="#C4B5FD" strokeWidth="1.1" />
            </svg>
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="h-full w-1/3 animate-vz-sweep bg-gradient-to-r from-transparent via-accent-signal/20 to-transparent motion-reduce:hidden" />
            </div>
          </Viewport>
        </div>
      </div>
    </CadShell>
  );
}

function MorphMockup() {
  return (
    <CadShell
      filename="bracket_v7"
      history={["extrude base", "lattice infill", "+30% lighter", "fillet all edges"]}
      activeIndex={3}
      prompt="make it 30% lighter but keep the mounting face"
      faces="41,662"
      mode="SOLID · STL/STEP"
    >
      <Viewport>
        <div className="absolute inset-0 animate-vz-hover motion-reduce:animate-none">
          <MeshModel className="absolute left-1/2 top-1/2 w-[92%] -translate-x-1/2 -translate-y-[54%]" showDims={false} />
        </div>
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="h-full w-1/4 animate-vz-sweep bg-gradient-to-r from-transparent via-accent-signal/15 to-transparent motion-reduce:hidden" />
        </div>
        <span className="absolute left-3 top-3 rounded border border-base-600 bg-base-900/90 px-1.5 py-0.5 font-mono text-[8px] tracking-widest text-steel">
          REV 3 OF 4
        </span>
      </Viewport>
    </CadShell>
  );
}

function Mockup({ kind }: { kind: Feature["mockup"] }) {
  if (kind === "sketch") return <SketchMockup />;
  if (kind === "image") return <ImageMockup />;
  return <MorphMockup />;
}

/* ══ PAGE ═══════════════════════════════════════════════════════════════ */

export default function VizusPage() {
  return (
    <main className="bg-base text-titanium">
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-base-700">
        <div className="pointer-events-none absolute inset-0 bg-violet-mesh" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 text-center sm:py-28">
          <div className="mb-8 flex justify-center">
            <Image
              src="/brand/vizus-emblem.png"
              alt="Vizus"
              width={88}
              height={88}
              priority
              className="drop-shadow-[0_0_28px_rgba(124,58,237,0.45)]"
            />
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 font-mono text-[10px] tracking-[0.25em] text-accent-ember">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-signal" />
            PREVIEW · EARLY ACCESS {LAUNCH.toUpperCase()}
          </span>

          <h1 className="mt-7 font-heading text-4xl leading-[1.05] text-white sm:text-6xl">
            Describe the part.
            <br />
            <span className="bg-gradient-to-r from-accent-ember via-accent-signal to-accent bg-clip-text text-transparent">
              Get something you can print.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-steel sm:text-lg">
            <strong className="text-titanium">Vizus AI</strong> is text-to-CAD for
            people who make things, not people who model things. Type it, sketch
            it, or hand it a photo — and get real, editable geometry back. The
            skill you needed to own a metal printer stops being the reason you
            don&apos;t.
          </p>

          {/* hero screen */}
          <div className="mx-auto mt-14 max-w-3xl text-left">
            <SketchMockup />
            <p className="mt-3 text-center font-mono text-[9px] tracking-widest text-graphite">
              CONCEPT PREVIEW · INTERFACE IN DEVELOPMENT
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@envishon3d.com?subject=Vizus%20AI%20—%20early%20access&body=I'd%20like%20early%20access%20to%20Vizus%20AI.%0A%0AName%3A%0ACompany%3A%0AWhat%20I%20make%3A"
              className="btn-spark px-8 py-4 text-sm"
            >
              Request early access
            </a>
            <Link
              href="/shop"
              className="rounded-full border border-base-600 px-8 py-4 text-sm text-titanium transition-colors hover:border-accent/50 hover:text-white"
            >
              See the printers
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────── */}
      {FEATURES.map((f) => (
        <section key={f.id} id={f.id} className="border-b border-base-700/70 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
            <div className={f.reverse ? "lg:order-2" : ""}>
              {f.video ? (
                <video
                  src={f.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="edge-fade w-full"
                />
              ) : (
                <Mockup kind={f.mockup} />
              )}
              <p className="mt-3 text-center font-mono text-[9px] tracking-widest text-graphite">
                CONCEPT PREVIEW
              </p>
            </div>

            <div className={f.reverse ? "lg:order-1" : ""}>
              <span className="font-mono text-[10px] tracking-[0.25em] text-accent">
                {f.eyebrow.toUpperCase()}
              </span>
              <h2 className="mt-4 font-heading text-3xl leading-tight text-white sm:text-4xl">
                {f.title}
              </h2>
              <p className="mt-5 leading-relaxed text-steel">{f.copy}</p>
              <ul className="mt-7 space-y-3">
                {f.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-titanium">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* ── VISION ───────────────────────────────────────────────────── */}
      <section className="border-b border-base-700/70 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="font-mono text-[10px] tracking-[0.25em] text-accent">THE VISION</span>
          <h2 className="mt-5 font-heading text-3xl leading-tight text-white sm:text-4xl">
            The machine was never the hard part.
          </h2>
          <div className="mt-7 space-y-5 text-left leading-relaxed text-steel">
            <p>
              Metal printers got good years ago. What didn&apos;t change is who
              gets to use them. If you can&apos;t model, you can&apos;t print — so
              the jeweler with twenty years of hand skill hires a CAD guy, waits
              three days, and pays for revisions on a part they could have
              described in one sentence.
            </p>
            <p>
              That gap is the whole reason most shops still send work out. Vizus AI
              exists to close it — so the person who knows what the part should be
              is the person who makes it.
            </p>
            <p className="text-titanium">
              Vizus AI is built to export clean STL and STEP for{" "}
              <strong className="text-white">any 3D printer</strong> — and it&apos;s
              tuned end-to-end for{" "}
              <Link href="/shop" className="text-accent hover:text-accent-signal">
                Envishon machines
              </Link>
              , where the same software runs the print.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-violet-mesh" />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <Image src="/brand/vizus-emblem.png" alt="" width={56} height={56} className="mx-auto mb-7 opacity-90" />
          <h2 className="font-heading text-3xl text-white sm:text-4xl">
            Early access opens {LAUNCH.toLowerCase()}.
          </h2>
          <p className="mt-5 leading-relaxed text-steel">
            We&apos;re letting a small group in first — shops actually making parts,
            who&apos;ll tell us where it breaks. Tell us what you make and we&apos;ll
            reach out when your seat is ready.
          </p>
          <div className="mt-9">
            <a
              href="mailto:hello@envishon3d.com?subject=Vizus%20AI%20—%20early%20access&body=I'd%20like%20early%20access%20to%20Vizus%20AI.%0A%0AName%3A%0ACompany%3A%0AWhat%20I%20make%3A"
              className="btn-spark px-8 py-4 text-sm"
            >
              Request early access
            </a>
          </div>
          <p className="mt-6 font-mono text-[10px] tracking-wide text-graphite">
            Interfaces shown are design concepts, not a shipping product. Vizus AI
            is in development — features and timing may change.
          </p>
        </div>
      </section>
    </main>
  );
}
