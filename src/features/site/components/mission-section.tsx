'use client';

import { organizationContent } from '@/src/content/site';
import { Card, Container, List, ListItem, Stack, Text, Title } from '@mantine/core';

export function MissionSection() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="md">
        <Title order={2}>{organizationContent.heading}</Title>
        <Text size="lg" c="dimmed">
          {organizationContent.description}
        </Text>
        <Text fw={600}>{organizationContent.conferenceHighlight}</Text>
        <Card withBorder radius="lg" padding="xl">
          <List spacing="sm">
            {organizationContent.missionPoints.map(point => (
              <ListItem key={point}>{point}</ListItem>
            ))}
          </List>
        </Card>
      </Stack>
    </Container>
  );
}
