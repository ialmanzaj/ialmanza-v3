'use client';

import Image from 'next/image';
import Link from 'next/link';

import CategoryList from '@/components/category-list';
import { Post } from '@/types/post';

export default function PostCard({
  post: { slug, title, date, cover, categories },
}: {
  post: Post;
}) {
  return (
    <div className="flex items-center	">
      <p className="font-light text-sm">{date}</p>
      <Link
        href={`/blog/${slug}`}
        className="decoration-3 underline underline-offset-8"
      >
        <article className="flex w-full flex-col duration-300  ">
          <div className="flex flex-col p-4">
            <h3 className="text-2xl">{title}</h3>
            <CategoryList categories={categories} />
          </div>
        </article>
      </Link>
    </div>
  );
}
