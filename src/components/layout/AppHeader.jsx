import { APP_NAME } from "../../constants/komorebi";

export function AppHeader({ onSignout }) {
  return (
    <header className="border-b border-emerald-950/10 bg-[#f8f4ea]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-800">
            quiet social space
          </p>
          <h1 className="mt-1 text-3xl font-black tracking-tight text-emerald-950">
            {APP_NAME}
          </h1>
        </div>
        <button
          className="rounded-full border border-emerald-900/15 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-950 hover:text-white"
          onClick={onSignout}
        >
          ログアウト
        </button>
      </div>
    </header>
  );
}
