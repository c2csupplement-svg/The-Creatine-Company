import Image from 'next/image';
import { MenuIcon } from '../../../commonComponents/icons';
import './SiteNav.css';

export default function SiteNav({
  className = '',
}: {
  className?: string;
}) {
  return (
    <nav className={`site-nav ${className}`}>
      <Image
        src="/images/real-logo.png"
        alt="The Creatine Company"
        width={125}
        height={99}
      />

      <button
        aria-label="Open menu"
        className="site-nav-menu-button"
      >
        <MenuIcon className="site-nav-menu-icon" />
      </button>
    </nav>
  );
}