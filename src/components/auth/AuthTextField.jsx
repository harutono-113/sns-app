export function AuthTextField({ id, label, onChange, placeholder, type }) {
  return (
    <div>
      <label className="block text-sm font-bold text-emerald-950" htmlFor={id}>
        {label}
      </label>
      <div className="mt-1">
        <input
          className="block w-full rounded-2xl border border-stone-200 bg-[#fffdf8] px-4 py-3 text-sm shadow-sm outline-none transition placeholder:text-stone-400 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-900/10"
          id={id}
          name={id}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          required
          type={type}
        />
      </div>
    </div>
  );
}
