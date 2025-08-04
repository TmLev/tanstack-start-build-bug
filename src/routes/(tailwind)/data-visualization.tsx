import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(tailwind)/data-visualization")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Control Panel */}
        <div className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Time Range</label>
                <select className="rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                  <option>Last year</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Data Source</label>
                <select className="rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500">
                  <option>All Sources</option>
                  <option>Web Analytics</option>
                  <option>Mobile App</option>
                  <option>API Calls</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Region</label>
                <select className="rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500">
                  <option>Global</option>
                  <option>North America</option>
                  <option>Europe</option>
                  <option>Asia Pacific</option>
                </select>
              </div>
            </div>
            <button className="rounded-lg bg-gray-100 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-200">
              🔄 Refresh Data
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Total Users",
              value: "2,847,392",
              change: "+12.5%",
              positive: true,
              icon: "👥",
              color: "from-blue-500 to-blue-600",
            },
            {
              title: "Revenue",
              value: "$1,234,567",
              change: "+8.2%",
              positive: true,
              icon: "💰",
              color: "from-green-500 to-green-600",
            },
            {
              title: "Conversion Rate",
              value: "3.24%",
              change: "-2.1%",
              positive: false,
              icon: "📈",
              color: "from-purple-500 to-purple-600",
            },
            {
              title: "Avg Session",
              value: "4m 32s",
              change: "+15.7%",
              positive: true,
              icon: "⏱️",
              color: "from-orange-500 to-orange-600",
            },
          ].map((metric, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex items-center justify-between">
                <div
                  className={`h-12 w-12 bg-gradient-to-r ${metric.color} flex items-center justify-center rounded-lg text-xl text-white`}
                >
                  {metric.icon}
                </div>
                <div
                  className={`text-sm font-medium ${metric.positive ? "text-green-600" : "text-red-600"}`}
                >
                  {metric.change}
                </div>
              </div>
              <div>
                <p className="mb-1 text-sm text-gray-600">{metric.title}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Line Chart */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">User Growth Trend</h3>
              <div className="flex space-x-2">
                <button className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  Daily
                </button>
                <button className="rounded-full px-3 py-1 text-sm text-gray-500 hover:bg-gray-100">
                  Weekly
                </button>
                <button className="rounded-full px-3 py-1 text-sm text-gray-500 hover:bg-gray-100">
                  Monthly
                </button>
              </div>
            </div>
            <div className="relative h-64">
              <svg className="h-full w-full" viewBox="0 0 400 200">
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 150 Q 50 120 100 130 T 200 100 T 300 80 T 400 60"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M 0 150 Q 50 120 100 130 T 200 100 T 300 80 T 400 60 L 400 200 L 0 200 Z"
                  fill="url(#gradient1)"
                />
                {[0, 100, 200, 300, 400].map((x, i) => (
                  <circle key={i} cx={x} cy={150 - i * 20} r="4" fill="#3B82F6" />
                ))}
              </svg>
              <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 text-xs text-gray-500">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
              </div>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Revenue by Channel</h3>
              <button className="text-gray-400 hover:text-gray-600">⋯</button>
            </div>
            <div className="space-y-4">
              {[
                { name: "Organic Search", value: 45, amount: "$234K", color: "bg-blue-500" },
                { name: "Paid Ads", value: 30, amount: "$156K", color: "bg-green-500" },
                { name: "Social Media", value: 15, amount: "$78K", color: "bg-purple-500" },
                { name: "Email", value: 10, amount: "$52K", color: "bg-orange-500" },
              ].map((channel, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">{channel.name}</span>
                    <span className="text-sm font-semibold text-gray-900">{channel.amount}</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-gray-200">
                    <div
                      className={`${channel.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${channel.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Geographic Data */}
        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* World Map Placeholder */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
            <h3 className="mb-6 text-lg font-semibold text-gray-900">Global User Distribution</h3>
            <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 to-purple-50">
              <div className="absolute inset-0 opacity-20">
                <div className="h-full w-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
              </div>
              <div className="relative z-10 text-center">
                <div className="mb-4 text-6xl">🌍</div>
                <p className="text-gray-600">Interactive world map visualization</p>
                <p className="mt-2 text-sm text-gray-500">Click regions for detailed analytics</p>
              </div>
              {/* Simulated data points */}
              <div className="absolute left-1/4 top-1/4 h-3 w-3 animate-pulse rounded-full bg-blue-500"></div>
              <div className="absolute right-1/3 top-1/3 h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
              <div className="absolute bottom-1/3 left-1/2 h-4 w-4 animate-pulse rounded-full bg-purple-500"></div>
            </div>
          </div>

          {/* Top Countries */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-6 text-lg font-semibold text-gray-900">Top Countries</h3>
            <div className="space-y-4">
              {[
                { country: "United States", flag: "🇺🇸", users: "1,234,567", percentage: 35 },
                { country: "United Kingdom", flag: "🇬🇧", users: "456,789", percentage: 15 },
                { country: "Germany", flag: "🇩🇪", users: "345,678", percentage: 12 },
                { country: "France", flag: "🇫🇷", users: "234,567", percentage: 8 },
                { country: "Canada", flag: "🇨🇦", users: "123,456", percentage: 5 },
                { country: "Others", flag: "🌐", users: "789,012", percentage: 25 },
              ].map((country, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{country.flag}</span>
                    <div>
                      <div className="font-medium text-gray-900">{country.country}</div>
                      <div className="text-sm text-gray-500">{country.users} users</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">{country.percentage}%</div>
                    <div className="mt-1 h-2 w-16 rounded-full bg-gray-200">
                      <div
                        className="h-2 rounded-full bg-blue-500 transition-all duration-1000"
                        style={{ width: `${country.percentage * 2}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Real-time Activity Feed */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Real-time Activity Feed</h3>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600">Live</span>
            </div>
          </div>
          <div className="max-h-64 space-y-3 overflow-y-auto">
            {[
              {
                user: "john.doe@example.com",
                action: "completed purchase",
                amount: "$299",
                time: "2s ago",
                type: "purchase",
              },
              {
                user: "jane.smith@example.com",
                action: "signed up",
                amount: "",
                time: "5s ago",
                type: "signup",
              },
              {
                user: "mike.wilson@example.com",
                action: "viewed product",
                amount: "iPhone 15",
                time: "8s ago",
                type: "view",
              },
              {
                user: "sarah.johnson@example.com",
                action: "added to cart",
                amount: "$149",
                time: "12s ago",
                type: "cart",
              },
              {
                user: "alex.brown@example.com",
                action: "completed purchase",
                amount: "$89",
                time: "15s ago",
                type: "purchase",
              },
              {
                user: "lisa.davis@example.com",
                action: "started trial",
                amount: "Pro Plan",
                time: "18s ago",
                type: "trial",
              },
              {
                user: "tom.miller@example.com",
                action: "downloaded app",
                amount: "",
                time: "22s ago",
                type: "download",
              },
              {
                user: "emma.garcia@example.com",
                action: "shared content",
                amount: "Blog Post",
                time: "25s ago",
                type: "share",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg bg-gray-50 p-3 transition-colors hover:bg-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm text-white ${
                      activity.type === "purchase"
                        ? "bg-green-500"
                        : activity.type === "signup"
                          ? "bg-blue-500"
                          : activity.type === "view"
                            ? "bg-gray-500"
                            : activity.type === "cart"
                              ? "bg-orange-500"
                              : activity.type === "trial"
                                ? "bg-purple-500"
                                : activity.type === "download"
                                  ? "bg-indigo-500"
                                  : "bg-pink-500"
                    }`}
                  >
                    {activity.type === "purchase"
                      ? "💰"
                      : activity.type === "signup"
                        ? "👤"
                        : activity.type === "view"
                          ? "👁️"
                          : activity.type === "cart"
                            ? "🛒"
                            : activity.type === "trial"
                              ? "⭐"
                              : activity.type === "download"
                                ? "📱"
                                : "📤"}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{activity.user}</div>
                    <div className="text-sm text-gray-600">
                      {activity.action}{" "}
                      {activity.amount && <span className="font-medium">{activity.amount}</span>}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">{activity.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
