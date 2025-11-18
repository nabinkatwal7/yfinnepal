import { Container, Stack, Text, Title } from '@mantine/core';
import { ContactSection } from '@/src/features/site/components/contact-section';
import { contactContent } from '@/src/content/site';

export const metadata = {
  title: 'Contact | YFIN Nepal',
};

export default function ContactPage() {
  return (
    <>
      <Container size="lg" py="xl">
        <Stack gap="md">
          <Title order={1}>Get in Touch</Title>
          <Text c="dimmed" maw={640}>
            We coordinate with Indigenous youth groups nationwide. Reach us anytime at{' '}
            {contactContent.email} or call {contactContent.phone}.
          </Text>
        </Stack>
      </Container>
      <ContactSection />
    </>
  );
}
