import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ScriptonyLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  href?: string;
  className?: string;
}

/**
 * Scriptony Logo Component
 * Displays the Scriptony logo with optional text and configurable size
 */
export function ScriptonyLogo({
  size = 'md',
  showText = true,
  href,
  className,
}: ScriptonyLogoProps) {
  const sizeConfig = {
    sm: {
      imageSize: 24,
      textClass: 'text-lg font-semibold',
      containerClass: 'gap-2',
    },
    md: {
      imageSize: 32,
      textClass: 'text-xl font-semibold',
      containerClass: 'gap-2',
    },
    lg: {
      imageSize: 48,
      textClass: 'text-2xl font-bold',
      containerClass: 'gap-3',
    },
  };

  const config = sizeConfig[size];

  const logoContent = (
    <div
      className={cn(
        'flex items-center',
        config.containerClass,
        'transition-opacity hover:opacity-80',
        className
      )}
    >
      <Image
        src="/scriptony-logo.png"
        alt="Scriptony Logo"
        width={config.imageSize}
        height={config.imageSize}
        className="h-auto w-auto"
        priority
      />
      {showText && (
        <span className={cn(config.textClass, 'text-foreground')}>
          Scriptony
          <span className="ml-1 text-xs text-muted-foreground font-normal">(Dev)</span>
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}