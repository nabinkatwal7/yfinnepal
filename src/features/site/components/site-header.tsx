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
    <div style={{ background: 'linear-gradient(120deg, #0f63e6, #00459a)' }}>
      <Container size="lg" py="sm">
        <Group justify="space-between" align="center">
          <div>
            <Text c="white" fw={700} size="lg">
              YFIN NEPAL
            </Text>
            <Text c="white" size="xs">
              Youth Federation of Indigenous Nationalities
            </Text>
          </div>
          <Group visibleFrom="md" gap="lg">
            {navItems.map(item => (
              <Anchor
                key={item.href}
                component={Link}
                href={item.href}
                c="white"
                fw={500}
              >
                {item.label}
              </Anchor>
            ))}
            <Button component={Link} href="/contact" variant="white" color="dark">
              Get in touch
            </Button>
          </Group>
          <Burger opened={opened} onClick={onToggle} hiddenFrom="md" color="white" />
        </Group>
      </Container>
    </div>
  );
}
