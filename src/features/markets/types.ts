export type MarketMover = {
  id: number;
  name: string;
  category: string;
  price: number;
  changePercentage: number;
  rating: number;
};

export type ProductsResponse = {
  products: Array<{
    id: number;
    title: string;
    price: number;
    rating: number;
    discountPercentage: number;
    category: string;
  }>;
};
