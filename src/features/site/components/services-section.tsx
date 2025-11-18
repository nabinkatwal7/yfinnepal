'use client';

import { Card, Container, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { services } from '@/src/content/site';
import { FadeSection } from './fade-section';

export function ServicesSection() {
  return (
    <Container size="lg" py="xl">
      <FadeSection>
        <Stack gap="md">
          <Title order={2}>Services</Title>
          <Text c="dimmed" maw={640}>
            Priority areas we deliver for Indigenous youth across Nepal.
          </Text>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
            {services.map(service => (
              <Card
                key={service.title}
                shadow="sm"
                radius="xl"
                padding="xl"
                withBorder
                style={{ backgroundColor: '#ffffff' }}
              >
                <Text fw={600}>{service.title}</Text>
                <Text size="sm" mt="xs" c="dimmed">
                  {service.description}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </FadeSection>
    </Container>
  );
}
