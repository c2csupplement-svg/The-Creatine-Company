import Image from 'next/image';
import { anton, mono } from '@/commonComponents/fonts';
import './FeaturedPost.css';

export default function FeaturedPost() {
  return (
    <section className="featured-post-section">
      <div className="featured-post-grid">
        <div className="featured-post-image">
          <Image
            src="/images/man-bottle.png"
            alt="Man training with a shaker bottle"
            fill
            className="featured-post-image-content"
          />
        </div>

        <div>
        <h2 className="featured-post-title">
  POWER YOUR TRAINING, BUILD
  <br />
  YOUR STRENGTH
</h2>

          <p className='featured-post-description'>
            Creatine is one of the most researched and effective supplements
            for improving strength, power, and high-intensity training
            performance. By supporting your muscles&apos; ability to produce
            quick energy, creatine can help you train harder, recover better,
            and make consistent progress over time.
          </p>

          <button
            className={`${anton.className} featured-post-button`}
          >
            READ MORE <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}