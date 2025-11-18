import { appConfig } from './env';

type FetchInit = RequestInit & {
  next?: {
    revalidate?: number;
    tags?: string[];
  };
};

export async function apiFetch<TResponse>(path: string, init?: FetchInit) {
  const url = buildUrl(path);

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
    ...init,
  });

  if (!response.ok) {
    const errorBody = await safeParseJson(response);
    throw new Error(
      errorBody?.message ?? `Request to ${url} failed with status ${response.status}`,
    );
  }

  if (response.status === 204 || response.headers.get('Content-Length') === '0') {
    return undefined as TResponse;
  }

  return (await response.json()) as TResponse;
}

function buildUrl(path: string) {
  if (path.startsWith('http')) {
    return path;
  }

  return `${appConfig.apiBaseUrl}${path.startsWith('/') ? '' : '/'}${path}`;
}

async function safeParseJson(response: Response) {
  try {
    return await response.json();
  } catch {
    return undefined;
  }
}
