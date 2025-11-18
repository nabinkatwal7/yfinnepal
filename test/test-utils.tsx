import { AppProviders } from '@/app/providers';
import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';

function Providers({ children }: { children: React.ReactNode }) {
  return <AppProviders>{children}</AppProviders>;
}

export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(ui, { wrapper: Providers, ...options });
}
