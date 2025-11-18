'use client';

import { Avatar, Card, Container, Stack, Text, Title } from '@mantine/core';
import { chairMessage } from '@/src/content/site';
import { FadeSection } from './fade-section';

export function ChairMessageSection() {
  return (
    <Container size="lg" py="xl">
      <FadeSection>
        <Card radius="lg" padding="xl" shadow="sm" withBorder>
          <Stack gap="md">
            <Title order={3}>Message from Chairperson</Title>
            <Text size="sm" style={{ whiteSpace: 'pre-wrap' }}>
              {chairMessage.message}
            </Text>
            <Stack gap={4} align="flex-start">
              <Avatar radius="xl" color="brand">
                KS
              </Avatar>
              <Text fw={600}>{chairMessage.author}</Text>
              <Text size="sm" c="dimmed">
                {chairMessage.role}
              </Text>
            </Stack>
          </Stack>
        </Card>
      </FadeSection>
    </Container>
  );
}
