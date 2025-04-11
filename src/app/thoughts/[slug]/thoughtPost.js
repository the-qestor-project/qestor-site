'use client';

import { motion } from 'framer-motion';

export default function ThoughtPost({ post }) {
  return (
    <main className="min-h-screen p-6 max-w-3xl mx-auto">
      <motion.article
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1 className="text-3xl font-serif mb-2">{post.title}</h1>
        <p className="text-sm text-neutral-500 mb-6">{post.date}</p>
        <div
          className="prose prose-neutral"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </motion.article>
    </main>
  );
}
