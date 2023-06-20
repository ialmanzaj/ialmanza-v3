import CategoryFilter from '@/components/filter/category-filter';
import SearchBar from '@/components/filter/search-bar';
import PostsGrid from '@/components/posts/posts-grid';
import { getAllPostsFromNotion } from '@/services/posts';
import { toUniqueArray } from '@/utils/to-unique-array';

export const metadata = {
  title: 'Blog',
  description: '',
};

export default async function BlogPage() {
  const allPosts = await getAllPostsFromNotion();
  const posts = allPosts.filter((post) => post.published);

  return (
    <>
      <section className="mb-16 mt-0 space-y-8 md:mt-20"></section>
      <PostsGrid allPosts={posts} />
    </>
  );
}
