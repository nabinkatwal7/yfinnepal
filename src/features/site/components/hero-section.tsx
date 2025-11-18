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

export function HeroSection() {
  return (
    <div style={{ background: 'linear-gradient(135deg, #0f63e6, #00459a)' }}>
      <Container size="lg" py={{ base: 64, sm: 96 }}>
        <Stack gap="xl">
          <Badge size="lg" radius="xl" variant="light" color="blue" w="fit-content">
            Youth Federation of Indigenous Nationalities, Nepal
          </Badge>
          <Title order={1} c="white" size="h2">
            {heroContent.title}
          </Title>
          <Text size="lg" c="white" maw={640}>
            {heroContent.subtitle}
          </Text>
          <Group gap="md">
            <Button component={Link} href={heroContent.ctaPrimary.href} size="md">
              {heroContent.ctaPrimary.label}
            </Button>
            <Button
              component={Link}
              href={heroContent.ctaSecondary.href}
              variant="white"
              color="dark"
              size="md"
            >
              {heroContent.ctaSecondary.label}
            </Button>
          </Group>
          <Paper withBorder radius="xl" p="xl" bg="rgba(255,255,255,0.1)" c="white">
            <Text fw={600}>{organizationContent.heading}</Text>
            <Text size="sm" mt="xs">
              {organizationContent.description}
            </Text>
          </Paper>
        </Stack>
      </Container>
    </div>
  );
}
