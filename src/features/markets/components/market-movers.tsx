'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import {
  Badge,
  Card,
  Group,
  Progress,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconTrendingUp } from '@tabler/icons-react';
import { marketMoversQueryOptions } from '../api/get-market-movers';

export function MarketMovers() {
  const { data } = useSuspenseQuery(marketMoversQueryOptions());

  return (
    <Stack gap="md">
      <Group justify="space-between" align="flex-end">
        <div>
          <Title order={3}>Market movers</Title>
          <Text c="dimmed" size="sm">
            Top performing assets pulled from the demo API
          </Text>
        </div>
        <Badge color="blue" variant="light" leftSection={<IconTrendingUp size={14} />}>
          Live
        </Badge>
      </Group>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>
        {data.map(asset => (
          <Card key={asset.id} shadow="sm" padding="lg" radius="lg" withBorder>
            <Stack gap="xs">
              <Text fw={600}>{asset.name}</Text>
              <Text size="sm" c="dimmed">
                {asset.category}
              </Text>
              <Group gap="xs" align="flex-end">
                <Text size="lg" fw={700}>
                  ${asset.price.toFixed(2)}
                </Text>
                <Badge
                  color={asset.changePercentage >= 0 ? 'green' : 'red'}
                  variant="light"
                >
                  {asset.changePercentage >= 0 ? '+' : ''}
                  {asset.changePercentage}%
                </Badge>
              </Group>
              <div>
                <Group justify="space-between">
                  <Text size="xs" c="dimmed">
                    Sentiment
                  </Text>
                  <Text size="xs" fw={600}>
                    {asset.rating.toFixed(1)} / 5
                  </Text>
                </Group>
                <Progress
                  value={(asset.rating / 5) * 100}
                  color="teal"
                  size="sm"
                  radius="xl"
                />
              </div>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
