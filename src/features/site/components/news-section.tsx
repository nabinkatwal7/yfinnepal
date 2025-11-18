'use client';

import { Card, Container, Stack, Text, Title } from '@mantine/core';
import { newsItems } from '@/src/content/site';

export function NewsSection() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="md">
        <Title order={2}>News & Notice</Title>
        <Stack gap="md">
          {newsItems.map(item => (
            <Card key={item.title} withBorder radius="lg" padding="lg">
              <Text size="xs" c="dimmed">
                {item.date}
              </Text>
              <Text fw={600}>{item.title}</Text>
              <Text size="sm" mt="xs" c="dimmed">
                {item.summary}
              </Text>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
