import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(tailwind)/social-feed")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="mb-6 rounded-xl bg-white p-6 shadow-sm">
              <div className="text-center">
                <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                <h3 className="text-lg font-semibold">John Doe</h3>
                <p className="text-gray-500">@johndoe</p>
                <div className="mt-4 flex justify-center space-x-4 text-sm">
                  <div className="text-center">
                    <div className="font-semibold">1.2K</div>
                    <div className="text-gray-500">Following</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">3.4K</div>
                    <div className="text-gray-500">Followers</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trending */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold">Trending</h3>
              <div className="space-y-3">
                {[
                  { tag: "#WebDevelopment", posts: "12.5K posts" },
                  { tag: "#ReactJS", posts: "8.2K posts" },
                  { tag: "#TailwindCSS", posts: "5.1K posts" },
                  { tag: "#JavaScript", posts: "15.3K posts" },
                  { tag: "#TypeScript", posts: "7.8K posts" },
                ].map((trend, index) => (
                  <div key={index} className="cursor-pointer rounded-lg p-2 hover:bg-gray-50">
                    <div className="font-medium text-blue-600">{trend.tag}</div>
                    <div className="text-sm text-gray-500">{trend.posts}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-2">
            {/* Create Post */}
            <div className="mb-6 rounded-xl bg-white p-6 shadow-sm">
              <div className="flex space-x-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                <div className="flex-1">
                  <textarea
                    placeholder="What's on your mind?"
                    className="w-full resize-none rounded-lg border border-gray-200 p-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    rows={3}
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex space-x-4 text-gray-500">
                      <button className="hover:text-blue-500">📷</button>
                      <button className="hover:text-green-500">🎥</button>
                      <button className="hover:text-yellow-500">😊</button>
                      <button className="hover:text-red-500">📍</button>
                    </div>
                    <button className="rounded-lg bg-blue-500 px-6 py-2 text-white transition-colors hover:bg-blue-600">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-6">
              {[
                {
                  user: "Sarah Wilson",
                  username: "@sarahw",
                  time: "2h",
                  content:
                    "Just finished building an amazing dashboard with React and Tailwind CSS! The component composition is so clean and the styling is incredibly flexible. 🚀",
                  image: "🖥️",
                  likes: 42,
                  comments: 8,
                  shares: 3,
                  hasImage: true,
                },
                {
                  user: "Mike Chen",
                  username: "@mikechen",
                  time: "4h",
                  content:
                    "Hot take: TypeScript makes JavaScript development so much more enjoyable. The type safety and IntelliSense support are game changers! 💯",
                  likes: 128,
                  comments: 23,
                  shares: 15,
                  hasImage: false,
                },
                {
                  user: "Emma Rodriguez",
                  username: "@emmarodriguez",
                  time: "6h",
                  content:
                    "Working on a new e-commerce platform with Next.js and Stripe integration. The developer experience is fantastic! Here's a sneak peek of the product catalog:",
                  image: "🛍️",
                  likes: 89,
                  comments: 12,
                  shares: 7,
                  hasImage: true,
                },
                {
                  user: "Alex Thompson",
                  username: "@alexthompson",
                  time: "8h",
                  content:
                    "Just deployed my first full-stack application to production! Using React, Node.js, and PostgreSQL. The feeling of seeing your code live is unmatched! 🎉",
                  likes: 156,
                  comments: 34,
                  shares: 22,
                  hasImage: false,
                },
                {
                  user: "Lisa Park",
                  username: "@lisapark",
                  time: "12h",
                  content:
                    "Sharing some UI/UX tips for better user experience: 1) Keep it simple 2) Use consistent spacing 3) Choose readable fonts 4) Test on real devices",
                  image: "🎨",
                  likes: 203,
                  comments: 45,
                  shares: 38,
                  hasImage: true,
                },
              ].map((post, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  {/* Post Header */}
                  <div className="mb-4 flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-purple-500 font-semibold text-white">
                      {post.user
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold">{post.user}</h4>
                        <span className="text-sm text-gray-500">{post.username}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-sm text-gray-500">{post.time}</span>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">⋯</button>
                  </div>

                  {/* Post Content */}
                  <div className="mb-4">
                    <p className="leading-relaxed text-gray-800">{post.content}</p>
                  </div>

                  {/* Post Image */}
                  {post.hasImage && (
                    <div className="mb-4 flex h-64 items-center justify-center rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 text-6xl">
                      {post.image}
                    </div>
                  )}

                  {/* Post Actions */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <button className="flex items-center space-x-2 text-gray-500 transition-colors hover:text-red-500">
                      <span>❤️</span>
                      <span className="text-sm">{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 transition-colors hover:text-blue-500">
                      <span>💬</span>
                      <span className="text-sm">{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 transition-colors hover:text-green-500">
                      <span>🔄</span>
                      <span className="text-sm">{post.shares}</span>
                    </button>
                    <button className="text-gray-500 transition-colors hover:text-blue-500">
                      <span>📤</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            {/* Suggestions */}
            <div className="mb-6 rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold">Suggested for you</h3>
              <div className="space-y-4">
                {[
                  { name: "Tech Innovators", members: "12.5K", category: "Technology" },
                  { name: "Design Community", members: "8.2K", category: "Design" },
                  { name: "Startup Founders", members: "5.1K", category: "Business" },
                  { name: "React Developers", members: "15.3K", category: "Programming" },
                ].map((suggestion, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-indigo-400 to-purple-500"></div>
                      <div>
                        <div className="text-sm font-medium">{suggestion.name}</div>
                        <div className="text-xs text-gray-500">{suggestion.members} members</div>
                      </div>
                    </div>
                    <button className="text-sm font-medium text-blue-500 hover:text-blue-600">
                      Join
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { action: "liked your post", user: "Jane Smith", time: "5m" },
                  { action: "commented on your photo", user: "Bob Johnson", time: "12m" },
                  { action: "started following you", user: "Alice Brown", time: "1h" },
                  { action: "shared your post", user: "Tom Wilson", time: "2h" },
                  { action: "mentioned you in a post", user: "Sarah Davis", time: "3h" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-xs font-semibold text-white">
                      {activity.user
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm">
                        <span className="font-medium">{activity.user}</span>
                        <span className="text-gray-600"> {activity.action}</span>
                      </div>
                      <div className="text-xs text-gray-500">{activity.time} ago</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
