import { keepPreviousData } from '@tanstack/react-query';
import { apiFetch } from '@/src/lib/http';
import { ProductsResponse, MarketMover } from '../types';

const MARKET_MOVERS_LIMIT = 4;

export const marketMoversKeys = {
  all: ['market-movers'] as const,
};

export function marketMoversQueryOptions() {
  return {
    queryKey: marketMoversKeys.all,
    queryFn: fetchMarketMovers,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    placeholderData: keepPreviousData,
  };
}

async function fetchMarketMovers() {
  const response = await apiFetch<ProductsResponse>(
    `/products?limit=${MARKET_MOVERS_LIMIT}`,
    {
      next: { revalidate: 60 },
    },
  );

  return mapProductsToMarketMovers(response);
}

export function mapProductsToMarketMovers(response: ProductsResponse): MarketMover[] {
  return response.products.map(product => ({
    id: product.id,
    name: product.title,
    category: product.category,
    price: product.price,
    rating: product.rating,
    changePercentage: Number(product.discountPercentage.toFixed(2)),
  }));
}
