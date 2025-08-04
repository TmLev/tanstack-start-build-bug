import { createFileRoute } from "@tanstack/react-router";

import { MeasureDialog } from "@/components/measure-dialog";

////////////////////////////////////////////////////////////////////////////////////////////////////

export const Route = createFileRoute("/(authed)/project/$a/(task)/$b/$c")({
  component: RouteComponent,
});

function RouteComponent() {
  return <MeasureDialog open={true} onClose={() => {}} />;
}
