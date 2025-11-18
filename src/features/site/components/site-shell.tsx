'use client';

import { ReactNode } from 'react';
import { Box } from '@mantine/core';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <Box component="div" minH="100vh" bg="#f6f8fb">
      <SiteHeader />
      <Box component="main">{children}</Box>
      <SiteFooter />
    </Box>
  );
}
