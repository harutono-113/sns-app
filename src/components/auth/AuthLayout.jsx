import { AuthHero } from "./AuthHero";

export function AuthLayout({ hero, children }) {
  return (
    <div className="min-h-screen bg-[#f8f4ea] px-4 py-10 text-stone-900 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-10 lg:grid-cols-[1fr_440px]">
        <AuthHero {...hero} />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
