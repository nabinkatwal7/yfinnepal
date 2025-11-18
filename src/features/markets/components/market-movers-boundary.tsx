'use client';

import { Suspense } from 'react';
import { MarketMovers } from './market-movers';
import { MarketMoversSkeleton } from './market-movers-skeleton';

export function MarketMoversBoundary() {
  return (
    <Suspense fallback={<MarketMoversSkeleton />}>
      <MarketMovers />
    </Suspense>
  );
}
