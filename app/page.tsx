import { Hero } from '@/src/features/home/components/hero';
import { marketMoversQueryOptions } from '@/src/features/markets/api/get-market-movers';
import { MarketMoversBoundary } from '@/src/features/markets/components/market-movers-boundary';
import { Container, Stack } from '@mantine/core';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

export const revalidate = 300;

async function getDehydratedState() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(marketMoversQueryOptions());
  return dehydrate(queryClient);
}

export default async function Home() {
  const dehydratedState = await getDehydratedState();

  return (
    <HydrationBoundary state={dehydratedState}>
      <Container size="lg" py="xl">
        <Stack gap="xl">
          <Hero />
          <MarketMoversBoundary />
        </Stack>
      </Container>
    </HydrationBoundary>
  );
}
