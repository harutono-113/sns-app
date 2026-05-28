export function PostComposer({ content, onChange, onSubmit }) {
  return (
    <div className="rounded-[1.75rem] border border-emerald-950/10 bg-white/85 p-5 shadow-xl shadow-stone-900/5">
      <label className="mb-3 block text-sm font-bold text-emerald-950">
        今日の記録を残す
      </label>
      <textarea
        className="min-h-32 w-full resize-none rounded-2xl border border-stone-200 bg-[#fffdf8] p-4 text-base leading-7 text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-900/10"
        onChange={(event) => onChange(event.target.value)}
        placeholder="散歩で見つけた景色、つくったもの、読んだ本、学んだこと..."
        value={content}
      />
      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-xs text-stone-500">
          ゆっくりで大丈夫。短い一言でも歓迎です。
        </p>
        <button
          className="rounded-full bg-emerald-900 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:bg-emerald-800 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-40"
          disabled={content === ""}
          onClick={onSubmit}
        >
          投稿する
        </button>
      </div>
    </div>
  );
}
