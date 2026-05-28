import { APP_NAME, HERO_IMAGE } from "../../constants/komorebi";

export function AuthHero({ title, description, tags }) {
  return (
    <section
      className="relative min-h-[560px] overflow-hidden rounded-[2.5rem] bg-emerald-950 p-8 text-white shadow-2xl shadow-emerald-950/20 sm:p-10"
      style={{ backgroundImage: `url(${HERO_IMAGE.url})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/95 via-emerald-950/65 to-stone-900/20" />
      <div className="relative flex h-full min-h-[480px] flex-col justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-100/80">
            {APP_NAME}
          </p>
          <h1 className="mt-5 max-w-2xl text-4xl font-black leading-tight sm:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-emerald-50/85">
            {description}
          </p>
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold backdrop-blur"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-5 text-xs text-emerald-50/70">
            {HERO_IMAGE.credit}
          </p>
        </div>
      </div>
    </section>
  );
}
