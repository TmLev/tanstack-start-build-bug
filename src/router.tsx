import createCache from "@emotion/cache";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter as createTanstackRouter } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";

export function createRouter() {
  const queryClient = new QueryClient();

  const emotionCache = createCache({
    key: "css",
    speedy: true,
  });

  const router = createTanstackRouter({
    routeTree,
    context: {
      queryClient,
      emotionCache,
    },
    Wrap: ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    ),
    //
    defaultSsr: false,
    defaultPreload: "intent",
    scrollRestoration: true,
    scrollRestorationBehavior: "smooth",
  });

  return router;
}

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
