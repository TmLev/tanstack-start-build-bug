import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(tailwind)/admin-settings")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className="rounded-xl bg-white p-6 shadow-sm">
              <div className="space-y-2">
                {[
                  { name: "General", icon: "⚙️", active: true },
                  { name: "Users", icon: "👥", active: false },
                  { name: "Security", icon: "🔒", active: false },
                  { name: "Billing", icon: "💳", active: false },
                  { name: "Integrations", icon: "🔗", active: false },
                  { name: "API Keys", icon: "🔑", active: false },
                  { name: "Notifications", icon: "🔔", active: false },
                  { name: "Audit Logs", icon: "📋", active: false },
                ].map((item, index) => (
                  <button
                    key={index}
                    className={`flex w-full items-center space-x-3 rounded-lg px-4 py-3 text-left transition-colors ${
                      item.active
                        ? "border-r-2 border-indigo-500 bg-indigo-50 text-indigo-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </button>
                ))}
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {/* General Settings */}
              <div className="rounded-xl bg-white shadow-sm">
                <div className="border-b border-gray-200 px-6 py-4">
                  <h2 className="text-lg font-semibold text-gray-900">General Settings</h2>
                  <p className="mt-1 text-sm text-gray-600">
                    {" Manage your application's basic configuration "}
                  </p>
                </div>
                <div className="space-y-6 p-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Application Name
                      </label>
                      <input
                        type="text"
                        defaultValue="My Application"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Company Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Acme Corporation"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <textarea
                      rows={4}
                      defaultValue="A comprehensive business management platform designed to streamline operations and improve productivity."
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Time Zone
                      </label>
                      <select className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-indigo-500">
                        <option>UTC-8 (Pacific Time)</option>
                        <option>UTC-5 (Eastern Time)</option>
                        <option>UTC+0 (GMT)</option>
                        <option>UTC+1 (Central European Time)</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Language
                      </label>
                      <select className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-indigo-500">
                        <option>English (US)</option>
                        <option>English (UK)</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Toggles */}
              <div className="rounded-xl bg-white shadow-sm">
                <div className="border-b border-gray-200 px-6 py-4">
                  <h2 className="text-lg font-semibold text-gray-900">Feature Toggles</h2>
                  <p className="mt-1 text-sm text-gray-600">
                    Enable or disable application features
                  </p>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {[
                      {
                        name: "User Registration",
                        description: "Allow new users to create accounts",
                        enabled: true,
                      },
                      {
                        name: "Email Notifications",
                        description: "Send email notifications to users",
                        enabled: true,
                      },
                      {
                        name: "Two-Factor Authentication",
                        description: "Require 2FA for all user accounts",
                        enabled: false,
                      },
                      {
                        name: "API Access",
                        description: "Enable API endpoints for third-party integrations",
                        enabled: true,
                      },
                      {
                        name: "Analytics Tracking",
                        description: "Collect usage analytics and metrics",
                        enabled: true,
                      },
                      {
                        name: "Maintenance Mode",
                        description: "Put the application in maintenance mode",
                        enabled: false,
                      },
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-lg bg-gray-50 p-4"
                      >
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{feature.name}</h3>
                          <p className="mt-1 text-sm text-gray-600">{feature.description}</p>
                        </div>
                        <div className="ml-4">
                          <button
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              feature.enabled ? "bg-indigo-600" : "bg-gray-200"
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                feature.enabled ? "translate-x-6" : "translate-x-1"
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email Configuration */}
              <div className="rounded-xl bg-white shadow-sm">
                <div className="border-b border-gray-200 px-6 py-4">
                  <h2 className="text-lg font-semibold text-gray-900">Email Configuration</h2>
                  <p className="mt-1 text-sm text-gray-600">
                    Configure SMTP settings for email delivery
                  </p>
                </div>
                <div className="space-y-6 p-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        SMTP Host
                      </label>
                      <input
                        type="text"
                        defaultValue="smtp.gmail.com"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        SMTP Port
                      </label>
                      <input
                        type="number"
                        defaultValue="587"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Username
                      </label>
                      <input
                        type="email"
                        defaultValue="noreply@example.com"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <input
                        type="password"
                        defaultValue="••••••••••••"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700">
                      Test Connection
                    </button>
                    <span className="flex items-center space-x-1 text-sm text-green-600">
                      <span>✅</span>
                      <span>Connection successful</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Storage Configuration */}
              <div className="rounded-xl bg-white shadow-sm">
                <div className="border-b border-gray-200 px-6 py-4">
                  <h2 className="text-lg font-semibold text-gray-900">Storage Configuration</h2>
                  <p className="mt-1 text-sm text-gray-600">
                    Configure file storage and CDN settings
                  </p>
                </div>
                <div className="space-y-6 p-6">
                  <div>
                    <label className="mb-3 block text-sm font-medium text-gray-700">
                      Storage Provider
                    </label>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                      {[
                        { name: "AWS S3", selected: true, icon: "☁️" },
                        { name: "Google Cloud", selected: false, icon: "🌐" },
                        { name: "Local Storage", selected: false, icon: "💾" },
                      ].map((provider, index) => (
                        <div
                          key={index}
                          className={`cursor-pointer rounded-lg border-2 p-4 transition-all ${
                            provider.selected
                              ? "border-indigo-500 bg-indigo-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div className="text-center">
                            <div className="mb-2 text-2xl">{provider.icon}</div>
                            <div className="font-medium">{provider.name}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Bucket Name
                      </label>
                      <input
                        type="text"
                        defaultValue="my-app-storage"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">Region</label>
                      <select className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-indigo-500">
                        <option>us-east-1</option>
                        <option>us-west-2</option>
                        <option>eu-west-1</option>
                        <option>ap-southeast-1</option>
                      </select>
                    </div>
                  </div>

                  <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-lg text-yellow-600">⚠️</div>
                      <div>
                        <h4 className="font-medium text-yellow-800">Storage Usage Warning</h4>
                        <p className="mt-1 text-sm text-yellow-700">
                          {
                            " You're currently using 85% of your storage quota (8.5GB of 10GB). Consider upgrading your plan or cleaning up unused files. "
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between rounded-xl bg-white p-6 shadow-sm">
                <div>
                  <h3 className="font-medium text-gray-900">Save Changes</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Make sure to save your changes before leaving this page
                  </p>
                </div>
                <div className="flex space-x-4">
                  <button className="rounded-lg border border-gray-300 px-6 py-2 text-gray-700 transition-colors hover:bg-gray-50">
                    Cancel
                  </button>
                  <button className="rounded-lg bg-indigo-600 px-6 py-2 text-white transition-colors hover:bg-indigo-700">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
