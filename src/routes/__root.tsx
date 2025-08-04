/// <reference types="vite/client" />

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ReactNode } from "react";

import createCache from "@emotion/cache";
import { QueryClient } from "@tanstack/react-query";
import {
  ClientOnly,
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";

import { Providers } from "./-providers";
import APP_CSS from "./app.css?url";

export interface RouterContext {
  queryClient: QueryClient;
  emotionCache: ReturnType<typeof createCache>;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => {
    return {
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          title: "TanStack Start build bug",
        },
        // https://github.com/TanStack/router/issues/2867#issuecomment-3061088836
        {
          name: "emotion-insertion-point",
          content: "",
        },
      ],
      links: [
        {
          rel: "stylesheet",
          href: APP_CSS,
        },
      ],
    };
  },

  component: RootComponent,
});

function RootComponent() {
  const { emotionCache } = Route.useRouteContext();

  return (
    <RootDocument>
      <Providers emotionCache={emotionCache}>
        <ClientOnly>
          <Outlet />
        </ClientOnly>
      </Providers>
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>

      <body>
        {children}

        <Scripts />
      </body>
    </html>
  );
}
