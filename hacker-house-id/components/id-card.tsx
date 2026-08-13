/* ---------- Decorative sticker illustrations ---------- */

function BeachPalmSticker() {
  return (
    <svg viewBox="0 0 100 130" className="h-full w-full drop-shadow-sm" aria-hidden="true">
      <defs>
        <linearGradient id="frondG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4cc17e" />
          <stop offset="1" stopColor="#1f8f52" />
        </linearGradient>
        <linearGradient id="trunkG" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#a06e38" />
          <stop offset="1" stopColor="#7a4d22" />
        </linearGradient>
      </defs>
      {/* curved coconut-palm trunk */}
      <path
        d="M42 122 C36 92 34 60 54 34"
        fill="none"
        stroke="url(#trunkG)"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* trunk rings */}
      <g stroke="#5f3a18" strokeWidth="1.6" strokeLinecap="round" opacity="0.5">
        <path d="M40 110 l7 -2" />
        <path d="M38 96 l7 -2" />
        <path d="M38 80 l7 -3" />
        <path d="M40 64 l7 -4" />
        <path d="M45 50 l7 -5" />
      </g>
      {/* coconuts at the crown */}
      <g fill="#5a3720" stroke="#0e3b2a" strokeWidth="1.6">
        <circle cx="52" cy="34" r="4.5" />
        <circle cx="60" cy="36" r="4.5" />
        <circle cx="56" cy="41" r="4.5" />
      </g>
      {/* fronds spraying from the crown */}
      <g stroke="#0e3b2a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="url(#frondG)">
        <path d="M56 30 C40 18 18 16 6 22 C22 20 42 24 56 30Z" />
        <path d="M56 30 C44 12 24 2 10 2 C26 6 44 18 56 30Z" />
        <path d="M56 30 C58 10 54 -2 46 -6 C50 8 54 18 56 30Z" />
        <path d="M56 30 C70 14 88 8 98 12 C82 12 66 20 56 30Z" />
        <path d="M56 30 C74 22 92 24 100 32 C84 28 68 28 56 30Z" />
      </g>
      {/* frond midrib highlights */}
      <g stroke="#bff0cf" strokeWidth="1" strokeLinecap="round" opacity="0.75" fill="none">
        <path d="M55 29 C40 20 22 19 11 22" />
        <path d="M55 29 C69 20 85 20 95 26" />
        <path d="M55 28 C51 14 49 4 47 -3" />
      </g>
      {/* sand mound */}
      <path d="M20 122 C30 114 58 114 70 122Z" fill="#e7d6a8" stroke="#0e3b2a" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  )
}

function PalmFrondSticker() {
  return (
    <svg viewBox="0 0 120 160" className="h-full w-full" aria-hidden="true">
      <g stroke="#0e3b2a" strokeWidth="2.5" strokeLinejoin="round" fill="#2f9e5b">
        {/* central stem */}
        <path d="M96 6 C70 40 40 90 18 150" fill="none" strokeWidth="5" stroke="#1f7a45" />
        {/* leaflets left */}
        <path d="M84 22 C64 20 50 30 44 46 C62 40 78 34 84 22Z" />
        <path d="M74 44 C54 44 40 54 34 70 C52 62 68 58 74 44Z" />
        <path d="M62 70 C42 72 30 82 25 98 C42 90 57 84 62 70Z" />
        <path d="M50 98 C32 102 22 112 18 128 C33 120 46 112 50 98Z" />
        {/* leaflets right */}
        <path d="M88 20 C104 26 112 40 112 56 C98 44 90 34 88 20Z" />
        <path d="M78 44 C94 50 100 64 100 80 C86 68 80 58 78 44Z" />
        <path d="M66 72 C82 78 88 92 87 108 C74 96 68 86 66 72Z" />
      </g>
    </svg>
  )
}

function SmallPalmTreeSticker() {
  return (
    <svg viewBox="0 0 90 120" className="h-full w-full" aria-hidden="true">
      <g stroke="#0e3b2a" strokeWidth="3.5" strokeLinecap="round" fill="#33aa66">
        <path d="M45 50 C34 34 12 26 4 30 C20 30 36 40 45 50Z" />
        <path d="M45 50 C55 33 78 24 88 28 C72 29 55 39 45 50Z" />
        <path d="M45 50 C40 30 26 12 16 12 C30 18 40 34 45 50Z" />
        <path d="M45 50 C50 30 66 14 78 16 C64 20 50 36 45 50Z" />
      </g>
      <path d="M45 50 C45 72 44 96 43 116" stroke="#8a5a2b" strokeWidth="7" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function CoconutSticker() {
  return (
    <svg viewBox="0 0 76 76" className="h-full w-full drop-shadow-sm" aria-hidden="true">
      <defs>
        <radialGradient id="shellG" cx="38%" cy="32%" r="70%">
          <stop offset="0" stopColor="#8a5a34" />
          <stop offset="1" stopColor="#5a3720" />
        </radialGradient>
      </defs>
      {/* white die-cut outline */}
      <circle cx="38" cy="38" r="33" fill="#fff" />
      {/* brown shell */}
      <circle cx="38" cy="38" r="29" fill="url(#shellG)" stroke="#0e3b2a" strokeWidth="2.5" />
      {/* inner flesh (cut-open coconut) */}
      <circle cx="38" cy="38" r="17" fill="#f6f1e5" stroke="#0e3b2a" strokeWidth="2" />
      <circle cx="38" cy="38" r="11" fill="#e7dcc4" />
      {/* coconut water shine */}
      <ellipse cx="33" cy="33" rx="4" ry="2.6" fill="#fff" opacity="0.8" />
      {/* pink paper straw */}
      <path d="M40 26 L58 6" stroke="#ec4899" strokeWidth="4" strokeLinecap="round" />
      <path d="M40 26 L58 6" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2 4" />
      {/* three coir marks */}
      <circle cx="38" cy="15" r="2.2" fill="#2f1c10" />
      <circle cx="20" cy="28" r="2.2" fill="#2f1c10" />
      <circle cx="56" cy="28" r="2.2" fill="#2f1c10" />
    </svg>
  )
}

function ScooterSticker() {
  return (
    <svg viewBox="0 0 110 84" className="h-full w-full drop-shadow-sm" aria-hidden="true">
      <defs>
        <linearGradient id="vespaG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f65fae" />
          <stop offset="1" stopColor="#d81b7f" />
        </linearGradient>
      </defs>
      {/* wheels */}
      <g stroke="#0e3b2a" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round">
        <circle cx="28" cy="64" r="14" fill="#2a2a2a" />
        <circle cx="86" cy="64" r="14" fill="#2a2a2a" />
        <circle cx="28" cy="64" r="5" fill="#f6f1e5" />
        <circle cx="86" cy="64" r="5" fill="#f6f1e5" />
      </g>
      {/* body */}
      <g stroke="#0e3b2a" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round">
        {/* rear cowl / seat */}
        <path d="M40 64 C40 40 52 32 70 34 C86 36 90 52 86 64 Z" fill="url(#vespaG)" />
        {/* front leg shield */}
        <path d="M28 64 C22 46 26 30 40 28 L46 28 C42 40 42 52 40 64 Z" fill="url(#vespaG)" />
        {/* seat */}
        <path d="M52 34 C60 30 74 30 80 34" fill="none" stroke="#0e3b2a" strokeWidth="6" />
        {/* handlebar */}
        <path d="M40 28 L42 14" strokeWidth="4" />
        <path d="M35 12 L50 12" strokeWidth="4" />
        {/* headlight */}
        <circle cx="34" cy="30" r="3.4" fill="#f7d154" stroke="#0e3b2a" strokeWidth="2" />
      </g>
      {/* body shine */}
      <path d="M56 40 C64 37 74 37 80 41" stroke="#fff" strokeWidth="2" fill="none" opacity="0.7" strokeLinecap="round" />
    </svg>
  )
}

function SunsetSticker() {
  return (
    <svg viewBox="0 0 80 80" className="h-full w-full drop-shadow-sm" aria-hidden="true">
      <defs>
        <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffca6b" />
          <stop offset="0.55" stopColor="#f88b52" />
          <stop offset="1" stopColor="#ec5f8a" />
        </linearGradient>
        <linearGradient id="seaG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2aa5c4" />
          <stop offset="1" stopColor="#166b86" />
        </linearGradient>
        <clipPath id="ss">
          <circle cx="40" cy="40" r="33" />
        </clipPath>
      </defs>
      <g clipPath="url(#ss)">
        <rect x="7" y="7" width="66" height="41" fill="url(#skyG)" />
        <rect x="7" y="48" width="66" height="27" fill="url(#seaG)" />
        {/* sun rays */}
        <g stroke="#ffe6a8" strokeWidth="2" opacity="0.55" strokeLinecap="round">
          <path d="M40 44 L40 12" />
          <path d="M40 44 L20 20" />
          <path d="M40 44 L60 20" />
          <path d="M40 44 L14 34" />
          <path d="M40 44 L66 34" />
        </g>
        <circle cx="40" cy="46" r="15" fill="#fff2c4" />
        <circle cx="40" cy="46" r="12" fill="#ffd45e" />
        {/* horizon shimmer */}
        <path d="M9 54 H71 M9 61 H71 M9 68 H71" stroke="#ffe08a" strokeWidth="2" opacity="0.75" />
        {/* palm silhouette */}
        <path d="M20 48 C19 36 18 26 17 20" stroke="#1a2a20" strokeWidth="2.5" fill="none" />
        <g fill="#1a2a20">
          <path d="M17 20 C10 18 5 22 3 28 C9 24 14 22 17 20Z" />
          <path d="M17 20 C24 18 30 21 33 27 C26 23 20 22 17 20Z" />
          <path d="M17 20 C15 14 11 10 6 9 C12 12 15 16 17 20Z" />
        </g>
      </g>
      <circle cx="40" cy="40" r="33" fill="none" stroke="#fff" strokeWidth="5" />
      <circle cx="40" cy="40" r="33" fill="none" stroke="#0e3b2a" strokeWidth="1.5" strokeOpacity="0.3" />
    </svg>
  )
}

function SignpostSticker() {
  return (
    <svg viewBox="0 0 90 112" className="h-full w-full drop-shadow-sm" aria-hidden="true">
      {/* post with wood grain */}
      <path d="M45 28 L45 110" stroke="#9a6631" strokeWidth="7" strokeLinecap="round" />
      <path d="M45 34 L45 106" stroke="#7a4d22" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <g stroke="#0e3b2a" strokeWidth="2.5" strokeLinejoin="round">
        <path d="M45 32 L82 32 L88 43 L82 54 L45 54Z" fill="#ec4899" />
        <path d="M45 60 L8 60 L2 71 L8 82 L45 82Z" fill="#33aa66" />
        <path d="M45 88 L78 88 L84 99 L78 110 L45 110Z" fill="#f4a259" />
      </g>
      {/* sign text lines */}
      <g stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.85">
        <path d="M52 43 L76 43" />
        <path d="M14 71 L38 71" />
        <path d="M52 99 L72 99" />
      </g>
      {/* nail dots */}
      <g fill="#0e3b2a" opacity="0.5">
        <circle cx="49" cy="43" r="1.4" />
        <circle cx="41" cy="71" r="1.4" />
        <circle cx="49" cy="99" r="1.4" />
      </g>
    </svg>
  )
}

function WaveDoodle({ color = "#2a7de1" }: { color?: string }) {
  return (
    <svg viewBox="0 0 60 22" className="h-full w-full" aria-hidden="true">
      <path
        d="M2 11 C8 3 14 3 20 11 C26 19 32 19 38 11 C44 3 50 3 56 11"
        stroke={color}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M2 18 C8 10 14 10 20 18"
        stroke={color}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  )
}

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 1 L14 10 L23 12 L14 14 L12 23 L10 14 L1 12 L10 10Z" fill="#e2c044" />
    </svg>
  )
}

function SunSticker({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <g stroke="#0e3b2a" strokeWidth="2.5" strokeLinecap="round">
        <g stroke="#e2b23a">
          <path d="M24 3 L24 9 M24 39 L24 45 M3 24 L9 24 M39 24 L45 24 M9 9 L13 13 M35 35 L39 39 M39 9 L35 13 M13 35 L9 39" />
        </g>
        <circle cx="24" cy="24" r="11" fill="#f7d154" />
      </g>
      <g stroke="#0e3b2a" strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M20 23 a1 1 0 0 0 0 -1 M28 23 a1 1 0 0 0 0 -1" strokeWidth="3" />
        <path d="M19 28 C22 31 26 31 29 28" />
      </g>
    </svg>
  )
}

function StarfishSticker({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M24 4 C26 16 30 18 42 20 C31 25 30 30 33 43 C25 35 23 35 15 43 C18 30 17 25 6 20 C18 18 22 16 24 4Z"
        fill="#f4845f"
        stroke="#0e3b2a"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <g fill="#fff" opacity="0.8">
        <circle cx="24" cy="20" r="1.6" />
        <circle cx="20" cy="27" r="1.4" />
        <circle cx="28" cy="27" r="1.4" />
        <circle cx="24" cy="32" r="1.4" />
      </g>
    </svg>
  )
}

function CocktailSticker({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <g stroke="#0e3b2a" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M8 10 L40 10 L24 28 Z" fill="#f7a8c4" />
        <path d="M24 28 L24 40" />
        <path d="M16 40 L32 40" />
        <path d="M30 4 L34 12" stroke="#e2b23a" />
      </g>
      <circle cx="30" cy="4" r="3" fill="#ec4899" stroke="#0e3b2a" strokeWidth="2" />
      <circle cx="20" cy="16" r="2" fill="#e2b23a" />
    </svg>
  )
}

function ArrowDoodle({ color = "#ec4899" }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 20" className="h-full w-full" aria-hidden="true">
      <path d="M2 10 L44 10 M36 3 L46 10 L36 17" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Barcode() {
  // deterministic bar pattern
  const widths = [3, 1, 2, 1, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 1, 3, 1, 2, 1, 1, 3, 2, 1, 2, 1, 3, 1, 1, 2, 3, 1, 2, 1, 1, 3, 1, 2, 2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 1, 3, 1, 2, 1, 2, 3, 1, 1, 2, 1, 3, 1, 2, 1]
  return (
    <div className="flex h-14 items-stretch gap-[2px]">
      {widths.map((w, i) => (
        <div
          key={i}
          className="h-full bg-[#1a1a1a]"
          style={{ width: `${w * 2}px`, opacity: i % 7 === 0 ? 0.85 : 1 }}
        />
      ))}
    </div>
  )
}

function CornerMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="6" fill="none" stroke="#1e3a2f" strokeWidth="1.5" />
      <path d="M12 0 L12 24 M0 12 L24 12" stroke="#1e3a2f" strokeWidth="1.5" />
    </svg>
  )
}

/* ---------- Field cell ---------- */
function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-4 py-2">
      <p className="font-mono text-[10px] tracking-wider text-[#5a6b5f]">{label}</p>
      <p className="font-mono text-base font-bold tracking-wide text-[#14231b]">{value}</p>
    </div>
  )
}

/* ---------- Main card ---------- */
export function IdCard() {
  return (
    <div className="relative w-full max-w-[420px] overflow-hidden rounded-[28px] bg-[#f3f0e2] shadow-2xl">
      {/* corner registration marks */}
      <CornerMark className="absolute left-3 top-3 h-4 w-4" />
      <CornerMark className="absolute right-3 top-3 h-4 w-4" />
      <CornerMark className="absolute bottom-3 left-3 h-4 w-4" />
      <CornerMark className="absolute bottom-3 right-3 h-4 w-4" />

      {/* dashed edges */}
      <div className="pointer-events-none absolute inset-y-10 left-[6px] w-[3px] [background:repeating-linear-gradient(to_bottom,#c9c4b0_0_5px,transparent_5px_11px)]" />
      <div className="pointer-events-none absolute inset-y-10 right-[6px] w-[3px] [background:repeating-linear-gradient(to_bottom,#c9c4b0_0_5px,transparent_5px_11px)]" />

      <div className="px-7 pb-6 pt-9">
        {/* ---------- Header ---------- */}
        <div className="relative overflow-hidden rounded-2xl bg-[#0f3b2b] px-5 pb-14 pt-5">
          {/* warm sun glow */}
          <div
            className="pointer-events-none absolute -right-10 -top-12 h-44 w-44 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(242,178,58,0.45) 0%, rgba(236,72,153,0.18) 45%, transparent 70%)",
            }}
          />
          {/* faint palm silhouette in header */}
          <div className="pointer-events-none absolute -left-6 bottom-1 h-24 w-24 opacity-[0.12]">
            <PalmFrondSticker />
          </div>
          {/* fine top light streak (laminate) */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#f3f0e2]/25" />

          <h1 className="relative font-display text-[42px] leading-[0.86] tracking-tight text-[#f3f0e2]">
            HACKER HOUSE
          </h1>
          <div className="relative mt-1 flex items-end gap-2">
            <span className="font-devanagari text-[38px] font-bold leading-none text-[#ec4899]">गोवा</span>
            <span className="font-display text-[38px] leading-none text-[#e2b23a]">2026</span>
          </div>
          <div className="relative mt-3 inline-block rounded-full border border-[#e2b23a] bg-[#e2b23a]/10 px-3 py-[3px]">
            <span className="font-mono text-[9px] tracking-[0.15em] text-[#e2b23a]">
              BUILDER ID / BUILDER PASS
            </span>
          </div>

          {/* small deco in header */}
          <div className="absolute right-4 top-6 h-4 w-4">
            <Sparkle className="h-full w-full" />
          </div>
        </div>

        {/* ---------- Photo + stickers ---------- */}
        <div className="relative -mt-9 mb-2 flex justify-center">
          {/* LEFT cluster — beach palm up top, coconut + code tag anchored low */}
          <div className="absolute left-0 top-1 h-20 w-16 rotate-[-6deg]">
            <BeachPalmSticker />
          </div>
          <div className="absolute left-1 top-[92px] h-4 w-11">
            <WaveDoodle color="#2a7de1" />
          </div>
          <div className="absolute left-0 top-[118px] h-10 w-10 rotate-[8deg] drop-shadow">
            <CoconutSticker />
          </div>
          <div className="absolute left-2 top-[168px] h-8 w-8 rotate-[-10deg] drop-shadow">
            <StarfishSticker className="h-full w-full" />
          </div>
          <div className="absolute left-1 bottom-0 font-mono text-base font-bold text-[#0f3b2b]">
            {"[</>"}
          </div>

          {/* RIGHT cluster — sun + sunset up top, signpost mid, arrow low */}
          <div className="absolute right-0 top-1 h-9 w-9 rotate-[-8deg] drop-shadow">
            <SunSticker className="h-full w-full" />
          </div>
          <div className="absolute right-1 top-[52px] h-11 w-11 rotate-[10deg] drop-shadow">
            <SunsetSticker />
          </div>
          <div className="absolute right-0 top-[108px] h-16 w-14 rotate-[4deg]">
            <SignpostSticker />
          </div>
          <div className="absolute right-1 top-[184px] h-4 w-11">
            <ArrowDoodle color="#ec4899" />
          </div>
          <div className="absolute right-3 top-[210px] h-4 w-4">
            <Sparkle className="h-full w-full" />
          </div>

          {/* polaroid photo */}
          <div className="relative z-10 rotate-[-1.5deg] bg-white p-2 pb-6 shadow-lg">
            <div className="relative h-56 w-44 border-[5px] border-[#e2b23a]">
              <div
                className="absolute inset-0 border-[3px] border-[#0f3b2b] bg-no-repeat"
                style={{
                  backgroundImage: "url(/builder-photo.jpg)",
                  backgroundSize: "440%",
                  backgroundPosition: "50% 30%",
                }}
                role="img"
                aria-label="Builder portrait of Vishwas H V"
              />
            </div>
            {/* scooter sticker overlapping photo */}
            <div className="absolute -bottom-3 -right-4 z-20 h-12 w-14 rotate-[-6deg] drop-shadow-md">
              <ScooterSticker />
            </div>
          </div>
        </div>

        {/* ---------- Name block ---------- */}
        <div className="relative mt-2 text-center">
          {/* large palm frond on the lower-left */}
          <div className="absolute -left-5 top-1 h-24 w-20 rotate-[-8deg]">
            <PalmFrondSticker />
          </div>
          {/* small orange waves near the title */}
          <div className="absolute -left-3 top-[74px] h-4 w-12">
            <WaveDoodle color="#e07a52" />
          </div>
          {/* terminal snippet */}
          <div className="absolute -right-3 top-0 hidden text-right sm:block">
            <p className="font-mono text-[8px] leading-tight text-[#3a4a3f] bg-[#e7e3d2] px-1">git push</p>
            <p className="font-mono text-[8px] leading-tight text-[#3a4a3f] bg-[#e7e3d2] px-1">npm run ship</p>
            <p className="font-mono text-[8px] leading-tight text-[#3a4a3f]">{">"}</p>
            <p className="font-mono text-[8px] leading-tight text-[#3a4a3f] bg-[#e7e3d2] px-1">localhost:3000</p>
            <p className="font-mono text-[8px] leading-tight text-[#0f3b2b] bg-[#e2b23a] px-1">sudo build</p>
          </div>

          <h2 className="font-mono text-2xl font-bold tracking-wide text-[#14231b]">
            [VISHWAS H V]
          </h2>
          <p className="mt-1 font-mono text-[10px] tracking-wider text-[#5a6b5f]">[BUILDER TITLE]</p>
          <p className="font-mono text-xl font-bold tracking-wide text-[#14231b]">TERMINAL WIZARD</p>
          <p className="font-mono text-sm tracking-wide text-[#3a4a3f]">FULL STACK DEVELOPER</p>

          {/* tech-stack pills */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
            {["React", "Node.js", "TypeScript", "Postgres"].map((t, i) => (
              <span
                key={t}
                className={`rounded-full border px-2 py-[2px] font-mono text-[9px] font-bold tracking-wide ${
                  i % 2 === 0
                    ? "border-[#0f3b2b] bg-[#0f3b2b]/5 text-[#0f3b2b]"
                    : "border-[#ec4899] bg-[#ec4899]/10 text-[#c02a72]"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ---------- Details table ---------- */}
        <div className="mt-4 grid grid-cols-2 border-t border-[#c3bda8]">
          <div className="border-r border-[#c3bda8]">
            <Field label="BUILDER ID" value="HH-GOA-7757" />
          </div>
          <Field label="STACK" value="FULL STACK" />
          <div className="border-t border-r border-[#c3bda8]">
            <Field label="LOCATION" value="GOA, INDIA" />
          </div>
          <div className="border-t border-[#c3bda8]">
            <Field label="STATUS" value="BUILDER" />
          </div>
        </div>

        {/* ---------- Barcode ---------- */}
        <div className="relative mt-5 flex flex-col items-center">
          {/* verified builder rubber stamp */}
          <div className="absolute -top-5 right-0 z-20 rotate-[-14deg]">
            <div className="rounded-md border-2 border-[#c02a72] bg-[#f3f0e2]/85 px-2 py-[3px] shadow-sm backdrop-blur-[1px]">
              <p className="font-mono text-[9px] font-bold tracking-[0.12em] text-[#c02a72]">
                ✓ VERIFIED
              </p>
              <p className="text-center font-mono text-[7px] tracking-[0.1em] text-[#c02a72]/80">
                BUILDER
              </p>
            </div>
          </div>
          {/* cocktail doodle */}
          <div className="absolute -left-1 -top-2 h-7 w-7 rotate-[-10deg]">
            <CocktailSticker className="h-full w-full" />
          </div>
          <Barcode />
          <p className="mt-1 font-mono text-[11px] tracking-[0.3em] text-[#3a4a3f]">HHGOA-7757</p>
        </div>

        {/* ---------- Footer ---------- */}
        <div className="mt-4 flex items-center justify-between border-t border-[#c3bda8] pt-3">
          <div>
            <p className="font-mono text-[10px] font-bold leading-tight text-[#14231b]">GOA / INDIA</p>
            <p className="font-mono text-[10px] leading-tight text-[#5a6b5f]">OCT 2026</p>
          </div>
          <div className="rounded-full border border-[#14231b] px-3 py-1">
            <p className="font-mono text-[10px] font-bold tracking-wide text-[#14231b]">STUDIO · 2:47 PM</p>
          </div>
          <div className="text-right">
            <p className="font-mono text-[10px] font-bold leading-tight text-[#14231b]">BUILD SESSION 01</p>
            <p className="font-mono text-[10px] leading-tight text-[#5a6b5f]">TERMINAL ONLINE</p>
          </div>
        </div>
      </div>

      {/* ---------- Vertical side text ---------- */}
      <div className="absolute bottom-24 left-[10px] [writing-mode:vertical-rl] rotate-180">
        <p className="font-mono text-[9px] tracking-[0.2em] text-[#5a6b5f]">BUILD → SHIP → REPEAT</p>
      </div>
      <div className="absolute bottom-24 right-[10px] [writing-mode:vertical-rl]">
        <p className="font-mono text-[9px] font-bold tracking-[0.2em] text-[#5a6b5f]">#FrameInGoa</p>
      </div>

      {/* ---------- Finish overlays ---------- */}
      {/* subtle paper grain */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[28px] opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(#000 0.5px, transparent 0.6px), radial-gradient(#000 0.5px, transparent 0.6px)",
          backgroundSize: "4px 4px, 4px 4px",
          backgroundPosition: "0 0, 2px 2px",
        }}
      />
      {/* holographic laminate sheen */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[28px] opacity-40 mix-blend-screen"
        style={{
          background:
            "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.35) 44%, rgba(120,200,255,0.12) 50%, rgba(255,200,120,0.18) 56%, transparent 70%)",
        }}
      />
      {/* thin inner gold frame */}
      <div className="pointer-events-none absolute inset-[10px] rounded-[22px] border border-[#e2b23a]/25" />
    </div>
  )
}
