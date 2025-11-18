'use client';

import { contactContent, siteNavigation } from '@/src/content/site';
import {
  ActionIcon,
  Anchor,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from '@tabler/icons-react';
import Link from 'next/link';

const socialIcons = [
  { icon: IconBrandFacebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: IconBrandTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: IconBrandInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: IconBrandLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

export function SiteFooter() {
  return (
    <div style={{ backgroundColor: '#021c3d', color: 'white' }}>
      <Container size="lg" py="xl">
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
          <Stack gap={4}>
            <Text fw={700}>YFIN Nepal</Text>
            <Text size="sm" c="dimmed">
              Youth Federation of Indigenous Nationalities, Nepal
            </Text>
            <Text size="sm">{contactContent.address}</Text>
            <Text size="sm">
              Phone:{' '}
              <Anchor href={`tel:${contactContent.phone}`} c="white">
                {contactContent.phone}
              </Anchor>
            </Text>
            <Text size="sm">
              Email:{' '}
              <Anchor href={`mailto:${contactContent.email}`} c="white">
                {contactContent.email}
              </Anchor>
            </Text>
            <Group gap="sm" mt="sm">
              {socialIcons.map(item => (
                <ActionIcon
                  key={item.label}
                  component="a"
                  href={item.href}
                  variant="default"
                  style={{ backgroundColor: 'white' }}
                  target="_blank"
                  aria-label={item.label}
                >
                  <item.icon size={18} />
                </ActionIcon>
              ))}
            </Group>
          </Stack>
          <Stack gap={8}>
            <Text fw={600}>Quick Links</Text>
            {siteNavigation.map(item => (
              <Anchor key={item.href} component={Link} href={item.href} c="white">
                {item.label}
              </Anchor>
            ))}
          </Stack>
          <Stack gap={8}>
            <Text fw={600}>Newsletter</Text>
            <Text size="sm">
              Join us to get updates about advocacy, leadership, and community
              initiatives.
            </Text>
            <input
              type="email"
              placeholder="Your email"
              style={{
                padding: '0.75rem',
                borderRadius: 12,
                border: 'none',
                marginTop: '0.5rem',
              }}
            />
          </Stack>
        </SimpleGrid>
        <Text size="xs" mt="lg" c="dimmed">
          © {new Date().getFullYear()} Youth Federation of Indigenous Nationalities,
          Nepal. All rights reserved.
        </Text>
      </Container>
    </div>
  );
}
