'use client';

import { Container, Group, Paper, Stack, Text } from '@mantine/core';
import { stats } from '@/src/content/site';

export function StatsStrip() {
  return (
    <div style={{ backgroundColor: '#f2f6ff' }}>
      <Container size="lg" py="xl">
        <Group gap="md" justify="space-between" grow>
          {stats.map(stat => (
            <Paper key={stat.label} radius="lg" padding="xl" withBorder ta="center">
              <Stack gap={4} align="center">
                <Text fw={700} size="xl">
                  {stat.value}
                </Text>
                <Text size="sm" c="dimmed">
                  {stat.label}
                </Text>
              </Stack>
            </Paper>
          ))}
        </Group>
      </Container>
    </div>
  );
}
