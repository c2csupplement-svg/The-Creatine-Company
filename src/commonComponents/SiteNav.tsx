import Image from 'next/image';
import NavigationMenu from './NavigationMenu';

type SiteNavProps = {
  className?: string;
};

export default function SiteNav({
  className = '',
}: SiteNavProps) {
  return (
    <nav
      className={`relative z-20 flex items-center justify-between text-white ${className}`}
    >
      <Image
        src="/images/real-logo.png"
        alt="The Creatine Company"
        width={125}
        height={99}
        priority
        className="h-auto w-[90px] sm:w-[110px] lg:w-[125px]"
      />

      <NavigationMenu backgroundImage="/images/hero-home.png" />
    </nav>
  );
}