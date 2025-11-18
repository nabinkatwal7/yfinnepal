'use client';

import { Card, Container, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { goals } from '@/src/content/site';
import { FadeSection } from './fade-section';

export function GoalsSection() {
  return (
    <Container size="lg" py="xl">
      <FadeSection>
        <Stack gap="md">
          <Title order={2}>Our Goals</Title>
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            {goals.map(goal => (
              <Card key={goal.title} withBorder radius="lg" padding="xl">
                <Text fw={600}>{goal.title}</Text>
                <Text size="sm" mt="xs" c="dimmed">
                  {goal.description}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </FadeSection>
    </Container>
  );
}
