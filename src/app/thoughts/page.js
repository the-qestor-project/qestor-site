import { getAllPosts } from '@/lib/getPosts';
import Link from 'next/link';

export default async function ThoughtsPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-serif mb-8 text-center">Thoughts</h1>
      {posts.map((post) => (
        <article key={post.slug} className="mb-12">
          <Link href={`/thoughts/${post.slug}`}>
            <h2 className="text-2xl font-semibold mb-1 hover:underline">{post.title}</h2>
          </Link>
          <p className="text-sm text-neutral-500">{post.date}</p>
        </article>
      ))}
    </main>
  );
}

