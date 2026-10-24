export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-ink-950" />
      <div className="ambient-mesh absolute inset-0" />
      <div className="glow-drift absolute -left-40 top-[8%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.16),transparent_68%)]" />
      <div className="absolute -right-32 top-[22%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.12),transparent_70%)]" />
      <div className="absolute bottom-[-12%] left-1/3 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.07),transparent_70%)]" />
      <div className="ambient-grid absolute inset-0 opacity-70" />
      <div className="noise absolute inset-0" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
    </div>
  );
}
