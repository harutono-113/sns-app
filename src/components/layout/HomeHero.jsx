import { HERO_IMAGE } from "../../constants/komorebi";

export function HomeHero({ userName }) {
  return (
    <section
      className="relative mb-8 overflow-hidden rounded-[2rem] bg-emerald-950 bg-cover bg-center p-8 text-white shadow-2xl shadow-emerald-950/15"
      style={{ backgroundImage: `url(${HERO_IMAGE.url})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-950/75 to-emerald-950/15" />
      <div className="relative max-w-2xl">
        <p className="text-sm font-semibold text-emerald-100/80">
          Welcome back, {userName}
        </p>
        <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
          写真と言葉で、暮らしの輪郭を残そう。
        </h2>
        <p className="mt-4 text-sm leading-7 text-emerald-50/75 sm:text-base">
          暮らし・創作・学びの小さな記録を、静かに共有するための場所です。
        </p>
        <p className="mt-8 text-xs text-emerald-50/60">{HERO_IMAGE.credit}</p>
      </div>
    </section>
  );
}
