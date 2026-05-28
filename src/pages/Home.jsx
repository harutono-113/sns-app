import { useContext } from "react";
import { SessionContext } from "../SessionProvider";
import { Navigate } from "react-router-dom";
import { PostCard } from "../components/feed/PostCard";
import { PostComposer } from "../components/feed/PostComposer";
import { FeedPagination } from "../components/feed/FeedPagination";
import { AppHeader } from "../components/layout/AppHeader";
import { HomeHero } from "../components/layout/HomeHero";
import { ProfileSidebar } from "../components/profile/ProfileSidebar";
import { usePostsFeed } from "../hooks/usePostsFeed";
import { authRepository } from "../repositories/authRepository";

function Home() {
  const { currentUser, setCurrentUser } = useContext(SessionContext);
  const feed = usePostsFeed(currentUser);

  const signout = async () => {
    await authRepository.signout();
    setCurrentUser(null);
  };

  if (currentUser == null) return <Navigate replace to="/signin" />;
  return (
    <div className="min-h-screen bg-[#f8f4ea] text-stone-900">
      <AppHeader onSignout={signout} />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <HomeHero userName={currentUser.userName} />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <PostComposer
              content={feed.content}
              onChange={feed.setContent}
              onSubmit={feed.createPost}
            />
            <div className="mt-5">
              {feed.posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  onDelete={feed.deletePost}
                />
              ))}
            </div>
            <FeedPagination
              onPrev={feed.canMoveToPrev ? feed.moveToPrev : null}
              onNext={feed.canMoveToNext ? feed.moveToNext : null}
            />
          </div>
          <ProfileSidebar />
        </div>
      </main>
    </div>
  );
}

export default Home;
