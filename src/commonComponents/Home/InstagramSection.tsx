'use client';

import Image from 'next/image';
import { anton } from '../fonts';
import './InstagramSection.css';

const INSTAGRAM_POSTS = [
  '1.png',
  '2.png',
  '3.png',
  '4.png',
];

const INSTAGRAM_URL =
  'https://www.instagram.com/the.creatine.company/';

export default function InstagramSection() {
  return (
    <section className="instagram-section">
      <div className="instagram-container">

        {/* HEADING */}
        <div className="instagram-heading">
          <span className={`${anton.className} instagram-heading-follow`}>
            Follow
          </span>

          <span
            className={`${anton.className} instagram-heading-company`}
          >
            The Creatine Company
          </span>
        </div>

        {/* 4 CARDS */}
        <div className="instagram-cards">
          {INSTAGRAM_POSTS.map((file, index) => (
            <a
              key={file}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-card"
            >
              {/* IMAGE */}
              <div className="instagram-image-wrapper">
                <Image
                  src={`/images/instagram/${file}`}
                  alt="The Creatine Company Instagram post"
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, (max-width: 1023px) 25vw, 260px"
                  className="instagram-image"
                />
              </div>

              {/* BOTTOM INFO */}
              <div
                className={`${anton.className} instagram-card-info`}
              >
                <span>thecreatine.co</span>

                <span>View Profile</span>
              </div>
            </a>
          ))}
        </div>

        {/* BUTTON */}
        <div className="instagram-button-wrapper">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${anton.className} instagram-button`}
          >
            Explore Our Instagram
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}