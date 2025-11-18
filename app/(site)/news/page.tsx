import { Container, Stack, Text, Title } from '@mantine/core';
import { NewsSection } from '@/src/features/site/components/news-section';

export const metadata = {
  title: 'News & Notice | YFIN Nepal',
};

export default function NewsPage() {
  return (
    <>
      <Container size="lg" py="xl">
        <Stack gap="md">
          <Title order={1}>News & Notice</Title>
          <Text c="dimmed" maw={640}>
            Updates on conferences, advocacy weeks, and community-focused events.
          </Text>
        </Stack>
      </Container>
      <NewsSection />
    </>
  );
}
