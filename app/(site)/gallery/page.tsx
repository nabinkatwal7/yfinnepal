import { Container, Stack, Text, Title } from '@mantine/core';
import { GallerySection } from '@/src/features/site/components/gallery-section';

export const metadata = {
  title: 'Gallery | YFIN Nepal',
};

export default function GalleryPage() {
  return (
    <>
      <Container size="lg" py="xl">
        <Stack gap="md">
          <Title order={1}>Gallery</Title>
          <Text c="dimmed" maw={640}>
            Highlights from conferences, campaigns, and leadership programs that celebrate
            Indigenous youth identity.
          </Text>
        </Stack>
      </Container>
      <GallerySection />
    </>
  );
}
