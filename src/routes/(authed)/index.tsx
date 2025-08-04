import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(authed)/")({
  beforeLoad: () => {
    throw redirect({
      to: "/project/$a/$b/$c",
      params: {
        a: "1",
        b: "2",
        c: "3",
      },
      replace: true,
    });
  },
});
