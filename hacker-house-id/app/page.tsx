import { IdCard } from "@/components/id-card"

function PalmSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 260" className={className} aria-hidden="true">
      <path d="M100 120 C97 170 92 215 84 258" stroke="currentColor" strokeWidth="9" strokeLinecap="round" fill="none" />
      <g fill="currentColor">
        <path d="M100 120 C70 96 26 86 6 96 C40 90 78 100 100 120Z" />
        <path d="M100 120 C130 96 174 86 194 96 C160 90 122 100 100 120Z" />
        <path d="M100 120 C80 90 46 56 24 52 C56 66 86 96 100 120Z" />
        <path d="M100 120 C120 90 154 56 176 52 C144 66 114 96 100 120Z" />
        <path d="M100 120 C98 86 100 46 96 30 C98 60 100 96 100 120Z" />
      </g>
    </svg>
  )
}

export default function Page() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#16302a] p-6">
      {/* layered tropical ambient background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 78% 12%, rgba(242,178,58,0.20) 0%, transparent 42%)," +
            "radial-gradient(120% 90% at 18% 88%, rgba(236,72,153,0.16) 0%, transparent 45%)," +
            "radial-gradient(150% 120% at 50% 50%, rgba(51,170,102,0.10) 0%, transparent 65%)",
        }}
      />

      {/* soft sun disc top-right */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(247,209,84,0.30) 0%, rgba(242,178,58,0.10) 45%, transparent 70%)",
        }}
      />

      {/* corner palm silhouettes */}
      <PalmSilhouette className="pointer-events-none absolute -left-10 -top-8 h-64 w-52 -rotate-12 text-[#0e2a22]" />
      <PalmSilhouette className="pointer-events-none absolute -bottom-10 -right-8 h-72 w-56 rotate-[200deg] text-[#0e2a22]" />

      {/* faint grid / horizon lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f3f0e2 1px, transparent 1px), linear-gradient(to bottom, #f3f0e2 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* content */}
      <div className="relative flex flex-col items-center gap-6">
        <IdCard />
        <p className="font-mono text-[11px] tracking-[0.35em] text-[#f3f0e2]/50">
          {"// HACKER HOUSE GOA · BUILD SESSION 01"}
        </p>
      </div>
    </main>
  )
}
