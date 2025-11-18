'use client';

import { Card, SimpleGrid, Skeleton, Stack } from '@mantine/core';

export function MarketMoversSkeleton() {
  return (
    <Stack gap="md">
      <Skeleton height={32} radius="md" />
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={`skeleton-${index}`} padding="lg" radius="lg" withBorder>
            <Stack gap="xs">
              <Skeleton height={16} width="60%" />
              <Skeleton height={12} width="40%" />
              <Skeleton height={20} width="70%" />
              <Skeleton height={8} radius="xl" />
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
