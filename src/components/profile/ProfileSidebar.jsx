import { useContext } from "react";
import { SessionContext } from "../../SessionProvider";

export function ProfileSidebar() {
  const { currentUser } = useContext(SessionContext);

  return (
    <aside className="h-fit rounded-[1.75rem] border border-emerald-950/10 bg-white/80 p-5 shadow-xl shadow-stone-900/5 lg:sticky lg:top-6">
      <div className="rounded-[1.25rem] bg-[#eef5dd] p-5">
        <div className="flex size-14 items-center justify-center rounded-full bg-emerald-950 text-xl font-black text-white">
          {currentUser.userName?.slice(0, 1)}
        </div>
        <h2 className="mt-4 text-xl font-black text-emerald-950">
          {currentUser.userName}
        </h2>
        <p className="mt-1 break-all text-sm text-stone-600">
          {currentUser.email}
        </p>
      </div>
      <div className="mt-5 rounded-2xl border border-dashed border-emerald-900/20 p-4">
        <p className="text-sm font-bold text-emerald-950">プロフィール</p>
        <p className="mt-2 text-sm leading-6 text-stone-600">
          写真に添えるような短い言葉で、暮らし・創作・学びの記録を少しずつ重ねていきます。
        </p>
      </div>
    </aside>
  );
}
