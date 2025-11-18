import { describe, expect, it } from 'vitest';
import { mapProductsToMarketMovers } from './get-market-movers';

describe('mapProductsToMarketMovers', () => {
  it('maps API products into the domain model', () => {
    const result = mapProductsToMarketMovers({
      products: [
        {
          id: 1,
          title: 'Sample asset',
          price: 120,
          rating: 4.25,
          discountPercentage: 3.456,
          category: 'equity',
        },
      ],
    });

    expect(result).toEqual([
      {
        id: 1,
        name: 'Sample asset',
        price: 120,
        rating: 4.25,
        changePercentage: 3.46,
        category: 'equity',
      },
    ]);
  });
});
