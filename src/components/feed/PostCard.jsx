import { useContext } from "react";
import { SessionContext } from "../../SessionProvider";

export function PostCard({ onDelete, post }) {
  const { currentUser } = useContext(SessionContext);

  return (
    <article className="mt-4 rounded-[1.5rem] border border-emerald-950/10 bg-white/90 p-5 shadow-lg shadow-stone-900/5">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-black text-emerald-950">
          {post.userName?.slice(0, 1)}
        </div>
        <div>
          <h3 className="font-bold text-emerald-950">{post.userName}</h3>
          <p className="text-xs text-stone-500">Komorebi に投稿</p>
        </div>
      </div>
      <p className="whitespace-pre-wrap leading-7 text-stone-700">
        {post.content}
      </p>
      {currentUser.id === post.userId && (
        <button
          className="mt-4 cursor-pointer rounded-full border border-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 focus:outline-none"
          onClick={() => onDelete(post.id)}
        >
          削除
        </button>
      )}
    </article>
  );
}
