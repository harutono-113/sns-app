import { useEffect, useState } from "react";
import { postsRepository } from "../repositories/postsRepository";

const POSTS_PER_PAGE = 5;

export function usePostsFeed(currentUser) {
  const [content, setContent] = useState("");
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadInitialPosts() {
      const posts = await postsRepository.findPage(1, POSTS_PER_PAGE);
      setPosts(posts);
    }

    loadInitialPosts();
  }, []);

  const createPost = async () => {
    const post = await postsRepository.create(content, currentUser.id);
    const formattedPost = {
      ...post,
      userId: currentUser.id,
      userName: currentUser.userName,
    };

    setPosts((currentPosts) => [formattedPost, ...currentPosts]);
    setContent("");
  };

  const deletePost = async (postId) => {
    await postsRepository.deleteById(postId);
    setPosts((currentPosts) =>
      currentPosts.filter((post) => post.id !== postId),
    );
  };

  const moveToNext = async () => {
    const nextPage = page + 1;
    const posts = await postsRepository.findPage(nextPage, POSTS_PER_PAGE);

    setPosts(posts);
    setPage(nextPage);
  };

  const moveToPrev = async () => {
    const prevPage = page - 1;
    const posts = await postsRepository.findPage(prevPage, POSTS_PER_PAGE);

    setPosts(posts);
    setPage(prevPage);
  };

  return {
    canMoveToNext: posts.length >= POSTS_PER_PAGE,
    canMoveToPrev: page > 1,
    content,
    createPost,
    deletePost,
    moveToNext,
    moveToPrev,
    posts,
    setContent,
  };
}
