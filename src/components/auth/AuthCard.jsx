export function AuthCard({ title, description, children }) {
  return (
    <div className="rounded-[1.75rem] border border-emerald-950/10 bg-white/90 px-5 py-8 shadow-xl shadow-stone-900/5 sm:px-8">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-emerald-950">{title}</h2>
        <p className="mt-2 text-sm text-stone-600">{description}</p>
      </div>
      {children}
    </div>
  );
}
