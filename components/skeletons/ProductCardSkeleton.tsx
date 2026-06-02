export default function ProductCardSkeleton() {
  return (
    <div className="flex flex-col h-full animate-pulse">
      <div className="relative aspect-[3/4] bg-brand-latte/60 rounded-2xl mb-4 overflow-hidden border border-brand-rose/10">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-latte via-brand-cream to-brand-latte animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
      </div>

      <div className="flex flex-col flex-grow space-y-3 px-0.5">
        <div className="space-y-1.5">
          <div className="h-4 bg-brand-latte rounded-full w-3/4" />
          <div className="h-4 bg-brand-latte/70 rounded-full w-1/2" />
        </div>
        <div className="flex gap-1.5">
          <div className="w-4 h-4 rounded-full bg-brand-latte" />
          <div className="w-4 h-4 rounded-full bg-brand-latte" />
        </div>
        <div className="flex items-baseline gap-2">
          <div className="h-5 bg-brand-latte rounded-full w-20" />
          <div className="h-4 bg-brand-latte/60 rounded-full w-12" />
        </div>
        <div className="mt-auto pt-2 lg:hidden">
          <div className="h-10 bg-brand-latte/50 rounded-full w-full" />
        </div>
      </div>
    </div>
  );
}
