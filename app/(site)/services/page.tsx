import { Container, Stack, Text, Title } from '@mantine/core';
import { ServicesSection } from '@/src/features/site/components/services-section';
import { GoalsSection } from '@/src/features/site/components/goals-section';

export const metadata = {
  title: 'Services | YFIN Nepal',
};

export default function ServicesPage() {
  return (
    <>
      <Container size="lg" py="xl">
        <Stack gap="md">
          <Title order={1}>Our Services</Title>
          <Text c="dimmed" maw={640}>
            We align nationwide programs around unity, leadership, cultural preservation,
            and national harmony for Indigenous youth.
          </Text>
        </Stack>
      </Container>
      <ServicesSection />
      <GoalsSection />
    </>
  );
}
