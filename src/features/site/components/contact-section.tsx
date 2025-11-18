'use client';

import {
  Card,
  Container,
  Grid,
  Stack,
  Text,
  TextInput,
  Textarea,
  Title,
} from '@mantine/core';
import { contactContent } from '@/src/content/site';
import { FadeSection } from './fade-section';

export function ContactSection() {
  return (
    <Container size="lg" py="xl">
      <FadeSection>
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Stack gap="md">
              <Title order={2}>Contact Us</Title>
              <Text size="sm">
                Phone:{' '}
                <Text component="a" href={`tel:${contactContent.phone}`} fw={600}>
                  {contactContent.phone}
                </Text>
              </Text>
              <Text size="sm">
                Email:{' '}
                <Text component="a" href={`mailto:${contactContent.email}`} fw={600}>
                  {contactContent.email}
                </Text>
              </Text>
              <Text size="sm">Address: {contactContent.address}</Text>
              <Text size="sm">Hours: {contactContent.hours}</Text>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Card withBorder radius="lg" padding="xl">
              <Stack gap="sm">
                <Title order={4}>Send us a message</Title>
                <TextInput label="Full name" placeholder="Enter your name" required />
                <TextInput
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
                <Textarea
                  label="Message"
                  minRows={4}
                  placeholder="How can we collaborate?"
                  required
                />
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </FadeSection>
    </Container>
  );
}
