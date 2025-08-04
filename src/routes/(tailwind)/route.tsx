import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { cva } from "class-variance-authority";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const Route = createFileRoute("/(tailwind)")({
  component: RouteComponent,
});

function RouteComponent() {
  const location = useLocation();

  const navigationItems = [
    { to: "/another", label: "Analytics Dashboard", icon: "📊" },
    { to: "/random", label: "E-commerce Store", icon: "🛍️" },
    { to: "/social-feed", label: "Social Feed", icon: "📱" },
    { to: "/admin-settings", label: "Admin Settings", icon: "⚙️" },
    { to: "/landing-page", label: "Landing Page", icon: "🚀" },
    { to: "/data-visualization", label: "Data Viz", icon: "📈" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-sm font-bold text-white">
                TW
              </div>
              <h1 className="text-xl font-bold text-gray-900">Tailwind Demo Hub</h1>
            </div>

            {/* Desktop Navigation */}
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

            {/* Mobile Menu Button */}
            <button className="p-2 text-gray-600 hover:text-gray-900 lg:hidden">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="border-t border-gray-200 py-4 lg:hidden">
            <div className="grid grid-cols-2 gap-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  preload="viewport"
                  className={`flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname === item.to
                      ? "bg-purple-100 text-purple-700"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 flex items-center space-x-2 md:mb-0">
              <div className="h-6 w-6 rounded bg-gradient-to-r from-purple-600 to-blue-600"></div>
              <span className="text-gray-600">Tailwind Demo Hub - Complex UI Examples</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span>Built with React + TanStack Router + Tailwind CSS</span>
              <span>•</span>
              <span>{navigationItems.length} Demo Pages</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent",
);
