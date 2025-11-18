import { Container, Stack, Text, Title } from '@mantine/core';
import { MissionSection } from '@/src/features/site/components/mission-section';
import { ChairMessageSection } from '@/src/features/site/components/chair-message-section';
import { StatsStrip } from '@/src/features/site/components/stats-strip';
import { organizationContent } from '@/src/content/site';

export const metadata = {
  title: 'About YFIN Nepal',
};

export default function AboutPage() {
  return (
    <>
      <Container size="lg" py="xl">
        <Stack gap="md">
          <Title order={1}>About YFIN Nepal</Title>
          <Text size="lg" c="dimmed">
            {organizationContent.description}
          </Text>
        </Stack>
      </Container>
      <MissionSection />
      <StatsStrip />
      <ChairMessageSection />
    </>
  );
}
