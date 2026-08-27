import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  compact?: boolean;
};

function LogoImage({ compact = false }: { compact?: boolean }) {
  return (
    <Image
      src="/logo-horizontal.png"
      alt="China Trip Tools"
      width={1200}
      height={300}
      className={compact ? "h-auto w-40 object-contain" : "h-auto w-48 object-contain sm:w-56"}
      priority
    />
  );
}

export function BrandLogo({ href, compact = false }: BrandLogoProps) {
  const content = <LogoImage compact={compact} />;

  if (!href) {
    return <div className="inline-flex items-center">{content}</div>;
  }

  return (
    <Link href={href} className="inline-flex items-center" aria-label="China Trip Tools home">
      {content}
    </Link>
  );
}
