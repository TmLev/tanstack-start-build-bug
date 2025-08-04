import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(tailwind)/another")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Total Revenue", value: "$45,231.89", change: "+20.1%", positive: true },
            { title: "Active Users", value: "2,350", change: "+180.1%", positive: true },
            { title: "Conversion Rate", value: "12.5%", change: "-19%", positive: false },
            { title: "Avg. Session", value: "4m 32s", change: "+7%", positive: true },
          ].map((stat, index) => (
            <div
              key={index}
              className="transform rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-300">{stat.title}</p>
                  <p className="mt-2 text-2xl font-bold text-white">{stat.value}</p>
                </div>
                <div
                  className={`text-sm font-medium ${stat.positive ? "text-green-400" : "text-red-400"}`}
                >
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Revenue Chart */}
          <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-lg">
            <h3 className="mb-4 text-lg font-semibold text-white">Revenue Overview</h3>
            <div className="flex h-64 items-end justify-between rounded-lg bg-gradient-to-t from-purple-500/20 to-transparent px-4 pb-4">
              {[40, 65, 45, 80, 55, 70, 85, 60, 75, 90, 65, 95].map((height, index) => (
                <div
                  key={index}
                  className="w-6 rounded-t-sm bg-gradient-to-t from-purple-400 to-pink-400 transition-all duration-500 hover:from-purple-300 hover:to-pink-300"
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
          </div>

          {/* User Activity */}
          <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-lg">
            <h3 className="mb-4 text-lg font-semibold text-white">User Activity</h3>
            <div className="space-y-4">
              {[
                { name: "Desktop", percentage: 65, color: "bg-blue-500" },
                { name: "Mobile", percentage: 30, color: "bg-green-500" },
                { name: "Tablet", percentage: 5, color: "bg-yellow-500" },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">{item.name}</span>
                    <span className="font-medium text-white">{item.percentage}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-700">
                    <div
                      className={`${item.color} h-2 rounded-full transition-all duration-1000`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity Table */}
        <div className="overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-lg">
          <div className="border-b border-white/20 px-6 py-4">
            <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
                    Action
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
                    Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {[
                  {
                    user: "John Doe",
                    action: "Created new project",
                    time: "2 minutes ago",
                    status: "success",
                  },
                  {
                    user: "Jane Smith",
                    action: "Updated profile",
                    time: "5 minutes ago",
                    status: "success",
                  },
                  {
                    user: "Mike Johnson",
                    action: "Failed login attempt",
                    time: "10 minutes ago",
                    status: "error",
                  },
                  {
                    user: "Sarah Wilson",
                    action: "Uploaded file",
                    time: "15 minutes ago",
                    status: "success",
                  },
                  {
                    user: "Tom Brown",
                    action: "Deleted item",
                    time: "20 minutes ago",
                    status: "warning",
                  },
                ].map((activity, index) => (
                  <tr key={index} className="transition-colors hover:bg-white/5">
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-sm font-medium text-white">
                          {activity.user
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-white">{activity.user}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                      {activity.action}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                      {activity.time}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                          activity.status === "success"
                            ? "bg-green-100 text-green-800"
                            : activity.status === "error"
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {activity.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
