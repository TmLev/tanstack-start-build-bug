import { ReactNode } from "react";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

// import { CssBaseline } from "@mui/material";

export function Providers({
  emotionCache,
  children,
}: {
  emotionCache: ReturnType<typeof createCache>;
  children: ReactNode;
}) {
  return <MuiProvider emotionCache={emotionCache}>{children}</MuiProvider>;
}

// Source: https://tanstack.com/start/latest/docs/framework/react/examples/start-material-ui
//
// TODO(TmLev): Not sure if we need to use `ThemeProvider`.
function MuiProvider({
  emotionCache,
  children,
}: {
  emotionCache: ReturnType<typeof createCache>;
  children: ReactNode;
}) {
  return (
    <CacheProvider value={emotionCache}>
      {/* <CssBaseline /> */}

      {children}
    </CacheProvider>
  );
}
