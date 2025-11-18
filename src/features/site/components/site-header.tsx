'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Anchor,
  Burger,
  Button,
  Container,
  Drawer,
  Group,
  Stack,
  Text,
} from '@mantine/core';
import { siteNavigation } from '@/src/content/site';

export function SiteHeader() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <BoxedHeader
        navItems={siteNavigation}
        opened={opened}
        onToggle={() => setOpened(o => !o)}
      />
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Navigate"
        padding="md"
        size="sm"
      >
        <Stack gap="md">
          {siteNavigation.map(item => (
            <Anchor
              key={item.href}
              component={Link}
              href={item.href}
              fw={600}
              c="#0f172a"
              onClick={() => setOpened(false)}
            >
              {item.label}
            </Anchor>
          ))}
        </Stack>
        <Button component={Link} href="/contact" mt="lg">
          Contact Us
        </Button>
      </Drawer>
    </>
  );
}

type BoxedHeaderProps = {
  navItems: typeof siteNavigation;
  opened: boolean;
  onToggle: () => void;
};

function BoxedHeader({ navItems, opened, onToggle }: BoxedHeaderProps) {
  return (
    <div style={{ background: 'linear-gradient(120deg, #fef7ec, #dbeafe)' }}>
      <Container size="lg" py="sm">
        <Group justify="space-between" align="center">
          <div>
            <Text c="#0f172a" fw={700} size="lg">
              YFIN NEPAL
            </Text>
            <Text c="#334155" size="xs">
              Youth Federation of Indigenous Nationalities
            </Text>
          </div>
          <Group visibleFrom="md" gap="lg">
            {navItems.map(item => (
              <Anchor
                key={item.href}
                component={Link}
                href={item.href}
                c="#0f172a"
                fw={500}
              >
                {item.label}
              </Anchor>
            ))}
            <Button component={Link} href="/contact" variant="light" color="brand">
              Get in touch
            </Button>
          </Group>
          <Burger opened={opened} onClick={onToggle} hiddenFrom="md" color="#0f172a" />
        </Group>
      </Container>
    </div>
  );
}
