import { Card, CardContent, CardHeader, Dialog } from "@mui/material";
import { Link } from "@tanstack/react-router";
import { cva } from "class-variance-authority";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navigationItems = [
  { to: "/another", label: "Analytics Dashboard", icon: "📊" },
  { to: "/random", label: "E-commerce Store", icon: "🛍️" },
  { to: "/social-feed", label: "Social Feed", icon: "📱" },
  { to: "/admin-settings", label: "Admin Settings", icon: "⚙️" },
  { to: "/landing-page", label: "Landing Page", icon: "🚀" },
  { to: "/data-visualization", label: "Data Viz", icon: "📈" },
];

export function MeasureDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      disableEscapeKeyDown={true}
      PaperProps={{
        className: "!w-dvw !h-dvh !max-w-[unset] !max-h-[unset] !m-0",
      }}
    >
      <div className="grid h-full w-full grid-cols-[auto_1fr] gap-[12px] bg-[#ECEEF0] p-[12px]">
        <div className="min-h-0 w-[340px] overflow-y-auto overflow-x-hidden rounded-xl shadow-md">
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex space-x-1">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.to}>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link
                      to={item.to}
                      preload="viewport"
                      className={`flex items-center space-x-2 ${
                        location.pathname === item.to
                          ? "border-purple-200 bg-purple-100 text-purple-700"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Card>
            <CardHeader>Card header</CardHeader>
            <CardContent>Card content</CardContent>
          </Card>
        </div>
      </div>
    </Dialog>
  );
}

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent",
);
