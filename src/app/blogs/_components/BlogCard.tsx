import type { BlogPost } from './data';
import Image from 'next/image';
import { anton, mono } from '@/commonComponents/fonts';
import './BlogCard.css';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article>
      <div className="blog-card-image">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="blog-card-image-content"
        />
      </div>

      <span className={`${anton.className} blog-card-category`}>
        <span className="blog-card-category-dot" />
        {post.category}
      </span>

      <h3 className={`${anton.className} blog-card-title`}>
        {post.title}
      </h3>

      <p className={`${mono.className} blog-card-description`}>
        {post.description}
      </p>
    </article>
  );
}