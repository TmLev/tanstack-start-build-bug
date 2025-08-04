import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(tailwind)/landing-page")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 pb-20 pt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-800">
                🚀 New: AI-Powered Analytics Dashboard
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
                Build Better
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  Products{" "}
                </span>
                Faster
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-gray-600">
                Transform your product development process with our comprehensive suite of tools.
                From ideation to launch, {"we've"} got everything you need to succeed.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="transform rounded-lg bg-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-purple-700">
                  Start Free Trial
                </button>
                <button className="rounded-lg border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 transition-colors hover:border-gray-400">
                  Watch Demo
                </button>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <span>✅</span>
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>✅</span>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>✅</span>
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rotate-3 transform rounded-2xl bg-gradient-to-br from-purple-400 to-blue-500 p-8 shadow-2xl transition-transform duration-300 hover:rotate-0">
                <div className="space-y-4 rounded-xl bg-white p-6">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 w-3/4 rounded bg-gray-200"></div>
                    <div className="h-4 w-1/2 rounded bg-gray-200"></div>
                    <div className="h-4 w-5/6 rounded bg-gray-200"></div>
                    <div className="h-20 rounded-lg bg-gradient-to-r from-purple-100 to-blue-100"></div>
                    <div className="flex space-x-2">
                      <div className="h-8 flex-1 rounded bg-purple-200"></div>
                      <div className="h-8 flex-1 rounded bg-blue-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Everything you need to succeed
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Our platform provides all the tools and insights you need to build, launch, and scale
              your products effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🚀",
                title: "Rapid Prototyping",
                description:
                  "Build and test prototypes quickly with our intuitive drag-and-drop interface and pre-built components.",
              },
              {
                icon: "📊",
                title: "Advanced Analytics",
                description:
                  "Get deep insights into user behavior and product performance with our AI-powered analytics dashboard.",
              },
              {
                icon: "🔄",
                title: "Seamless Integration",
                description:
                  "Connect with your favorite tools and services through our extensive API and integration library.",
              },
              {
                icon: "👥",
                title: "Team Collaboration",
                description:
                  "Work together efficiently with real-time collaboration features and project management tools.",
              },
              {
                icon: "🔒",
                title: "Enterprise Security",
                description:
                  "Keep your data safe with enterprise-grade security, compliance, and privacy controls.",
              },
              {
                icon: "⚡",
                title: "Lightning Fast",
                description:
                  "Experience blazing-fast performance with our optimized infrastructure and global CDN.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group rounded-xl bg-gray-50 p-8 transition-colors hover:bg-gray-100"
              >
                <div className="mb-4 text-4xl transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="leading-relaxed text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Trusted by thousands of companies
            </h2>
            <p className="text-xl text-purple-100">
              Join the growing community of successful product teams
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { number: "50K+", label: "Active Users" },
              { number: "1M+", label: "Products Launched" },
              { number: "99.9%", label: "Uptime" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold md:text-5xl">{stat.number}</div>
                <div className="text-lg text-purple-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600">Choose the plan {"that's"} right for your team</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "$29",
                period: "/month",
                description: "Perfect for small teams getting started",
                features: [
                  "Up to 5 team members",
                  "10 projects",
                  "Basic analytics",
                  "Email support",
                  "1GB storage",
                ],
                popular: false,
              },
              {
                name: "Professional",
                price: "$99",
                period: "/month",
                description: "Best for growing teams and businesses",
                features: [
                  "Up to 25 team members",
                  "Unlimited projects",
                  "Advanced analytics",
                  "Priority support",
                  "100GB storage",
                  "Custom integrations",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "$299",
                period: "/month",
                description: "For large organizations with advanced needs",
                features: [
                  "Unlimited team members",
                  "Unlimited projects",
                  "Enterprise analytics",
                  "24/7 phone support",
                  "1TB storage",
                  "Custom integrations",
                  "SSO & advanced security",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-xl bg-white p-8 shadow-lg ${
                  plan.popular ? "scale-105 transform ring-2 ring-purple-500" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                    <span className="rounded-full bg-purple-500 px-4 py-1 text-sm font-medium text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-8 text-center">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="mb-4 text-gray-600">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="ml-1 text-gray-500">{plan.period}</span>
                  </div>
                </div>
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <span className="text-green-500">✅</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full rounded-lg px-6 py-3 font-semibold transition-colors ${
                    plan.popular
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to transform your product development?
          </h2>
          <p className="mb-8 text-xl text-indigo-100">
            Join thousands of teams who are already building better products with our platform.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="transform rounded-lg bg-white px-8 py-4 text-lg font-semibold text-indigo-600 transition-all duration-200 hover:scale-105 hover:bg-gray-100">
              Start Your Free Trial
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-indigo-600">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="mb-4 flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600"></div>
                <span className="text-xl font-bold">ProductLaunch</span>
              </div>
              <p className="mb-6 max-w-md text-gray-400">
                Empowering teams to build better products faster with our comprehensive suite of
                development tools and analytics.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-xl text-gray-400 hover:text-white">
                  📘
                </a>
                <a href="#" className="text-xl text-gray-400 hover:text-white">
                  🐦
                </a>
                <a href="#" className="text-xl text-gray-400 hover:text-white">
                  💼
                </a>
                <a href="#" className="text-xl text-gray-400 hover:text-white">
                  📷
                </a>
              </div>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ProductLaunch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
