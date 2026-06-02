'use client';

import { useState } from 'react';
import { LOGO_PATH, SITE_NAME } from '@/lib/site-brand';

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
};

/** Replace /public/logo.svg or customize this component with your brand logo. */
export default function Logo({ className = 'h-10 w-auto object-contain', width, height }: LogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <LogoPlaceholder className={className} />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={LOGO_PATH}
      alt={SITE_NAME}
      className={className}
      width={width}
      height={height}
      onError={() => setFailed(true)}
    />
  );
}

export function LogoPlaceholder({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded bg-slate-200 text-slate-500 font-mono text-xs ${className}`}
      style={{ minWidth: 120, minHeight: 40 }}
      aria-label={`${SITE_NAME} logo placeholder`}
    >
      YOUR_LOGO_HERE
    </div>
  );
}
