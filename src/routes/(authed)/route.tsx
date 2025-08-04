import { Container } from "@mui/material";
import { createFileRoute, Outlet } from "@tanstack/react-router";

import { Loader } from "@/components/loader";

export const Route = createFileRoute("/(authed)")({
  component: RouteComponent,
  pendingComponent: Loader,
});

function RouteComponent() {
  return (
    <Container style={{ maxWidth: 1200 }}>
      <Outlet />
    </Container>
  );
}
