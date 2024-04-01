/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

declare global {
  const __APP_VERSION__: string;
  const __GIT_HASH__: boolean;
}

export {}; // Important! See note.
