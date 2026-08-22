import type { BlogPost } from './data';
import { mono } from '@/commonComponents/fonts';
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import './BlogGrid.css';

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="blog-grid-section">
      {posts.length === 0 ? (
        <p className={`${mono.className} blog-no-results`}>
          No articles match your search.
        </p>
      ) : (
        <div className="blog-grid">
          {posts.map((post, i) => (
            <BlogCard key={i} post={post} />
          ))}
        </div>
      )}

      <Pagination />
    </section>
  );
}