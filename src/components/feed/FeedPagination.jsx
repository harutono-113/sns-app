export function FeedPagination({ onNext, onPrev }) {
  return (
    <div className="mt-6 flex justify-center gap-3">
      <button
        className="flex h-10 items-center justify-center rounded-full border border-emerald-950/10 bg-white px-4 text-sm font-bold text-emerald-950 shadow-sm transition hover:bg-emerald-950 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-emerald-950"
        disabled={onPrev == null}
        onClick={onPrev}
      >
        前へ
      </button>
      <button
        className="flex h-10 items-center justify-center rounded-full border border-emerald-950/10 bg-white px-4 text-sm font-bold text-emerald-950 shadow-sm transition hover:bg-emerald-950 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-emerald-950"
        disabled={onNext == null}
        onClick={onNext}
      >
        次へ
      </button>
    </div>
  );
}
