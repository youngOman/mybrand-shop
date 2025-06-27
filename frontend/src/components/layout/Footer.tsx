import Link from "next/link";

export default function Footer() {
  return (
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
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  首頁
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  產品總覽
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  品牌介紹
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-4">客戶服務</h6>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">客服專線：02-1234-5678</span>
              </li>
              <li>
                <span className="text-gray-400">服務時間：週一至週五 9:00-18:00</span>
              </li>
              <li>
                <span className="text-gray-400">Email：service@mybrand.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-4">關注我們</h6>
            <div className="flex space-x-4">
              <span className="text-2xl hover:scale-110 transition-transform cursor-pointer">📘</span>
              <span className="text-2xl hover:scale-110 transition-transform cursor-pointer">📷</span>
              <span className="text-2xl hover:scale-110 transition-transform cursor-pointer">📺</span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 MyBrand Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}