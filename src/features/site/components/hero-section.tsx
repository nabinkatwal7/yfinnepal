'use client';
'use client';
import { heroContent, organizationContent } from '@/src/content/site';
import {
  Badge,
  Button,
  Container,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import Link from 'next/link';
import { FadeSection } from './fade-section';

export function HeroSection() {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #fef7ec, #e0f2ff)',
      }}
    >
      <Container size="lg" py={{ base: 64, sm: 96 }}>
        <FadeSection>
          <Stack gap="xl">
            <Badge size="lg" radius="xl" variant="light" color="brand" w="fit-content">
              Youth Federation of Indigenous Nationalities, Nepal
            </Badge>
            <Title order={1} size="h2" c="#0f172a">
              {heroContent.title}
            </Title>
            <Text size="lg" c="#1f2937" maw={640}>
              {heroContent.subtitle}
            </Text>
            <Group gap="md">
              <Button component={Link} href={heroContent.ctaPrimary.href} size="md">
                {heroContent.ctaPrimary.label}
              </Button>
              <Button
                component={Link}
                href={heroContent.ctaSecondary.href}
                variant="outline"
                color="brand"
                size="md"
              >
                {heroContent.ctaSecondary.label}
              </Button>
            </Group>
            <Paper withBorder radius="xl" p="xl" bg="rgba(255,255,255,0.7)">
              <Text fw={600}>{organizationContent.heading}</Text>
              <Text size="sm" mt="xs" c="dimmed">
                {organizationContent.description}
              </Text>
            </Paper>
          </Stack>
        </FadeSection>
      </Container>
    </div>
  );
}
