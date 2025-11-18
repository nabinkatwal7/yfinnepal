import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Anchor,
  Breadcrumbs,
  Container,
  List,
  ListItem,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { FadeSection } from '@/src/features/site/components/fade-section';
import { findNewsBySlug, newsItems } from '@/src/content/site';

type NewsDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return newsItems.map(item => ({ slug: item.slug }));
}

export function generateMetadata({ params }: NewsDetailPageProps) {
  const news = findNewsBySlug(params.slug);
  if (!news) {
    return {
      title: 'News not found | YFIN Nepal',
    };
  }

  return {
    title: `${news.title} | YFIN Nepal`,
    description: news.summary,
  };
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const news = findNewsBySlug(params.slug);

  if (!news) {
    notFound();
  }

  return (
    <Container size="lg" py="xl">
      <FadeSection>
        <Stack gap="lg">
          <Breadcrumbs separator="∙" fw={500} c="dimmed">
            <Anchor component={Link} href="/">
              Home
            </Anchor>
            <Anchor component={Link} href="/news">
              News & Notice
            </Anchor>
            <Text>{news.title}</Text>
          </Breadcrumbs>
          <Stack gap={8}>
            <Title order={1}>{news.title}</Title>
            <Text size="sm" c="dimmed">
              {news.date}
            </Text>
          </Stack>
          <Text size="lg" c="dimmed">
            {news.summary}
          </Text>
          <List spacing="md">
            {news.content.map(paragraph => (
              <ListItem key={paragraph}>{paragraph}</ListItem>
            ))}
          </List>
        </Stack>
      </FadeSection>
    </Container>
  );
}
