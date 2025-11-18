'use client';

'use client';

import { Card, Container, Stack, Text, Title, Button } from '@mantine/core';
import { newsItems } from '@/src/content/site';
import Link from 'next/link';
import { FadeSection } from './fade-section';

export function NewsSection() {
  return (
    <Container size="lg" py="xl">
      <FadeSection>
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
                <Button
                  component={Link}
                  href={`/news/${item.slug}`}
                  size="xs"
                  variant="light"
                  mt="md"
                  w="fit-content"
                >
                  Read more
                </Button>
              </Card>
            ))}
          </Stack>
        </Stack>
      </FadeSection>
    </Container>
  );
}
