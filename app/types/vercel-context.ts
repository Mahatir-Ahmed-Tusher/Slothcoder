// Define a type for Vercel environment
export type VercelEnv = Record<string, any>;

// Extend the AppLoadContext for Vercel
declare module '@remix-run/node' {
  interface AppLoadContext {
    env?: VercelEnv;
  }
}