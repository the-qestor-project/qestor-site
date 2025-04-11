import { getPostBySlug, getAllPosts } from '@/lib/getPosts';
import ThoughtPost from './ThoughPost';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function ThoughtPage(props) {
  // Await the incoming props to ensure dynamic route parameters are fully resolved
  const { params } = await props;
  const post = await getPostBySlug(params.slug);

  return <ThoughtPost post={post} />;
}

