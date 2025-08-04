import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(tailwind)/random")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">Discover Amazing Products</h1>
            <p className="mb-8 text-xl text-purple-100 md:text-2xl">
              Shop the latest trends with unbeatable prices
            </p>
            <button className="transform rounded-lg bg-white px-8 py-3 text-lg font-semibold text-purple-600 transition-all duration-200 hover:scale-105 hover:bg-gray-100">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold">Shop by Category</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { name: "Electronics", icon: "📱", color: "bg-blue-500" },
              { name: "Fashion", icon: "👗", color: "bg-pink-500" },
              { name: "Home & Garden", icon: "🏠", color: "bg-green-500" },
              { name: "Sports", icon: "⚽", color: "bg-orange-500" },
              { name: "Books", icon: "📚", color: "bg-purple-500" },
              { name: "Beauty", icon: "💄", color: "bg-red-500" },
              { name: "Toys", icon: "🧸", color: "bg-yellow-500" },
              { name: "Automotive", icon: "🚗", color: "bg-gray-500" },
            ].map((category, index) => (
              <div
                key={index}
                className="group transform cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`${category.color} rounded-xl p-8 text-center text-white shadow-lg hover:shadow-xl`}
                >
                  <div className="mb-4 text-4xl">{category.icon}</div>
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <button className="font-medium text-indigo-600 hover:text-indigo-800">
              View All →
            </button>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Wireless Headphones",
                price: "$199",
                originalPrice: "$249",
                image: "🎧",
                rating: 4.8,
                reviews: 124,
              },
              {
                name: "Smart Watch",
                price: "$299",
                originalPrice: "$399",
                image: "⌚",
                rating: 4.6,
                reviews: 89,
              },
              {
                name: "Laptop Stand",
                price: "$49",
                originalPrice: "$69",
                image: "💻",
                rating: 4.9,
                reviews: 203,
              },
              {
                name: "Coffee Maker",
                price: "$129",
                originalPrice: "$179",
                image: "☕",
                rating: 4.7,
                reviews: 156,
              },
              {
                name: "Bluetooth Speaker",
                price: "$79",
                originalPrice: "$99",
                image: "🔊",
                rating: 4.5,
                reviews: 78,
              },
              {
                name: "Fitness Tracker",
                price: "$149",
                originalPrice: "$199",
                image: "📱",
                rating: 4.4,
                reviews: 92,
              },
              {
                name: "Desk Lamp",
                price: "$39",
                originalPrice: "$59",
                image: "💡",
                rating: 4.8,
                reviews: 167,
              },
              {
                name: "Wireless Mouse",
                price: "$29",
                originalPrice: "$39",
                image: "🖱️",
                rating: 4.6,
                reviews: 234,
              },
            ].map((product, index) => (
              <div
                key={index}
                className="group transform rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <div className="flex h-48 items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-6xl">
                    {product.image}
                  </div>
                  <div className="absolute right-4 top-4 rounded-full bg-red-500 px-2 py-1 text-sm font-semibold text-white">
                    Sale
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-10"></div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-indigo-600">
                    {product.name}
                  </h3>
                  <div className="mb-3 flex items-center">
                    <div className="flex text-sm text-yellow-400">
                      {"★".repeat(Math.floor(product.rating))}
                      {"☆".repeat(5 - Math.floor(product.rating))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-indigo-600">{product.price}</span>
                      <span className="text-gray-400 line-through">{product.originalPrice}</span>
                    </div>
                    <button className="transform rounded-lg bg-indigo-600 px-4 py-2 text-white transition-all duration-200 hover:scale-105 hover:bg-indigo-700">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold">Stay Updated</h2>
          <p className="mb-8 text-lg text-gray-300">
            Get the latest deals and product updates delivered to your inbox
          </p>
          <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-indigo-500"
            />
            <button className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold transition-colors hover:bg-indigo-700">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xl font-bold">ShopHub</h3>
              <p className="text-gray-300">Your one-stop shop for everything you need.</p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Categories</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Electronics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Fashion
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Home
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-xl text-gray-300 hover:text-white">
                  📘
                </a>
                <a href="#" className="text-xl text-gray-300 hover:text-white">
                  🐦
                </a>
                <a href="#" className="text-xl text-gray-300 hover:text-white">
                  📷
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-300">
            <p>&copy; 2024 ShopHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
