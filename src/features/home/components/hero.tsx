'use client';

import Link from 'next/link';
import { Button, Group, Stack, Text, Title } from '@mantine/core';

export function Hero() {
  return (
    <Stack gap="xl">
      <Stack gap="md" maw={640}>
        <Title order={1} size="h2">
          Nepal Youth Finance Radar
        </Title>
        <Text size="lg" c="dimmed">
          Rapidly prototype financial dashboards with TanStack Query data flows, Mantine
          components, and type-safe utilities already wired up.
        </Text>
      </Stack>
      <Group gap="md">
        <Button component={Link} href="https://mantine.dev" target="_blank">
          Explore components
        </Button>
        <Button
          component={Link}
          href="https://tanstack.com/query/latest"
          target="_blank"
          variant="light"
        >
          Query docs
        </Button>
      </Group>
    </Stack>
  );
}
