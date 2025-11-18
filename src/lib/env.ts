import { z } from 'zod';

const clientSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url().default('https://dummyjson.com'),
});

const serverSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

export const clientEnv = clientSchema.parse({
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const serverEnv = serverSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
});

export const appConfig = {
  apiBaseUrl: clientEnv.NEXT_PUBLIC_API_BASE_URL.replace(/\/$/, ''),
  nodeEnv: serverEnv.NODE_ENV,
};
