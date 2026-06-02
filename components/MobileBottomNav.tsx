'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const NAV_ITEMS = [
  { href: '/', label: 'Home', iconActive: 'ri-home-5-fill', iconInactive: 'ri-home-5-line' },
  { href: '/shop', label: 'Shop', iconActive: 'ri-store-3-fill', iconInactive: 'ri-store-3-line' },
  {
    href: '/cart',
    label: 'Cart',
    iconActive: 'ri-shopping-cart-fill',
    iconInactive: 'ri-shopping-cart-line',
    badgeKey: 'cart' as const,
  },
  {
    href: '/wishlist',
    label: 'Wishlist',
    iconActive: 'ri-heart-3-fill',
    iconInactive: 'ri-heart-3-line',
    badgeKey: 'wishlist' as const,
  },
  { href: '/account', label: 'Account', iconActive: 'ri-user-3-fill', iconInactive: 'ri-user-3-line' },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const [isStandalone, setIsStandalone] = useState(false);
  const [mounted, setMounted] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  useEffect(() => {
    setMounted(true);
    const standalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;
    setIsStandalone(standalone);
  }, []);

  const nav = (
    <nav
      className="lg:hidden mobile-bottom-nav-fixed"
      aria-label="Mobile navigation"
    >
      <div className="mobile-bottom-nav-glass border-t border-brand-rose/15">
        <div
          className={`grid grid-cols-5 pt-1.5 px-0.5 ${
            isStandalone ? 'pb-[max(0.35rem,env(safe-area-inset-bottom))]' : 'pb-1.5'
          }`}
        >
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            const badge =
              item.badgeKey === 'cart' ? cartCount : item.badgeKey === 'wishlist' ? wishlistCount : 0;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center py-2 min-h-[56px] relative transition-colors active:opacity-80 ${
                  active ? 'text-brand-plum' : 'text-brand-plum/45'
                }`}
                aria-label={item.label}
                aria-current={active ? 'page' : undefined}
              >
                {active && (
                  <span
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-[3px] rounded-full bg-brand-plum"
                    aria-hidden
                  />
                )}

                <div className="relative flex items-center justify-center w-9 h-9 mt-1">
                  <i
                    className={`${active ? item.iconActive : item.iconInactive} text-[23px] leading-none`}
                  />
                  {badge > 0 && (
                    <span className="absolute -top-0.5 -right-2 min-w-[15px] h-[15px] bg-brand-plum text-brand-cream text-[8px] font-bold rounded-full flex items-center justify-center px-0.5">
                      {badge > 99 ? '99+' : badge}
                    </span>
                  )}
                </div>

                <span
                  className={`text-[10px] font-medium mt-0.5 tracking-wide ${
                    active ? 'text-brand-plum' : 'text-brand-plum/50'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );

  if (!mounted) return null;

  return createPortal(nav, document.body);
}
