"use client";

import Link from "next/link";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: "維生素 C 精華",
    price: 1280,
    originalPrice: 1580,
    description: "天然萃取維生素C，增強免疫力，抗氧化護膚",
    category: "維生素",
    image: "🌿",
    rating: 4.8,
    reviews: 156
  },
  {
    id: 2,
    name: "膠原蛋白膠囊",
    price: 2380,
    description: "海洋膠原蛋白，維持肌膚彈性，延緩老化",
    category: "美容保養",
    image: "💊",
    rating: 4.9,
    reviews: 203
  },
  {
    id: 3,
    name: "藍莓葉黃素",
    price: 1680,
    description: "護眼專用，減緩眼部疲勞，保護視力",
    category: "護眼保健",
    image: "🫐",
    rating: 4.7,
    reviews: 89
  },
  {
    id: 4,
    name: "魚油 Omega-3",
    price: 1880,
    originalPrice: 2280,
    description: "深海魚油萃取，促進心血管健康",
    category: "心血管",
    image: "🐟",
    rating: 4.6,
    reviews: 134
  },
  {
    id: 5,
    name: "益生菌膠囊",
    price: 1580,
    description: "10億活性益生菌，調節腸道健康",
    category: "腸胃保健",
    image: "🦠",
    rating: 4.8,
    reviews: 178
  },
  {
    id: 6,
    name: "鈣鎂鋅複合錠",
    price: 980,
    description: "骨骼保健三合一，強化骨質密度",
    category: "骨骼保健",
    image: "🦴",
    rating: 4.5,
    reviews: 92
  },
  {
    id: 7,
    name: "蜂王乳膠囊",
    price: 2680,
    description: "純天然蜂王乳，滋補養顏，增強體力",
    category: "滋補養生",
    image: "🍯",
    rating: 4.9,
    reviews: 245
  },
  {
    id: 8,
    name: "薑黃素錠",
    price: 1480,
    originalPrice: 1780,
    description: "95%高濃度薑黃素，抗發炎，護肝排毒",
    category: "肝臟保健",
    image: "🧡",
    rating: 4.7,
    reviews: 167
  }
];

const categories = ["全部", "維生素", "美容保養", "護眼保健", "心血管", "腸胃保健", "骨骼保健", "滋補養生", "肝臟保健"];

export default function ProductsPage() {
  
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [priceRange, setPriceRange] = useState([0, 3000]);

  const filteredProducts = mockProducts.filter(product => {
    const matchesCategory = selectedCategory === "全部" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "reviews":
        return b.reviews - a.reviews;
      default:
        return a.id - b.id;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/">
                <h1 className="text-2xl font-bold text-green-600">MyBrand Shop</h1>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-gray-500 hover:text-green-600 px-3 py-2 text-sm font-medium">
                  首頁
                </Link>
                <Link href="/products" className="text-green-600 hover:text-green-800 px-3 py-2 text-sm font-medium">
                  產品總覽
                </Link>
                <Link href="/about" className="text-gray-500 hover:text-green-600 px-3 py-2 text-sm font-medium">
                  品牌介紹
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">產品總覽</h1>
          <p className="text-gray-600">探索我們精選的優質保養食品</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h3 className="text-lg font-semibold mb-4">搜尋商品</h3>
              <input
                type="text"
                placeholder="輸入關鍵字..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h3 className="text-lg font-semibold mb-4">商品分類</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? "bg-green-100 text-green-800 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">價格範圍</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">NT$ {priceRange[0]}</span>
                  <span className="text-sm text-gray-600">-</span>
                  <span className="text-sm text-gray-600">NT$ {priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="3000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-green-600"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>NT$ 0</span>
                  <span>NT$ 3,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Sort and Results Count */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <p className="text-gray-600 mb-4 sm:mb-0">
                顯示 {sortedProducts.length} 項商品
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="default">預設排序</option>
                <option value="price-low">價格由低到高</option>
                <option value="price-high">價格由高到低</option>
                <option value="rating">評分最高</option>
                <option value="reviews">評論最多</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                    <span className="text-6xl">{product.image}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      <div className="flex text-yellow-400">
                        {"★".repeat(Math.floor(product.rating))}
                        {"☆".repeat(5 - Math.floor(product.rating))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-green-600">
                          NT$ {product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            NT$ {product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      {product.originalPrice && (
                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                          省 NT$ {(product.originalPrice - product.price).toLocaleString()}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors">
                        加入購物車
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        ❤️
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">😅</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">沒有找到符合條件的商品</h3>
                <p className="text-gray-600 mb-4">請嘗試調整搜尋條件或瀏覽其他分類</p>
                <button
                  onClick={() => {
                    setSelectedCategory("全部");
                    setSearchTerm("");
                    setPriceRange([0, 3000]);
                  }}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  重置篩選條件
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="bg-green-600 py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">訂閱電子報</h3>
          <p className="text-green-100 mb-8 text-lg">獲得最新優惠資訊和健康知識</p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="輸入您的電子郵件"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              訂閱
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-xl font-bold mb-4">MyBrand Shop</h5>
              <p className="text-gray-400">
                專業的保養食品品牌，致力於提供最優質的健康產品
              </p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">快速連結</h6>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white">首頁</Link></li>
                <li><Link href="/products" className="text-gray-400 hover:text-white">產品總覽</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white">品牌介紹</Link></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">客戶服務</h6>
              <ul className="space-y-2">
                <li><span className="text-gray-400">客服專線：02-1234-5678</span></li>
                <li><span className="text-gray-400">服務時間：週一至週五 9:00-18:00</span></li>
                <li><span className="text-gray-400">Email：service@mybrand.com</span></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">關注我們</h6>
              <div className="flex space-x-4">
                <span className="text-2xl">📘</span>
                <span className="text-2xl">📷</span>
                <span className="text-2xl">📺</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 MyBrand Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}