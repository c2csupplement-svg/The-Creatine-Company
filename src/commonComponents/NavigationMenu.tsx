'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { anton } from './fonts';

const NAV_ITEMS = [
  {
    label: 'HOME',
    href: '/',
  },
  {
    label: 'ABOUT US',
    href: '/about',
  },
  {
    label: 'CONTACT',
    href: '/contactUs',
  },
  {
    label: 'BLOG',
    href: '/blogs',
  },
];

type NavigationMenuProps = {
  backgroundImage?: string | null;
};

export default function NavigationMenu({
  backgroundImage = null,
}: NavigationMenuProps) {
  const [open, setOpen] = useState(false);

  // Prevent background page scrolling when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close menu when pressing Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    if (open) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  return (
    <>
      {/* =========================================
          HAMBURGER BUTTON
      ========================================= */}

      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="
          fixed
          left-1/2
          top-2
          z-[10000]
          flex
          h-8
          w-10
          -translate-x-1/2
          items-center
          justify-center

          sm:top-6
          sm:h-10
          sm:w-12
        "
      >
        <span className="relative block h-[18px] w-[28px] sm:w-[40px]">
          {/* Top line */}
          <span
            className={`
              absolute
              left-0
              h-[2px]
              w-full
              bg-white
              transition-all
              duration-300
              ease-in-out
              ${
                open
                  ? 'top-[8px] rotate-45'
                  : 'top-[4px]'
              }
            `}
          />

          {/* Middle line */}
          <span
            className={`
              absolute
              left-0
              top-[8px]
              h-[2px]
              w-full
              bg-white
              transition-all
              duration-300
              ease-in-out
              ${
                open
                  ? 'opacity-0'
                  : 'opacity-100'
              }
            `}
          />

          {/* Bottom line */}
          <span
            className={`
              absolute
              left-0
              h-[2px]
              w-full
              bg-white
              transition-all
              duration-300
              ease-in-out
              ${
                open
                  ? 'top-[8px] -rotate-45'
                  : 'top-[12px]'
              }
            `}
          />
        </span>
      </button>

      {/* =========================================
          FULL SCREEN MENU
      ========================================= */}

      <div
        aria-hidden={!open}
        className={`
          fixed
          inset-0
          z-[9990]
          overflow-hidden
          transition-all
          duration-500
          ease-in-out

          ${
            open
              ? 'pointer-events-auto visible opacity-100'
              : 'pointer-events-none invisible opacity-0'
          }
        `}
      >
        {/* =========================================
            BACKGROUND IMAGE
        ========================================= */}

        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        )}

        {/* Brown overlay */}
        <div className="absolute inset-0 bg-[#502300]/90" />

        {/* Extra darkness */}
        <div className="absolute inset-0 bg-black/10" />

        {/* =========================================
            NAVIGATION LINKS
        ========================================= */}

        <div className="relative z-10 flex h-full w-full items-center justify-center px-5">
          <nav
  aria-label="Main navigation"
  className="
    flex
    flex-col
    items-center
    gap-2
    text-center
    sm:gap-3
  "
>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                  group
                  relative
                  py-1
                  text-[#FDF1DA]
                  transition-colors
                  duration-300
                  hover:text-[#BD966E]
                "
              >
                <span
                  className={`
                    ${anton.className}
                    block
                    text-[clamp(3rem,10vw,8rem)]
                    uppercase
                    leading-[0.82]
                    tracking-tight
                  `}
                >
                  {item.label}
                </span>

                {/* Underline */}
                <span
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    bg-[#FDF1DA]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </Link>
            ))}
          </nav>
        </div>

        {/* =========================================
            CLOSE BUTTON
        ========================================= */}

        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setOpen(false)}
          className={`
            ${anton.className}
            absolute
            bottom-6
            left-1/2
            z-20
            -translate-x-1/2
            text-sm
            uppercase
            tracking-wide
            text-[#FDF1DA]
            transition-opacity
            duration-300
            hover:opacity-60
          `}
        >
          CLOSE
        </button>
      </div>
    </>
  );
}