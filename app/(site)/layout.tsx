import { ReactNode } from 'react';
import { SiteShell } from '@/src/features/site/components/site-shell';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return <SiteShell>{children}</SiteShell>;
}
