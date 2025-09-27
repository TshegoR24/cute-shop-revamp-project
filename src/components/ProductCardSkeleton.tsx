import { Skeleton } from "@/components/ui/skeleton";

export const ProductCardSkeleton = () => {
  return (
    <div className="group relative overflow-hidden border border-border/50 bg-background">
      {/* Image Skeleton */}
      <div className="relative aspect-[4/5] overflow-hidden bg-muted/30">
        <Skeleton className="w-full h-full" />
      </div>

      {/* Content Skeleton */}
      <div className="p-6 space-y-3">
        {/* Category Skeleton */}
        <Skeleton className="h-3 w-16" />
        
        {/* Product Name Skeleton */}
        <Skeleton className="h-5 w-3/4" />
        
        {/* Rating Skeleton */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Skeleton key={star} className="h-3 w-3 rounded-full" />
            ))}
          </div>
          <Skeleton className="h-3 w-8" />
        </div>
        
        {/* Price Skeleton */}
        <Skeleton className="h-6 w-20" />
      </div>
    </div>
  );
};
