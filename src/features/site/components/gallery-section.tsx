'use client';

import { Card, Container, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { galleryItems } from '@/src/content/site';
import { FadeSection } from './fade-section';

export function GallerySection() {
  return (
    <Container size="lg" py="xl">
      <FadeSection>
        <Stack gap="md">
          <Title order={2}>Gallery & Highlights</Title>
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
            {galleryItems.map(item => (
              <Card
                key={item.title}
                padding="xl"
                radius="lg"
                style={{
                  background: 'linear-gradient(135deg, rgba(94,162,255,0.2), #ffffff)',
                }}
              >
                <Text fw={600}>{item.title}</Text>
                <Text size="sm" mt="xs" c="dimmed">
                  {item.description}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </FadeSection>
    </Container>
  );
}
