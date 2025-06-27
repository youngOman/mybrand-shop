import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  emoji: string;
  bgColor: string;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "維生素 C 精華",
    price: 1280,
    description: "天然萃取維生素C，增強免疫力，抗氧化護膚",
    emoji: "🌿",
    bgColor: "bg-green-100"
  },
  {
    id: 2,
    name: "膠原蛋白膠囊",
    price: 2380,
    description: "海洋膠原蛋白，維持肌膚彈性，延緩老化",
    emoji: "💊",
    bgColor: "bg-blue-100"
  },
  {
    id: 3,
    name: "藍莓葉黃素",
    price: 1680,
    description: "護眼專用，減緩眼部疲勞，保護視力",
    emoji: "🫐",
    bgColor: "bg-purple-100"
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">熱門商品</h3>
          <p className="text-gray-600">精選最受歡迎的保養食品</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className={`h-48 ${product.bgColor} rounded-lg mb-4 flex items-center justify-center`}>
                <span className="text-6xl">{product.emoji}</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-600">
                  NT$ {product.price.toLocaleString()}
                </span>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                  加入購物車
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            查看更多商品
          </Link>
        </div>
      </div>
    </section>
  );
}